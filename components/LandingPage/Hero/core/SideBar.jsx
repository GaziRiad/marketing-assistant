import React from "react";
import { HiInboxArrowDown, HiPencil } from "react-icons/hi2";
import { menuItemsContent } from "@/app/lib/constant";
import Image from "next/image";


const SideBar = () => {
  return (
    <div className="xl:w-[262px] md:w-1/2 w-full rounded-[40px] bg-white md:h-[800px] pb-10 pt-10">
      <button className="ml-4 flex w-[131.3px] items-center justify-center gap-3 rounded-xl bg-[#C2E7FF] py-3">
        <HiPencil />
        <p className="text-[#545454]">Compose</p>
      </button>
      <div className="mt-5 flex h-[40px] w-[90%] cursor-pointer items-center justify-between rounded-r-3xl bg-[#F7F7F7] px-8">
        <div className="flex items-center gap-2">
          <HiInboxArrowDown size={18} />
          <p>Inbox</p>
        </div>
        <Image src={"/images/InBox.png"} alt="Logo" width={50} height={48} />
      </div>
      <div className="ml-8 mt-[10px] flex flex-col gap-y-3">
        {menuItemsContent.map((item, index) => (
          <div key={index} className="flex cursor-pointer items-center gap-2">
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-10 grid grid-cols-2 gap-[9px]">
        <div className="h-[228px] w-full rounded-2xl bg-[#F7F7F7] md:block hidden" />
        <div className="h-[228px] w-full rounded-2xl bg-[#F7F7F7] md:block hidden" />
        <div className="h-[130px] w-full rounded-2xl bg-[#F7F7F7] md:block hidden" />
        <div className="h-[130px] w-full rounded-2xl bg-[#F7F7F7] md:block hidden" />
      </div>
    </div>
  );
};

export default SideBar;
