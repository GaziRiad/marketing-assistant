import Image from "next/image";
import React from "react";

const TeamAndServiceHighlightBody = () => {
  return (
    <div>
      <div className="mt-1 grid gap-x-3 gap-y-1 pl-5 pr-5 sm:grid-cols-[30%_70%]">
        <div className="flex h-full">
          <Image
            className="w-full object-cover"
            src={"/images/WeeklyTemplates3.png"}
            alt="Logo"
            width={350}
            height={350}
          />
        </div>
        <div className="h-fit w-full">
          <div className="flex h-full items-center rounded-xl bg-[#FCDE67] p-3 text-[11px] lg:text-base xl:text-[11px]">
            <p className="font-normal text-[#3a3a3a]">
              Meet the{" "}
              <span className="font-bold text-black">[Business name]</span>{" "}
              team! Made up of{" "}
              <span className="font-bold text-black">[# of staff]</span>, we’re
              the crew that makes sure you get the best{" "}
              <span className="font-bold text-black">[product/service]</span>
              at{" "}
              <span className="font-bold text-black">
                [value differentiator such as low price, higher quality etc.]
              </span>
              . Come and say hi at our{" "}
              <span className="font-bold text-black">[address]</span> location!{" "}
              <span className="font-bold text-black">
                [Book an appointment, call, visit our website, reserve a table]
              </span>{" "}
              through the link in our bio.
            </p>
          </div>
        </div>
        <div className="ml-5 hidden w-max items-center justify-center rounded-3xl bg-[#DB504A] px-2 text-[6px] text-white md:flex">
          go to template
        </div>
      </div>
      <div className="mt-2 border-t-[3px] border-dashed border-red-500" />
      <div className="mt-1 grid gap-x-3 px-2 sm:grid-cols-[30%_70%] sm:pl-5 sm:pr-5">
        <div className="flex h-full">
          <Image
            className="w-full object-cover"
            src={"/images/WeeklyTemplates2.png"}
            alt="Logo"
            width={350}
            height={350}
          />
        </div>
        <div className="h-full w-full">
          <div className="flex h-full items-center rounded-xl bg-[#FCDE67] p-3 text-[11px] lg:text-base xl:text-[11px]">
            <p className="font-normal text-[#3a3a3a]">
              At <span className="font-bold text-black">[Business name]</span>,
              we provide{" "}
              <span className="font-bold text-black">[product/service]</span>{" "}
              for{" "}
              <span className="font-bold text-black">
                [adjective, e.g., health-conscious, busy, stylish]
              </span>{" "}
              <span className="font-bold text-black">
                [demographic descriptor e.g., professionals, athletes, moms]
              </span>{" "}
              at{" "}
              <span className="font-bold text-black">
                [a key selling point, e.g., higher quality, faster service,
                cheaper prices]
              </span>{" "}
              without the{" "}
              <span className="font-bold text-black">
                [stress, hassle, inconvenience]
              </span>{" "}
              of{" "}
              <span className="font-bold text-black">
                [common problem in your industry, e.g., multiple fees, long wait
                time, uncomfortable fit]
              </span>
              .{" "}
              <span className="font-bold text-black">
                [Book an appointment, call, visit our website, reserve a table]
              </span>{" "}
              and join{" "}
              <span className="font-bold text-black">
                [hundreds of, thousands of, all of our]
              </span>{" "}
              happy customers today.
            </p>
          </div>
        </div>
        <div className="ml-5 mt-1 hidden w-max items-center justify-center rounded-3xl bg-[#DB504A] px-2 text-[6px] text-white md:flex">
          go to template
        </div>
      </div>
      <div className="mt-2 border-t-[3px] border-dashed border-red-500" />
    </div>
  );
};

export default TeamAndServiceHighlightBody;
