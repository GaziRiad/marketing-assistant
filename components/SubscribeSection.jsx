"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function SubscribeSection() {
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
            { scale: 0 },
            { scale: 1, duration: 1 },
          ),
      });
    }
  }, []);

  return (
    <section className="mb-24 text-3xl lg:mb-40 lg:text-5xl">
      <Link
        ref={sectionRef}
        href="#"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-full bg-[#5ACBF0] px-4 py-12 text-center font-bold leading-relaxed text-background transition-all hover:bg-[#51b7d8] lg:gap-8 lg:py-80 lg:leading-tight"
      >
        <span>Subscribe to</span>
        <span>Weekly Marketing Bundle</span>
      </Link>
    </section>
  );
}

export default SubscribeSection;
