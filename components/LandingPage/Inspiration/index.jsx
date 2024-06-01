'use client'
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Meaningful from "./core/Meaningful";
import Industry from "./core/Industry";
import Captions from "./core/Captions";
import Customization from "./core/Customization";
import Tutorials from "./core/Tutorials";
import Courses from "./core/Courses";

gsap.registerPlugin(ScrollTrigger);

gsap.registerEffect({
  name: "scaleDown",
  effect: (targets, config) => {
    return gsap.to(targets, {
      ease: config.ease,
      scale: 0.7,
      y: -20,
    });
  },
  defaults: {
    ease: "power1.out",
  },
  extendTimeline: true,
});

function stackedCardsTl(el) {
  const timeline = gsap.timeline({ paused: true });
  timeline.addLabel("in").scaleDown(el);
  return timeline;
}

function createCardScene(el) {
  ScrollTrigger.create({
    trigger: el,
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: el,
    pinSpacing: false,
    animation: stackedCardsTl(el),
  });
}

function stackedCards(cardClassName) {
  const cards = document.querySelectorAll(cardClassName);
  cards.forEach((card, index) => {
    if (index < cards.length - 1) {
      createCardScene(card);
    }
  });
}

const Inspiration = () => {
  useEffect(() => {
    stackedCards(".card");
  }, []);

  return (
    <div className="space-y-10 pb-56">
      <Meaningful />
      <Industry />
      <Captions />
      <Customization />
      <Tutorials />
      <Courses />
    </div>
  );
};

export default Inspiration;
