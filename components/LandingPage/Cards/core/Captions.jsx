import Image from "next/image";
import React from "react";

const Captions = () => {
  return (
    <div className="sticky top-0 flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px]">
      <div className="relative flex items-center justify-center md:w-1/2">
        <p className="absolute -left-[115px] top-40 hidden rotate-90 text-lg font-bold text-[#777777] md:block">
          <span className="text-[#F45B69]">COPYWRITER</span> IN YOUR INBOX
        </p>
        <p className="mt-5 text-center text-xl font-bold text-[#777777] sm:text-4xl md:mt-0">
          <span className="text-[#C73E1D]">Caption</span> for{" "}
          <span className="text-[#C73E1D]">
            each <br className="hidden md:block" /> design
          </span>{" "}
          template by <br className="hidden md:block" /> professionals.
        </p>
      </div>
      <div className="mt-5 flex w-full flex-col items-center justify-between rounded-b-lg bg-[#88A202] pb-5 md:mt-0 md:flex-row md:rounded-none md:rounded-r-[40px] md:px-5 ">
        <div className="flex-1">
          <Image
            className="mx-auto object-cover lg:rounded-lg"
            width={1200}
            height={1200}
            src="/images/CaptionsImage.png"
            alt="svg"
          />
        </div>
        <div className="flex-1">
          <Image
            className="mx-auto object-cover lg:rounded-lg"
            width={1200}
            height={1200}
            src="/images/captions2.svg"
            alt="svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Captions;
