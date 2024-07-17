import {
  WeeklyTemplatesImageSources,
  WeeklyTemplatesbuttons,
} from "@/app/lib/constant";
import Image from "next/image";
import React from "react";

const WeeklyTemplates = () => {
  return (
    <div className="px-2 md:px-14">
      <div className="mt-5 w-full rounded-[40px] border-2 border-[#A6A6A6] pb-5">
        <div className="px-5 pt-5 md:px-10">
          <Image
            src={"/images/logotag.png"}
            alt="Logo"
            width={100}
            height={100}
          />
          <h1 className="mt-1 flex items-center gap-2 text-lg font-bold text-[#545454] md:text-2xl">
            Here’s your weekly content!
          </h1>
          <p className="mt-1 text-xs font-medium md:text-base">
            Customize them for your <br className="hidden md:block" /> brand and
            use them in order <br className="hidden md:block" /> to have
            meaningful feed.
          </p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 px-[14px] md:grid-cols-3">
          {WeeklyTemplatesImageSources.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              {index < 3 && (
                <div className="mb-2 hidden h-[25px] w-[25px] items-center justify-center rounded-full bg-[#FCDE67] text-white md:flex">
                  {index + 1}
                </div>
              )}
              <Image
                className="h-[150px] object-cover md:object-contain"
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-col items-center justify-center gap-2 text-white md:flex-row">
          {WeeklyTemplatesbuttons.map((item, index) => (
            <div
              key={index}
              className="flex h-10 w-[120px] cursor-pointer items-center justify-center rounded-3xl bg-[#5ACBF0] px-2 text-center text-[9px] font-bold"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyTemplates;
