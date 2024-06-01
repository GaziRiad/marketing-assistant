import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Meaningful from "./core/Meaningful";
import Industry from "./core/Industry";
import Captions from "./core/Captions";
import Customization from "./core/Customization";
import Tutorials from "./core/Tutorials";
import Courses from "./core/Courses";

const Inspiration = () => {
  return (
    <div>
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
