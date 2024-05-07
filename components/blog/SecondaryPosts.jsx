import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

function SecondaryPosts({ posts }) {
  return (
    <section className="container mx-auto mb-56 flex flex-col items-center justify-center gap-12 md:flex-row lg:gap-24">
      {posts.map((post) => (
        <Link
          // href={`/blog/${post.slug.current}`}
          href="#"
          key={post.title}
          className="group relative w-full lg:w-1/3"
        >
          <div className="absolute left-0 top-0 z-10 hidden h-full w-full  rounded-xl bg-zinc-900/40 group-hover:block" />
          <FiLink
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block"
            size={42}
            color="#fff"
          />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              height={500}
              width={500}
              className="h-[280px] w-full object-fill lg:h-[360px]"
              src={urlFor(post.mainImage).url()}
              alt={post.mainImage.alt}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to bottom, #D9D9D900, #FBFBFBE4)",
              }}
            />
            <div className=" absolute bottom-0 px-8 pb-6">
              <p className="-mb-0.5 text-sm font-semibold uppercase text-primary">
                Blog Post
              </p>
              <p className="text-foreground mb-3 w-full text-left text-xl font-bold capitalize">
                {post.title.substring(0, 30)}
              </p>
              <p className="text-foreground text-left text-base">
                {post?.body[0].children[0].text.substring(0, 92) + "..."}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default SecondaryPosts;
