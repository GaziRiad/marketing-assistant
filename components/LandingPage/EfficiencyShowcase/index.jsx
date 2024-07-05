import React from "react";

const EfficiencyShowcase = () => {
  return (
    <div className="container mt-5 flex flex-col items-center justify-center">
      <p>Solopreneurs, Freelancers, Social Media Managers…</p>
      <h1 className="text-3xl font-bold text-[#253439]">
        You’ve never worked <span className="text-[#F45B69]">this fast</span>
      </h1>
      <div className="mt-5 rounded-[40px] bg-[#5CE1E6] p-5   md:h-[700px] md:p-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full rounded-3xl object-contain 2xl:object-cover"
        >
          <source src={"/vidoes/MMA.mp4"} type="video/mp4" />
          <track kind="captions" label="English" default />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default EfficiencyShowcase;
