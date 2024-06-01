import Image from "next/image";
import React from "react";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";

const Meaningful = () => {
  return (
    <div className="mt-10 flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px] card sticky top-0">
      <div className="flex items-center justify-center md:w-1/2 relative">
        <p className="absolute -left-[103px] top-40 hidden rotate-90 text-lg font-bold text-[#777777] md:block">
          <span className="text-[#F45B69]">DESIGNER</span> IN YOUR INBOX
        </p>
        <p className="text-center text-2xl font-bold text-[#777777] sm:text-4xl mt-5 md:mt-0">
          <span className="text-[#F45B69]">Meaningful</span> together <br /> as
          a whole.
        </p>
      </div>
      <div className="mt-5 flex rounded-b-lg bg-[#F45B69] md:mt-0 md:w-1/2 md:rounded-none md:rounded-r-[40px] md:px-5 h-[500px] md:h-[700px] lg:h-[600px] xl:px-20">
        <div className="hidden h-full flex-col justify-between space-y-0 py-10 xl:flex">
          <div>
            <MdOutlineKeyboardDoubleArrowUp className="flex-none text-[6rem] text-white" />
          </div>
          <div className="mt-auto">
            <MdOutlineKeyboardDoubleArrowDown className="flex-none text-[6rem] text-white" />
          </div>
        </div>
        <Image
          className="h-full w-full object-contain md:object-none"
          width={2000}
          height={2000}
          src="/images/MeaningfulImage.png"
          alt="svg"
        />
      </div>
    </div>
  );
};

export default Meaningful;
