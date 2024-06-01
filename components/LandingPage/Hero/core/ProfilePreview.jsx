import Image from "next/image";
import React from "react";

const ProfilePreview = () => {
  return (
    <div className="relative xl:w-[361px] w-full rounded-[40px] md:h-[800px] h-[500px] bg-white px-3 pb-3">
      <div>
        <div className="absolute top-10 md:h-[218px] md:w-[218px] h-[100px] w-[100px] md:rounded-[40px] rounded-3xl bg-[#F45B69]" />
        <div className="absolute right-0 top-[39%] md:h-[218px] md:w-[218px] h-[100px] w-[100px] md:rounded-[40px] rounded-3xl bg-[#F45B69]" />
        <div className="absolute top-[20%] right-2">
          <Image
            className="relative bottom-5 z-10 xl:h-full md:h-[550px] sm:h-[400px] h-[300px] sm:w-full sm:object-cover object-contain"
            src={"/images/ProfilePreviewImg.png"}
            alt="Logo"
            width={700}
            height={700}
          />
        </div>
        <div className="absolute md:bottom-5 bottom-16 md:h-[218px] md:w-[218px] h-[100px] w-[100px] md:rounded-[40px] rounded-3xl bg-[#F45B69]" />
      </div>
    </div>
  );
};

export default ProfilePreview;
