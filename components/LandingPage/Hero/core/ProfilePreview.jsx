import { useTemplate } from "@/components/context/TemplateContext";
import Image from "next/image";
import React from "react";

import profilePrev from "../../../../public/images/ProfilePreviewImg.png";

const ProfilePreview = () => {
  const { selectedTemplate } = useTemplate();
  return (
    <div className="relative h-[500px] w-full rounded-[40px] bg-white px-3 pb-3 md:h-[800px] xl:w-[361px]">
      <div>
        <div className="absolute top-10 h-[100px] w-[100px] rounded-3xl bg-[#F45B69] md:h-[218px] md:w-[218px] md:rounded-[40px]" />
        <div className="absolute right-0 top-[39%] h-[100px] w-[100px] rounded-3xl bg-[#F45B69] md:h-[218px] md:w-[218px] md:rounded-[40px]" />
        <div className="absolute left-1/2 top-[20%] z-40 w-3/4 -translate-x-1/2">
          {selectedTemplate === "TeamAndServiceHighlight" ? (
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
          ) : (
            <Image
              className="relative bottom-5 z-10 h-[300px] object-contain sm:h-[400px] sm:w-full sm:object-cover md:h-[550px] xl:h-full"
              src={profilePrev}
              alt="Logo"
              width={1200}
              height={1200}
            />
          )}
        </div>
        <div className="absolute bottom-16 h-[100px] w-[100px] rounded-3xl bg-[#F45B69] md:bottom-5 md:h-[218px] md:w-[218px] md:rounded-[40px]" />
      </div>
    </div>
  );
};

export default ProfilePreview;
