import { TestimonialList } from "@/app/lib/constant";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";

const Testimonial = () => {
  const startsArray = Array(5).fill();

  return (
    <div className="container">
      <div className="mt-20 rounded-3xl bg-white pb-28 pt-10 lg:rounded-[40px] lg:px-16">
        <h1 className="text-center font-spartan text-2xl font-bold tracking-widest text-[#393E41] sm:text-3xl md:text-5xl">
          WHAT <br /> SOLOPRENEURS <br /> THINK?
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center gap-2 md:flex-row lg:gap-10">
          {TestimonialList.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center py-10 shadow-custom md:mt-10 md:w-[420px] "
            >
              <div className="flex gap-x-2 text-[#FFBC00]">
                {startsArray.map((_, index) => (
                  <GoStarFill key={index} />
                ))}
              </div>
              <Image
                width={50}
                height={50}
                className="mt-5 rounded-full"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
