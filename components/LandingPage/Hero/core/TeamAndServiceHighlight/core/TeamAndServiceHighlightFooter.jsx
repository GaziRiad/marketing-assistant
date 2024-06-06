import React from "react";
import { FaHeart } from "react-icons/fa6";

const TeamAndServiceHighlightFooter = () => {
  return (
    <div>
      <h1 className="mt-5 gap-2 text-center text-sm font-bold text-[#545454]">
        3 Design & Caption Templates Every week
      </h1>
      <div className="mt-5 grid grid-cols-3 ">
        <div className="flex flex-col items-center">
          <div className="flex sm:h-[60px] sm:w-[60px] h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FCDE67] text-2xl text-white">
            <p>1</p>
          </div>
          <p className="mt-1 md:text-sm text-xs text-[#545454] text-center">Customize Design</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex sm:h-[60px] sm:w-[60px] h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FCDE67] text-2xl text-white">
            <p>2</p>
          </div>
          <p className="mt-1 md:text-sm text-xs text-[#545454] text-center">Customize Caption</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex sm:h-[60px] sm:w-[60px] h-[30px] w-[30px] items-center justify-center rounded-full bg-[#F15267] text-2xl text-white">
            <FaHeart color="white" className="sm:text-[30px] text-[17px]" />
          </div>
          <p className="mt-1 md:text-sm text-xs text-[#545454]">Share!</p>
        </div>
      </div>
    </div>
  );
};

export default TeamAndServiceHighlightFooter;
