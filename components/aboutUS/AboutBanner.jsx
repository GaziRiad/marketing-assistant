"use client";

import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function AboutBanner() {
  const sectionRef = useRef();

  useEffect(() => {
    // Ensure your elements exist
    if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        toggleActions: "play none none none", // Actions: onEnter, onLeave, onEnterBack, onLeaveBack
        start: "top bottom",
        end: "bottom top",
        onEnter: () =>
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 },
          ),
      });
    }

    // Return a cleanup function from the `useEffect` hook
    return () => {
      // ScrollTrigger provides a method to clear associated instances
      // This is how you can kill ScrollTriggers specifically
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section className="mb-24 bg-secondary py-12 lg:mb-40" ref={sectionRef}>
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-5 lg:gap-10">
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
