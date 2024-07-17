import { FocusContentFooterCaptions } from "@/app/lib/constant";
import React from "react";

const FocusContentFooter = () => {
  return (
    <div className="lg:px-10 px-5 w-full">
      <div className="flex flex-col items-center">
        <h1 className="my-2 flex items-center gap-2 text-center text-xs md:text-sm font-bold text-[#545454]">
          Don’t for get to get your sharing captions!
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-2">
        {FocusContentFooterCaptions.map((item, index) => (
          <div key={index} className="rounded-xl bg-[#E2E2E2] text-[10px] md:text-[7px] px-2 md:px-2 text-center py-5">
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FocusContentFooter;
