import React from "react";
import SideBar from "./SideBar";
import Templates from "./Templates";
import ProfilePreview from "./ProfilePreview";

const ContentHub = () => {
  return (
    <div className="mt-5 flex flex-col gap-3 rounded-[40px] border-2 bg-[#F7F7F7] p-2 text-[#545454] md:p-5 xl:flex-row">
      <div className="flex flex-col justify-between gap-5 md:flex-row ">
        <SideBar />
        <div className="block w-full md:w-1/2 xl:hidden">
          <ProfilePreview />
        </div>
      </div>
      <Templates />
      <div className="hidden xl:block">
        <ProfilePreview />
      </div>
    </div>
  );
};

export default ContentHub;
