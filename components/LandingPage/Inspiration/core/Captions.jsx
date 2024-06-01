import Image from "next/image";
import React from "react";

const Captions = () => {
  return (
    <div className="mt-10 flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px]">
      <div className="flex items-center justify-center md:w-1/2 relative">
        <p className="md:block hidden absolute -left-[115px] rotate-90 top-40 font-bold text-[#777777] text-lg"><span className="text-[#F45B69]">COPYWRITER</span> IN YOUR INBOX</p>
        <p className="text-center text-xl font-bold text-[#777777] sm:text-4xl mt-5 md:mt-0"> 
          <span className="text-[#C73E1D]">Caption</span> for{" "}
          <span className="text-[#C73E1D]">
            each <br className="md:block hidden" /> design
          </span>{" "}
          template by <br className="md:block hidden" /> professionals.
        </p>
      </div>
      <div className="mt-5 grid lg:grid-cols-2 lg:h-[600px] pb-5 rounded-b-lg md:rounded-none items-center bg-[#88A202] md:px-5 md:mt-0 md:w-1/2 md:rounded-r-[40px] md:gap-5">
        <Image
          className="h-[400px] lg:w-[320px] lg:rounded-lg object-fill"
          width={2000}
          height={2000}
          src="/images/CaptionsImage.png"
          alt="svg"
        />
        <div className="bg-white text-[#C73E1D] text-xs sm:text-sm md:text-base text-center py-5 md:rounded-lg px-2 md:px-0">
          At [Business name], we provide [product/service] for [adjective, e.g.,
          health-conscious, busy, stylish] [demographic descriptor e.g.,
          professionals, athletes, moms] at [a key selling point, e.g., higher
          quality, faster service, cheaper prices] without the [stress, hassle,
          inconvenience] of [common problem in your industry, e.g., multiple
          fees, long wait time, uncomfortable fit]. [Book an appointment, call,
          visit our website, reserve a table] and join [hundreds of, thousands
          of, all of our] happy customers today. DQSD QSDQSDSDQSD DQSD QSDQS
        </div>
      </div>
    </div>
  );
};

export default Captions;
