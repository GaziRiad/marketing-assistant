import React from "react";
import FocusContentHeader from "./core/FocusContentHeader";
import FocusContentBody from "./core/FocusContentBody";
import FocusContentFooter from "./core/FocusContentFooter";

const FocusContent = () => {

  return (
    <div className="px-2 md:px-14">
      <div
        className="mt-5 w-full rounded-[40px] border-2 border-[#A6A6A6] pb-5"
      >
        <FocusContentHeader />
        <div className="mt-5 border-t-[3px] border-dashed border-red-500" />
        <FocusContentBody />
        <div className="mt-5 border-t-[3px] border-dashed border-red-500" />
        <FocusContentFooter />
      </div>
    </div>
  );
};

export default FocusContent;
