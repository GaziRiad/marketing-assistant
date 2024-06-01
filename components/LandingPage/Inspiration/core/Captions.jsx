import Image from "next/image";
import React from "react";

const Captions = () => {
  return (
    <div className="flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px] sticky top-0">
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
      <div className="mt-5 grid items-center rounded-b-lg bg-[#88A202] pb-5 md:mt-0 md:w-1/2 md:gap-5 md:rounded-none md:rounded-r-[40px] md:px-5 lg:h-[600px] lg:grid-cols-2">
        <Image
          className="h-[375px] object-fill lg:w-[320px] lg:rounded-lg"
          width={2000}
          height={2000}
          src="/images/CaptionsImage.png"
          alt="svg"
        />
        <div className="bg-white px-2 py-5 text-center text-xs text-[#C73E1D] sm:text-sm md:rounded-lg md:px-0 md:text-base">
          At [Business name], we provide [product/service] for [adjective, e.g.,
          health-conscious, busy, stylish] [demographic descriptor e.g.,
          professionals, athletes, moms] at [a key selling point, e.g., higher
          quality, faster service, cheaper prices] without the [stress, hassle,
          inconvenience] of [common problem in your industry, e.g., multiple
          fees, long wait time, uncomfortable fit]. [Book an appointment, call,
          visit our website, reserve a table] and join [hundreds of, thousands
          of, all of our] happy customers today.
        </div>
      </div>
    </div>
  );
};

export default Captions;
