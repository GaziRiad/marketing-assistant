import React from "react";
import { FaHeart } from "react-icons/fa6";

const TeamAndServiceHighlightFooter = () => {
  return (
    <div>
      <h1 className="mt-1 gap-2 text-center text-sm font-bold text-[#545454]">
        3 Design & Caption Templates Every week
      </h1>
      <div className="mt-1 grid grid-cols-3 ">
        <div className="flex flex-col items-center">
          <div className="flex size-5 items-center justify-center rounded-full bg-[#FCDE67] text-2xl text-white sm:h-[40px] sm:w-[40px]">
            <p>1</p>
          </div>
          <p className="mt-1 text-center text-xs text-[#545454] md:text-sm">
            Customize Design
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex size-5 items-center justify-center rounded-full bg-[#FCDE67] text-2xl text-white sm:h-[40px] sm:w-[40px]">
            <p>2</p>
          </div>
          <p className="mt-1 text-center text-xs text-[#545454] md:text-sm">
            Customize Caption
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex size-5 items-center justify-center rounded-full bg-[#F15267] text-2xl text-white sm:h-[40px] sm:w-[40px]">
            <FaHeart color="white" className="text-[17px] sm:text-[30px]" />
          </div>
          <p className="mt-1 text-xs text-[#545454] md:text-sm">Share!</p>
        </div>
      </div>
    </div>
  );
};

export default TeamAndServiceHighlightFooter;
