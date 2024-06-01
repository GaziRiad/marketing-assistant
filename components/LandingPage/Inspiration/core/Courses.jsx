import Image from "next/image";
import React from "react";

const Courses = () => {
  return (
    <div className="mt-10 flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px]">
      <div className="relative flex items-center justify-center md:w-1/2">
        <p className="mt-5 text-center text-2xl font-bold text-[#777777] sm:text-4xl md:mt-0">
          Planned &{" "}
          <span className="text-[#FDC6AE]">
            simplified <br />
          </span>
          courses.
        </p>
      </div>
      <div className="relative mt-5 flex items-center gap-2 rounded-b-lg bg-[#F9AEB5] md:mt-0 md:w-1/2 md:rounded-none md:rounded-r-[40px] md:px-10 md:h-[600px] 2xl:px-20">
        <div className="flex h-[350px] w-[200px] flex-col gap-y-10 rounded-2xl bg-[#5ACBF0] p-5 text-lg font-bold text-white">
          <p>Course 1</p>
          <p>Course 1</p>
          <p>Course 1</p>
        </div>
        <div className="flex h-[350px] flex-col gap-y-10 rounded-2xl bg-[#5ACBF0] p-5 md:text-lg text-xs font-bold text-white">
          <p>🙄How many hastaghs?##</p>
          <p>📅Scheduling content for whole month</p>
          <p>❌Fix these 5 mistakes on your IG profile NOW!</p>
        </div>
        <Image
          className="absolute bottom-20 left-36 lg:block hidden"
          width={170}
          height={172}
          src="/images/CoursesImage.png"
          alt="svg"
        />
      </div>
    </div>
  );
};

export default Courses;
