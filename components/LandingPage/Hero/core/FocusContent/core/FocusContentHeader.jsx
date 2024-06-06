import Image from "next/image";
import React from "react";

const FocusContentHeader = () => {
  return (
    <div className="mt-2 flex flex-col items-center">
      <Image src={"/images/logotag.png"} alt="Logo" width={100} height={100} />
      <h1 className="mt-1 flex items-center gap-2 text-lg font-bold text-[#545454] md:text-2xl text-center">
        Here’s your weekly content!
      </h1>
      <p className="mt-2 text-center font-semibold text-[#545454] underline underline-offset-1 text-sm md:text-base">
        This week we are focusing on
      </p>
      <div className="flex w-full md:justify-center">
        <div className="md:ml-32 flex w-1/2 flex-col">
          <Image
            className="xl:block hidden"
            src={"/images/arrow.png"}
            alt="Arrow"
            width={60}
            height={50}
          />
          <p className="font-gochi relative md:right-28 mt-54md: mt-auto rotate-6 text-center md:text-xs text-[9px] font-bold">
            introducing yourself or <br className="sm:block hidden" /> your team to your <br /> audience
          </p>
        </div>
        <div className="flex w-1/2 flex-col">
          <Image
            className="xl:block hidden"
            src={"/images/arrowDown.png"}
            alt="Arrow Down"
            width={60}
            height={50}
          />
          <p className="font-gochi relative bottom-1 md:right-10 md:ml-auto mt-5 md:mt-auto -rotate-6 text-center md:text-xs text-[9px] font-bold">
            highlighting your <br /> business’s core <br />{" "}
            product/service/program
          </p>
        </div>
      </div>
    </div>
  );
};

export default FocusContentHeader;
