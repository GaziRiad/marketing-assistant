import React from "react";

const Customization = () => {
  return (
    <div className="sticky top-0 flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px]">
      <div className="relative flex items-center justify-center md:w-1/2">
        <p className="mt-5 text-center text-2xl font-bold text-[#777777] sm:text-4xl md:mt-0">
          Easy to{" "}
          <span className="text-[#FFC736]">
            customize <br />{" "}
          </span>{" "}
          for <span className="text-[#FFC736]">every business.</span>
        </p>
      </div>
      <div className="mt-5 flex h-[500px] items-center rounded-b-lg bg-[#FCDE67] md:mt-0 md:h-[700px] md:w-1/2 md:rounded-none md:rounded-r-[40px] md:px-10 lg:h-[600px] 2xl:px-32">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[420px] w-full rounded-3xl object-contain 2xl:object-cover"
        >
          <source src={"/vidoes/customization.mp4"} type="video/mp4" />
          <track kind="captions" label="English" default />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Customization;
