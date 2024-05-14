"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

//
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function BlogSlider({ posts }) {
  const sectionRef = useRef();

  useEffect(() => {
    // Ensure your elements exist
    if (sectionRef.current) {
      // Use the ScrollTrigger.create static method to set up the animation
      ScrollTrigger.create({
        trigger: sectionRef.current, // Reference to your DOM element
        toggleActions: "play none none none", // Actions: onEnter, onLeave, onEnterBack, onLeaveBack
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
      className="container relative z-50 mx-auto mb-24 flex w-full items-center justify-center px-5 opacity-0 lg:mb-40 xl:px-16"
    >
      <Carousel className="z-10 w-[80%] md:w-[90%] xl:w-full">
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem
              key={post.title}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div
                href={`/blog/${post.slug.current}`}
                key={post.title}
                className="relative"
              >
                <div className="flex flex-col items-center overflow-hidden">
                  <Image
                    height={600}
                    width={600}
                    src={urlFor(post.mainImage).url()}
                    alt={post.mainImage.alt}
                    className="mb-4 !h-72 rounded-2xl object-cover shadow-md"
                  />
                  <p className="-mb-0.5 w-full px-4 text-sm font-semibold uppercase text-primary">
                    Blog Post
                  </p>
                  <p className="mb-3 w-full px-4 text-left text-lg font-bold capitalize">
                    {`${post.title.substring(0, 35)}${post.title.length > 34 ? "..." : ""}`}
                  </p>
                  <p className="px-4 text-left text-base">
                    {`${post.body[0].children[0].text.substring(0, 140)}...`}
                  </p>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    target="_blank"
                    className="mr-auto mt-auto inline-block cursor-pointer rounded-full px-4 py-2 text-secondary transition-all hover:text-secondary-foreground"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default BlogSlider;
