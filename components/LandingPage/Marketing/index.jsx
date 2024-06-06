import Image from "next/image";
import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Marketing = () => {
  const starsArray = Array(5).fill(null);

  return (
    <div className="container">
      <div className="lg:flex hidden items-center justify-center gap-5 overflow-hidden">
        <Image
          className="relative bottom-5 lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] object-contain"
          width={500}
          height={500}
          src="/images/wave1.png"
          alt="svg"
        />
        <Image
          className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] object-contain "
          width={500}
          height={500}
          src="/images/wave2.png"
          alt="svg"
        />
        <Image
          className="relative right-16 h-[200px] w-[200px] rotate-45 object-contain"
          width={500}
          height={500}
          src="/images/wave3.png"
          alt="svg"
        />
        <Image
          className="relative right-16 lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] object-contain"
          width={500}
          height={500}
          src="/images/wave4.png"
          alt="svg"
        />
      </div>
      <h1 className="mt-10 text-center md:text-4xl text-3xl font-bold leading-10 text-[#F45B69]">
        Your marketing assistant <br /> got your back.
      </h1>
      <div className="mt-5 flex flex-col items-center">
        <div className="flex">
          {starsArray.map((_, index) => (
            <MdOutlineStarPurple500
              key={index}
              className="text-[45px] text-[#FFB600]"
            />
          ))}
        </div>
        <p className="text-[#464242] mt-2 font-gochi text-2xl">+2000 happy clients</p>

      </div>
    </div>
  );
};

export default Marketing;
