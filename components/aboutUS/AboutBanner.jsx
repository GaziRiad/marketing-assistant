"use client";

import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function AboutBanner() {
  const sectionRef = useRef();

  useEffect(() => {
    // Ensure your elements exist
    if (sectionRef.current) {
      // Use the ScrollTrigger.create static method to set up the animation
      ScrollTrigger.create({
        trigger: sectionRef.current, // Reference to your DOM element
        start: "top bottom",
        end: "bottom top",
        onEnter: () =>
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: +120 },
            { opacity: 1, y: 0, duration: 1 },
          ),
      });
    }
  }, []);

  return (
    <section className="mb-24 bg-secondary py-12 lg:mb-40">
      <div
        className="container mx-auto flex flex-col items-center justify-center gap-6 px-5 lg:gap-10"
        ref={sectionRef}
      >
        <p className="text-center text-2xl font-bold text-[#393E41] lg:text-4xl">
          We solve problems by applying the fundamental engineering law:
        </p>
        <p className="text-center text-2xl font-bold text-[#393E41] lg:text-4xl">
          “Most efficient solution with minimum resource usage.”
        </p>
      </div>
    </section>
  );
}

export default AboutBanner;
