import React from "react";
import FocusContentHeader from "./core/FocusContentHeader";
import FocusContentBody from "./core/FocusContentBody";
import FocusContentFooter from "./core/FocusContentFooter";
import Image from "next/image";

const FocusContent = () => {
  return (
    <div className="px-2 md:px-14 ">
      <div className="mt-1  w-full pb-5">
        <h1 className=" text-base font-bold">
          Course 3 - Where and how to analyze performance?
        </h1>

        <div className=" grid grid-cols-1 gap-5 md:grid-cols-[70%_30%] ">
          <div>
            <p className=" text-xs">
              How have the results been for the content we prepared for you? Can
              you successfully interpret these results? Today, we will be
              talking about something that will help you give a more precise
              answer to this question. You will be learning about where you can
              follow and analyze what happens on your social media accounts.
            </p>
            <br />
            <p className="text-xs">
              In today’s video, we will be explaining how you can access
              Facebook’s free Insight section.
            </p>

            <div>
              <Image
                width={600}
                height={600}
                alt=""
                src="/images/pc-mockup.svg"
                className=" mb-4 w-full"
              />
            </div>
            <p className="mb-2 text-xs">
              First of, let us explain how doing this will benefit you.
            </p>
            <p className="mb-2 text-xs">
              👉 If you examine the movements on your social media accounts, you
              will get to know your target groups and potential clients better.
              You will learn the demographics of your followers and this will
              give you better insights on what kind of content you should be
              preparing.
            </p>
            <p className="mb-2 text-xs">
              👉 You can observe which content receives more likes and
              interaction. This way, you can keep creating similar content in
              the future.
            </p>
            <p className="text-xs">
              👉 It will help you to understand your competitors better. You can
              learn when they post, who follows them, how much interaction they
              receive and many other important things. However, in order to gain
              information about your competitors, you need to use paid 3rd party
              analytic tools.
            </p>
          </div>
          <div className=" relative flex h-fit flex-col gap-1 rounded-md bg-[#EDD5C7] px-2 pb-32 pt-2 text-xs">
            <p className="flex flex-col gap-0.5">
              <span>00:00 - 00:25</span>
              <span>Intro</span>
            </p>
            <p className="flex flex-col gap-0.5">
              <span>00:26 - 01:10</span>
              <span>Business Suite Account</span>
            </p>
            <p className="flex flex-col gap-0.5">
              <span>01:11 - 04:35</span>
              <span>Metrics</span>
            </p>
            <p className="flex flex-col gap-0.5">
              <span>04:36 - 05-46</span>
              <span>Usefull Tips</span>
            </p>

            <Image
              height={300}
              width={300}
              alt=""
              src="/images/cutebear.png"
              className=" absolute -bottom-6 left-1/2 w-1/2 -translate-x-1/2 md:w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusContent;
