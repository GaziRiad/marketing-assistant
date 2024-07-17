"use client";

import Footer from "@/components/Footer";
import SubscribeSection from "@/components/SubscribeSection";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const pricingPlans = [
    {
      color: "#F45B69",
      text: "CUSTOMIZABLE CONTENT DESIGN",
    },
    {
      color: "#5ACBF0",
      text: "CUSTOMIZABLE CONTENT CAPTION",
    },
    {
      color: "#393E41",
      text: "SOCIAL MEDIA GUIDES",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure your elements exist
    if (containerRef.current) {
      // Use the ScrollTrigger.create static method to set up the animation
      ScrollTrigger.create({
        trigger: containerRef.current, // Reference to your DOM element
        toggleActions: "play none none none", // Actions: onEnter, onLeave, onEnterBack, onLeaveBack
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () =>
          gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: +120 },
            { opacity: 1, y: 0, duration: 1 },
          ),
      });
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="container font-main text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="mt-20 text-2xl font-bold">PRICING PLAN</p>
          <h1 className="mt-12 text-center text-6xl font-normal">
            clear and simple
          </h1>
          <h2 className="relative mt-10 font-bold">
            <span className="absolute -left-1/3 top-0 font-spartan text-5xl">
              $
            </span>
            <span className="text-8xl">25</span>
          </h2>
          <p className="my-2 text-2xl font-light">per week</p>
          <button className="mt-4 rounded-lg bg-[#5ACBF0] px-10 py-3 transition-all hover:bg-[#51b7d8]">
            start your free trial
          </button>
          <h1 className="mt-20 text-center text-5xl font-medium">
            and get immediately
          </h1>
          <div className="mt-10 grid w-full gap-11 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="relative flex h-[274px] w-full items-center justify-center rounded-[40px] md:h-[374px] lg:h-[474px]"
                style={{ backgroundColor: plan.color }}
              >
                <p className="absolute left-5 mr-5 text-[10rem] font-bold sm:text-[15rem] md:-left-10 md:text-[13rem] lg:text-[15rem] 2xl:text-[25rem]">
                  3
                </p>
                <div className="ml-auto mr-1 text-center text-base font-bold sm:text-2xl md:text-lg lg:mr-5 lg:text-3xl">
                  {plan.text === "SOCIAL MEDIA GUIDES" ? (
                    <p className="leading-7">
                      SOCIAL MEDIA <br />
                      GUIDES
                    </p>
                  ) : (
                    plan.text.split(" ").map((line, idx) => (
                      <p className="leading-7" key={idx}>
                        {line} <br />
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-20">
        <SubscribeSection />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
