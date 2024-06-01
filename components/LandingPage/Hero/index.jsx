'use client'
import Image from "next/image";
import React, { useState } from "react";
import ContentHub from "./core/ContentHub";
import { useTemplate } from "@/components/context/TemplateContext";
import { HeroButtons } from "@/app/lib/constant";

const Hero = () => {
  const { setSelectedTemplate } = useTemplate();
  const [selectedButton, setSelectedButton] = useState("WeeklyTemplates");

  const handleClick = (value) => {
    setSelectedButton(value);
    setSelectedTemplate(value);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={"/images/logotag.png"}
          alt="Logo"
          width={150}
          height={150}
        />
        <h1 className="mt-3 text-center text-3xl font-semibold text-[#253439]">
          Marketing Team <br /> In Your{" "}
          <span className="text-3xl font-semibold text-[#F45B69]">INBOX</span>
        </h1>
      </div>
      <div className="mt-7 flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-10">
        {HeroButtons.map((button) => (
          <button
            key={button.value}
            className={`w-[170px] rounded-lg border-2 py-2 text-center ${
              selectedButton === button.value
                ? "border-[#F45B69] text-[#F45B69]"
                : "border-[#393E41] text-[#393E41]"
            }`}
            onClick={() => handleClick(button.value)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <p className="mt-5 text-center font-medium text-[#000] underline underline-offset-1">
        every week.
      </p>
      <ContentHub />
    </>
  );
};

export default Hero;