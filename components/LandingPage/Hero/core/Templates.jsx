"use client";

import React, { useEffect, useRef } from "react";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoIosArrowDown, IoMdSend } from "react-icons/io";
import { IoDocumentsOutline, IoStar } from "react-icons/io5";
import { RiArrowLeftSLine } from "react-icons/ri";
import { TbClockHour5 } from "react-icons/tb";
import WeeklyTemplates from "./WeeklyTemplates";
import TeamAndServiceHighlight from "./TeamAndServiceHighlight";
import FocusContent from "./FocusContent";
import { useTemplate } from "@/components/context/TemplateContext";
import Image from "next/image";

import gsap from "gsap";

const Templates = () => {
  const { selectedTemplate } = useTemplate();

  const contentRef = useRef(null);

  useEffect(() => {
    // Ensure initial conditions are set
    gsap.set(contentRef.current, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none restart none",
      },
    });

    tl.to(contentRef.current, {
      duration: 0.6,
      ease: "expoScale",
      opacity: 1,
      y: 0,
    });

    // Proper cleanup of ScrollTrigger
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [selectedTemplate]);

  return (
    <div className="h-full w-full rounded-[40px] bg-white py-5 text-[#545454] ">
      <div className="flex items-center gap-5 px-2 md:px-14">
        <RiArrowLeftSLine size={20} />
        <HiInboxArrowDown size={20} />
        <IoStar size={20} />
        <TbClockHour5 size={20} />
        <IoMdSend size={20} />
        <IoDocumentsOutline size={20} />
      </div>
      <h1 className="ml-10 mt-2 flex gap-2 text-[10px] font-bold text-[#545454] md:ml-24 md:items-center md:text-[22px]">
        Your Weekly Content Templates{" "}
        <span className="flex items-center rounded-md bg-[#DB504A] px-1 text-[7px] text-white sm:px-2 sm:py-[4px] md:text-[10px]">
          Inbox <span className="font-bold md:ml-1">X</span>
        </span>
      </h1>
      <div className="ml-10 mt-3 flex gap-2 md:ml-16">
        <div>
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={35}
            height={45}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Your Marketing Assistant</p>
          <div className="flex items-center text-sm">
            <p>to me</p>
            <IoIosArrowDown className="font-bold" size={20} />
          </div>
        </div>
      </div>
      <div ref={contentRef}>
        {selectedTemplate === "WeeklyTemplates" && <WeeklyTemplates />}
        {selectedTemplate === "FocusContent" && <FocusContent />}
        {selectedTemplate === "TeamAndServiceHighlight" && (
          <TeamAndServiceHighlight />
        )}
      </div>
    </div>
  );
};

export default Templates;
