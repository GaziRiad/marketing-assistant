import Image from "next/image";
import React from "react";

const Tutorials = () => {
  return (
    <div className="sticky top-0 flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px] lg:h-full">
      <div className="relative flex items-center justify-center md:w-1/2">
        <p className="absolute -left-[145px] top-52 hidden rotate-90 text-lg font-bold text-[#777777] md:block">
          <span className="text-[#F45B69]">MARKETING GURUS</span> IN YOUR INBOX
        </p>
        <p className="mt-5 text-center text-2xl font-bold text-[#777777] sm:text-4xl md:mt-0">
          How-to
          <span className="text-[#107FAA]"> Videos</span>.
        </p>
      </div>
      <div className="relative mt-5 flex h-[500px] items-center rounded-b-lg bg-[#107FAA] md:mt-0 md:h-[700px] md:w-1/2 md:rounded-none md:rounded-r-[40px] md:px-10 lg:h-[600px] 2xl:px-32">
        <Image
          className="h-full w-full object-contain"
          width={2000}
          height={2000}
          src="/images/TutorialsImage.png"
          alt="svg"
        />
        {/* <video
          autoPlay
          loop
          muted
          controls
          playsInline
          className="h-[220px] w-full rounded-3xl  object-contain 2xl:object-cover"
        >
          <source src={"/vidoes/desk-video.mp4"} type="video/mp4" />
          <track kind="captions" label="English" default />
          Your browser does not support the video tag.
        </video> */}
      </div>
    </div>
  );
};

export default Tutorials;
