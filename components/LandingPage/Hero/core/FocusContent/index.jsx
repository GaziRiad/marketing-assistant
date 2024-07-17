import Image from "next/image";
import React from "react";
import TeamAndServiceHighlightBody from "./core/TeamAndServiceHighlightBody";
import TeamAndServiceHighlightFooter from "./core/TeamAndServiceHighlightFooter";

const TeamAndServiceHighlight = () => {
  return (
    <div className="px-2 md:px-14">
      <div className="mt-5 w-full rounded-[40px] border-2 border-[#A6A6A6] pb-4">
        <div className="mt-2 flex flex-col items-center">
          <Image
            src={"/images/logotag.png"}
            alt="Logo"
            width={100}
            height={100}
          />
          <h1 className="mt-1 flex items-center gap-2 text-center text-lg font-bold text-[#545454] md:text-xl">
            Here’s your weekly content!
          </h1>
        </div>
        <TeamAndServiceHighlightBody />
        <TeamAndServiceHighlightFooter />
      </div>
    </div>
  );
};

export default TeamAndServiceHighlight;
