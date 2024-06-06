import { WeeklyTemplatesImageSources } from "@/app/lib/constant";
import Image from "next/image";
import React from "react";

const FocusContentBody = () => {
  return (
    <div className="relative mt-5 grid grid-cols-2 md:gap-0 gap-2 px-[14px] md:grid-cols-3">
      {WeeklyTemplatesImageSources.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            className="h-[150px] object-cover md:object-contain"
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
          />
          {index > 2 && (
            <div className="mt-5 rounded-3xl bg-[#DB504A] px-2 text-white md:block hidden">
              go to template
            </div>
          )}
        </div>
      ))}
      <Image
        className="absolute right-0 top-[22%] h-[370px] w-[53px]"
        src={"/images/arrowDropDown.png"}
        alt="Arrow Drop Down"
        width={500}
        height={500}
      />
    </div>
  );
};

export default FocusContentBody;
