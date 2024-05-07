import MainPost from "@/components/blog/MainPost";
import SecondaryPosts from "@/components/blog/SecondaryPosts";
import { client, urlFor } from "../lib/sanity";
import Header from "@/components/Header";
import BlogSlider from "@/components/blog/BlogSlider";
import Footer from "@/components/Footer";
import Spinner from "@/components/Spinner";
import Image from "next/image";

export const serializers = {
  types: {
    // Common block types
    block: ({ node, children }) => {
      switch (node.style) {
        case "h1":
          return (
            <h1 className="text-black-800 mb-4 text-3xl font-bold">
              {children}
            </h1>
          );
        case "h2":
          return (
            <h2 className="text-black-800 mb-3 text-2xl font-bold">
              {children}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-black-800 mb-2 text-xl font-bold">
              {children}
            </h3>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic">
              {children}
            </blockquote>
          );

        default:
          return <p className="mb-4 text-gray-800">{children}</p>;
      }
    },

    image: ({ node }) => {
      return (
        <Image
          height={800}
          width={800}
          loading="lazy"
          src={urlFor(node.asset).url()}
          className="mb-4 w-full"
          alt={node.alt}
        />
      );
    },
  },
  marks: {
    link: ({ mark, children }) => (
      <a
        href={mark.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

async function getPosts() {
  const data = await client.fetch(
    `*[_type == "post"] {title, slug, body, publishedAt, mainImage {asset -> {_id, url}, alt,}, "name": author -> name, } | order(publishedAt asc)`,
    { next: { revalidate: 30 } },
  );

  return data;
}

export const metadata = {
  title: "BLOG",
};

async function Blog() {
  const data = await getPosts();

  if (!data)
    return (
      <section className="container mx-auto flex items-center justify-center">
        <Spinner />
      </section>
    );

  return (
    <>
      {data[0] && <MainPost post={data[0]} />}
      <SecondaryPosts posts={data.slice(1, 3)} />
      <BlogSlider posts={data} />

      <Footer />
    </>
  );
}

export default Blog;
