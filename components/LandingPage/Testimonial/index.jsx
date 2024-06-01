import { TestimonialList } from "@/app/lib/constant";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { GoStarFill } from "react-icons/go";

const Testimonial = () => {
  const startsArray = Array(5).fill();

  return (
    <div className="mx-5 mt-20 rounded-[40px] bg-white py-10 md:py-20">
      <h1 className="text-center text-2xl md:text-5xl font-bold text-[#393E41]">
        WHAT <br /> SOLOPRENEURS <br /> THINK?
      </h1>
      <div className="mt-10 flex md:flex-row flex-col items-center justify-center gap-2 lg:gap-10">
        {TestimonialList.map((item, index) => (
          <div key={index} className="shadow-custom relative mt-10 flex md:w-[420px] flex-col items-center py-10 ">
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
            <h3>{item.title}</h3>
            <p className="mt-2 px-5 lg:px-10 text-center text-sm font-light text-[#525456]">
              {item.text}
            </p>
            <FaQuoteLeft className="absolute left-2 top-32 text-3xl text-[#FFBC00]" />
            <FaQuoteRight className="absolute bottom-2 right-2 text-3xl text-[#FFBC00]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
