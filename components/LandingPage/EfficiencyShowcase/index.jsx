import React from "react";

const EfficiencyShowcase = () => {
  return (
    <div className="container mt-5 flex flex-col justify-center items-center">
      <p>Solopreneurs, Freelancers, Social Media Managers…</p>
      <h1 className="text-3xl font-bold">
        You’ve never worked <span className="text-[#F45B69]">this fast</span>
      </h1>
      <div className="rounded-[40px] md:h-[700px] bg-[#5CE1E6] p-5   md:p-10 mt-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full rounded-3xl object-contain 2xl:object-cover"
        >
          <source src={"/vidoes/EfficiencyShowcaseVideo.mp4"} type="video/mp4" />
          <track kind="captions" label="English" default />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default EfficiencyShowcase;
