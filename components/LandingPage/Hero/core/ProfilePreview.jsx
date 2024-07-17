import { useTemplate } from "@/components/context/TemplateContext";
import Image from "next/image";
import React from "react";

import profilePrev from "../../../../public/images/ProfilePreviewImg.png";

const focusContent = [
  [
    "How to schedule a post?",
    " 1 or 20 hashtags?",
    "How to analyze performance",
  ],
  ["Writing engaging caption 101", "When should I share posts?", "..."],
  ["...", "...", "..."],
  ["...", "...", "..."],
  ["...", "...", "..."],
  ["...", "...", "..."],
  ["...", "...", "..."],
];

function ProfilePreview() {
  const { selectedTemplate } = useTemplate();

  return (
    <div
      className={`relative ${selectedTemplate !== "FocusContent" ? "h-[500px]" : ""} w-full rounded-[40px] bg-white px-3 py-5 md:h-[800px] xl:w-[361px]`}
    >
      {selectedTemplate !== "FocusContent" && (
        <>
          <div className="absolute top-10 h-[100px] w-[100px] rounded-3xl bg-[#F45B69] md:top-5 md:h-[218px] md:w-[218px] md:rounded-[40px]" />
          <div className="absolute right-0 top-[39%] h-[100px] w-[100px] rounded-3xl bg-[#F45B69] md:h-[218px] md:w-[218px] md:rounded-[40px]" />
          <div className="absolute bottom-10 h-[100px] w-[100px] rounded-3xl bg-[#F45B69] md:bottom-5 md:h-[218px] md:w-[218px] md:rounded-[40px]" />
        </>
      )}

      {selectedTemplate === "FocusContent" && (
        <div className=" relative h-fit w-full rounded-[40px] bg-primary py-9">
          <h1 className=" mb-6 text-center font-spartan text-5xl font-extrabold uppercase text-[#E1DDD8]">
            Carefully planned
          </h1>

          <div className="flex flex-col gap-2 px-4 text-xs font-extrabold text-[#E1DDD8]">
            {focusContent.map((content, index) => (
              <div key={index} className="flex items-stretch gap-2">
                <div className=" flex flex-col items-center justify-center border-2 border-[#E1DDD8] p-2">
                  <span>week</span>
                  <span>{index + 1}</span>
                </div>
                <div className=" w-full rounded-sm border-2 border-[#E1DDD8] p-2">
                  {content.map((item, index) => (
                    <p key={index}>
                      <span className=" text-[11px]">Course {index + 1}</span>
                      <span className=" text-[10px]"> {item}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-5 flex flex-col items-center justify-center gap-2">
              <p className=" size-3 rounded-full bg-white"></p>
              <p className=" size-3 rounded-full bg-white"></p>
              <p className=" size-3 rounded-full bg-white"></p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute left-1/2 top-[20%] z-40 w-3/4 -translate-x-1/2">
        {selectedTemplate === "WeeklyTemplates" && (
          <div className="relative flex items-center justify-center">
            <Image
              className="relative bottom-5 z-10 h-[300px] object-contain sm:h-[400px] sm:w-full sm:object-cover md:h-[550px] xl:h-full"
              src="/images/ProfilePreviewImg2-removebg-preview.png"
              alt="Logo"
              width={1200}
              height={1200}
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-16 z-10 h-[30%] w-[80%] rounded-3xl object-contain 2xl:object-cover"
            >
              <source src="/vidoes/CustomizationVideo.mp4" type="video/mp4" />
              <track kind="captions" label="English" default />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {selectedTemplate === "TeamAndServiceHighlight" && (
          <div className="relative flex items-center justify-center">
            <Image
              className="relative bottom-5 z-10 h-[300px] object-contain sm:h-[400px] sm:w-full sm:object-cover md:h-[550px] xl:h-full"
              src="/images/ProfilePreviewImg2-removebg-preview.png"
              alt="Logo"
              width={1200}
              height={1200}
            />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-16 z-10 h-[30%] w-[80%] rounded-3xl object-contain 2xl:object-cover"
            >
              <source src="/vidoes/customization.mp4" type="video/mp4" />
              <track kind="captions" label="English" default />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePreview;
