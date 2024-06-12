"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

function HeroAbout() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".yellow-triangle",
      {
        x: -100,
        opacity: 0,
        transformOrigin: "left center",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        transformOrigin: "left center",
      },
    );

    tl.fromTo(
      ".blue-triangle--big",
      {
        x: 100,
        opacity: 0,
        transformOrigin: "right center",
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        transformOrigin: "right center",
      },
    );

    tl.fromTo(
      ".main-text",
      {
        opacity: 0,
        transformOrigin: "right center",
      },
      {
        opacity: 1,
        duration: 0.2,
        transformOrigin: "right center",
      },
    );

    tl.fromTo(
      ".blue-triangle--small",
      {
        x: 100,
        opacity: 0,
        transformOrigin: "left center",
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        transformOrigin: "left center",
      },
    );

    // Return a cleanup function from useEffect
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="container relative mx-auto min-h-screen overflow-hidden pb-60">
      <Image
        src="/yellow-triangle.svg"
        height={400}
        width={400}
        alt="My marketing assistant about us page hero shape"
        className="yellow-triangle absolute -left-[10%] top-0 -z-10 w-36 rotate-[22deg] md:w-64 xl:w-96"
      />
      <Image
        src="/blue-triangle.svg"
        height={400}
        width={400}
        alt="My marketing assistant about us page hero shape"
        className="blue-triangle--big absolute -right-[12%] top-[20%] -z-10 w-36 rotate-[22deg] md:w-64 lg:top-0 xl:w-96"
      />

      <Image
        src="/blue-triangle.svg"
        height={400}
        width={400}
        alt="My marketing assistant about us page hero shape"
        className="blue-triangle--small absolute -left-[15%] bottom-0 rotate-12 scale-[25%] lg:left-0"
      />
      <div className="flex flex-col items-center justify-center font-spartan">
        <Image
          src="/images/logotag.png"
          height={500}
          width={500}
          alt="Marketing assistant logo"
          className="mb-6 w-44"
        />
        <p className="mb-3 text-center text-3xl font-extrabold text-[#393E41] lg:text-4xl ">
          The weekly <span className="text-primary">e-mail</span>
        </p>
        <p className="mb-16 text-center text-3xl font-extrabold text-[#393E41] lg:text-4xl ">
          feels like a <span className="text-primary">marketing team</span>
        </p>
        <h1 className="main-text text-8xl font-extrabold text-primary lg:-mt-12 lg:text-[15rem]">
          ABOUT
        </h1>
        <p className="mb-14 text-center text-lg font-bold lg:mb-32 lg:text-2xl">
          “Making marketing easier than ever in the smoothest way possible.”
        </p>
      </div>
      <Image
        src="/mountain.svg"
        height={400}
        width={400}
        alt="about png"
        className="lg-translate-x-1/4 absolute bottom-0 left-1/2 -translate-x-1/2 scale-75 lg:mb-8 lg:scale-100"
      />
    </section>
  );
}

export default HeroAbout;
