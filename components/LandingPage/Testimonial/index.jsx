import { TestimonialList } from "@/app/lib/constant";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  const starsArray = Array(5).fill();

  return (
    <div className="container">
      <div className="mt-20 rounded-3xl bg-white pb-28 pt-10 lg:rounded-[40px] lg:px-16">
        <h1 className="text-center font-spartan text-2xl font-bold tracking-widest text-[#393E41] sm:text-3xl md:text-5xl">
          WHAT <br /> SOLOPRENEURS <br /> THINK?
        </h1>

        <div className="mx-auto flex w-full items-center justify-center px-5 xl:px-16">
          <Carousel className="z-10 w-[80%] md:w-[90%] xl:w-full">
            <CarouselContent className=" flex items-stretch py-8">
              {TestimonialList.map((item, index) => (
                <CarouselItem
                  key={item.title}
                  className="flex md:basis-1/2 lg:basis-1/3"
                >
                  <div
                    key={index}
                    className="relative flex w-full flex-col items-center justify-center py-12 shadow-custom"
                  >
                    <div className="flex gap-x-2 text-[#FFBC00]">
                      {starsArray.map((_, index) => (
                        <GoStarFill key={index} />
                      ))}
                    </div>
                    <Image
                      width={320}
                      height={320}
                      className="mt-5 size-20 rounded-full object-cover"
                      src={item.image}
                      alt="Avatar"
                    />
                    <h3 className="z-10 mt-2 text-xs font-semibold uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 px-5 text-center text-sm font-light text-neutral-500 lg:px-10">
                      {item.text}
                    </p>
                    <FaQuoteLeft className="absolute left-2 top-32 text-3xl text-[#FFBC00] opacity-60" />
                    <FaQuoteRight className="absolute bottom-2 right-2 text-3xl text-[#FFBC00] opacity-60" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-ml-8 scale-125 sm:-ml-6 md:scale-100" />
            <CarouselNext className="-mr-8 scale-125 sm:-mr-6 md:scale-100" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
