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

function BlogSlider({ posts }) {
  return (
    <section className="container relative mx-auto mb-24 flex w-full items-center justify-center px-5 lg:mb-40 xl:px-16">
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
                    className="mb-4 !h-72 rounded-2xl object-cover"
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
                    className="text-secondary hover:text-secondary-foreground mr-auto mt-auto inline-block cursor-pointer rounded-full px-4 py-2 transition-all"
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
