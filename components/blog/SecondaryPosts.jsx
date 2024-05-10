"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function SecondaryPosts({ posts }) {
  const sectionRef = useRef();

  useEffect(() => {
    // Ensure your elements exist
    if (sectionRef.current) {
      // Use the ScrollTrigger.create static method to set up the animation
      ScrollTrigger.create({
        trigger: sectionRef.current, // Reference to your DOM element
        start: "top bottom",
        end: "bottom top",
        onEnter: () =>
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: +200 },
            { opacity: 1, y: 0, duration: 1 },
          ),
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container relative z-10 mx-auto mb-24 flex flex-col items-center justify-center gap-12 px-5 md:flex-row lg:mb-40 lg:gap-24"
    >
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug.current}`}
          key={post.title}
          className="group relative z-10 w-full lg:w-1/3"
        >
          <div className="absolute left-0 top-0 z-10 hidden h-full w-full  rounded-xl bg-zinc-900/40 group-hover:block" />
          <FiLink
            className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block"
            size={42}
            color="#fff"
          />
          <div className="relative overflow-hidden rounded-2xl shadow-md">
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
              <p className="mb-3 w-full text-left text-xl font-bold capitalize text-foreground">
                {`${post.title.substring(0, 35)}${post.title.length > 34 ? "..." : ""}`}
              </p>
              <p className="text-left text-base text-foreground">
                {post?.body[0].children[0].text.substring(0, 92) + "..."}
              </p>
            </div>
          </div>
        </Link>
      ))}
      <Image
        width={500}
        height={500}
        src="/svgline.svg"
        alt="svg"
        className="absolute -bottom-[160%] right-1/2 hidden w-full translate-x-1/2 2xl:block "
      />
    </section>
  );
}

export default SecondaryPosts;
