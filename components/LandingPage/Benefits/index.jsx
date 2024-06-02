"use client";
import { benefitsList } from "@/app/lib/constant";
import React, { useState } from "react";

const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(benefitsList[1]);

  return (
    <div className="container flex sm:flex-row flex-col items-center">
      <div className="sm:w-[60%] font-bold">
        <p className="md:text-3xl text-2xl text-[#545454]">
          It will be your best investment
        </p>
        <p className="md:text-3xl text-2xl text-[#F45B69]">
          that eliminates all{" "}
          <span className="underline underline-offset-2">excuses.</span>
        </p>
        {benefitsList.map((benefit, index) => (
          <h1
            key={index}
            onClick={() => setSelectedBenefit(benefit)}
            className={`mt-7 cursor-pointer md:text-5xl text-xl font-bold ${
              benefit.title === "Budget Friendly" ? "md:text-7xl text-3xl" : ""
            } ${
              benefit.title === "360 Digital" ? "md:text-7xl text-2xl" : ""
            } ${
              selectedBenefit.title === benefit.title
                ? "text-[#F45B69] underline underline-offset-2"
                : benefit.title === "Budget Friendly"
                ? "text-[#272727]"
                : benefit.title === "360 Digital"
                ? "text-[#343434]"
                : "text-[#474747]"
            }`}
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
