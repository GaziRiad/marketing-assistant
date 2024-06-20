"use client";
import { benefitsList } from "@/app/lib/constant";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(benefitsList[1]);

  const benefitRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(".textBlock", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [selectedBenefit]);

  useEffect(() => {
    if (benefitRefs.current[selectedBenefit.title]) {
      gsap.fromTo(
        benefitRefs.current[selectedBenefit.title],
        { opacity: 0, color: "#545454", textDecoration: "none" },
        {
          opacity: 1,
          color: "#F45B69",
          textDecoration: "underline",
          duration: 1,
        },
      );
    }
  }, [selectedBenefit]);

  return (
    <div className="container flex flex-col items-center sm:flex-row">
      <div className="font-bold sm:w-[60%]">
        <p className="text-2xl text-[#545454] md:text-3xl">
          It will be your best investment
        </p>
        <p className="text-2xl text-[#F45B69] md:text-3xl">
          that eliminates all{" "}
          <span className="underline underline-offset-2">excuses.</span>
        </p>
        {benefitsList.map((benefit, index) => (
          <p
            key={index}
            onClick={() => setSelectedBenefit(benefit)}
            className={`mt-7 cursor-pointer text-xl font-bold ${index === 0 ? "text-neutral-950" : index === 1 ? "text-neutral-900" : index === 2 ? "text-neutral-800" : index === 3 ? "text-neutral-700" : index === 4 ? "text-neutral-600" : index === 5 ? "text-neutral-600" : index === 6 ? "text-neutral-500" : ""} ${selectedBenefit.title === benefit.title ? "!text-[#F45B69] underline underline-offset-2" : ""} md:text-6xl`}
          >
            {benefit.title}
          </p>
        ))}
      </div>
      <div className="textBlock mt-5 sm:mt-0 sm:w-[40%]">
        <p className="text-lg text-[#F45B69]">
          “Marketing efforts are being sidelined by more pressing tasks.”
        </p>
        <p className="text-lg text-[#393E41]">{selectedBenefit.text}</p>
      </div>
    </div>
  );
};

export default Benefits;
