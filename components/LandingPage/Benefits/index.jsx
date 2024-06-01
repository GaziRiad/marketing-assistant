"use client";
import { benefitsList } from "@/app/lib/constant";
import React, { useState } from "react";



const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(benefitsList[1]);

  return (
    <div className="container flex sm:flex-row flex-col items-center">
      <div className="sm:w-[60%] font-bold">
        <p className="text-3xl text-[#545454]">
          It will be your best investment
        </p>
        <p className="text-3xl text-[#F45B69]">
          that eliminates all{" "}
          <span className="underline underline-offset-2">excuses.</span>
        </p>
        <h1 className="mt-5 text-3xl md:text-5xl font-bold text-[#292929]">
          Budget Friendly
        </h1>
        <h1 className="mt-5 text-3xl md:text-4xl font-bold text-[#292929]">360 Digital</h1>
        {benefitsList.map((benefit, index) => (
          <h1
            key={index}
            onClick={() => setSelectedBenefit(benefit)}
            className={`mt-5 cursor-pointer text-3xl font-bold ${selectedBenefit.title === benefit.title ? "text-[#F45B69] underline underline-offset-2" : "text-[#474747]"}`}
          >
            {benefit.title}
          </h1>
        ))}
      </div>
      <div className="sm:w-[40%] mt-5 sm:mt-0">
        <p className="text-lg text-[#F45B69]">
          “Marketing efforts are being sidelined by more pressing tasks.”
        </p>
        <p className="text-lg text-[#393E41]">{selectedBenefit.text}</p>
      </div>
    </div>
  );
};

export default Benefits;
