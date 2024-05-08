import { client } from "@/app/lib/sanity";
import { format } from "date-fns";
import Image from "next/image";
import { serializers } from "../page";
import SanityBlockContent from "@sanity/block-content-to-react";
import Footer from "@/components/Footer";

async function getPost(slug) {
  const data = await client.fetch(
    `*[slug.current == "${slug}"] {
      title,
      body[]{
        ...,
        // Adjust the serializers for different block types
        _type == "image" => {
          // Include the URL directly in the "asset" field
          "_key": _key,
          "_type": _type,
          "asset": {
            "_id": asset._ref,
            "url": asset->url
          },
          "alt": alt
        },
      },
      publishedAt,
      "name": author -> name,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`,
    { next: { revalidate: 30 } },
  );
  return data;
}

export async function generateMetadata({ params }, parent) {
  const { slug } = params;

  return {
    title: `Blog | ${slug.replaceAll("-", " ")}`,
  };
}

async function page({ params }) {
  const { slug } = params;
  const data = await getPost(slug);
  const singlePost = data[0];

  return (
    <>
      <section className="container mx-auto -mt-20 mb-24 px-4 lg:mb-40 ">
        <article className="mb-12 text-black">
          <p className="mb-8 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
            {singlePost.title}
          </p>
          <Image
            height={1200}
            width={1200}
            src={singlePost.mainImage?.asset.url}
            alt={singlePost.mainImage?.alt}
            className="mb-4 h-[480px] w-full object-cover lg:h-[600px]"
          />
          <p className=" mb-10">
            <span>Published by</span>
            <em className="font-semibold text-stone-800">
              {" "}
              &middot; {singlePost.name} &middot;
            </em>
            <span> At</span>
            <em className="text-stone-800">
              {" "}
              {singlePost.publishedAt &&
                format(new Date(singlePost.publishedAt), "LLLL dd yyyy")}
            </em>
          </p>
          <SanityBlockContent
            blocks={singlePost?.body}
            serializers={serializers}
          />
        </article>
      </section>
      <Footer />
    </>
  );
}

export default page;
