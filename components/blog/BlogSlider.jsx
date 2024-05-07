import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";

//
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function BlogSlider({ posts }) {
  console.log(posts);
  return (
    <section className="container mx-auto mb-12 flex w-full items-center justify-center px-4 xl:px-16">
      <Carousel className="w-[80%] lg:w-full">
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem
              key={post.title}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Link
                //  href={`/blog/${post.slug.current}`}
                href="#"
                key={post.title}
                className="relative"
              >
                {/* <div className="absolute left-0 top-0 hidden h-full w-full  rounded-xl bg-slate-900/60 group-hover:block" />
                <FiLink
                  className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block"
                  size={42}
                  color="#fff"
                /> */}
                <div className="flex h-[440px] flex-col items-center overflow-hidden lg:h-[520px]">
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
                  <p className="text-black-800 mb-3 w-full px-4 text-left text-lg font-bold capitalize">
                    {post.title}
                  </p>
                  <p className="text-black-800 px-4 text-left text-base">
                    {`${post.body[0].children[0].text.substring(0, 210)}...`}
                  </p>
                </div>
              </Link>
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
