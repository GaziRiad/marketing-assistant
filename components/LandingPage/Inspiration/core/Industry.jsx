import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { IndustryImageSources } from "@/app/lib/constant";

const Industry = () => {
  return (
    <div className="flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px] sticky top-0">
      <div className="flex items-center justify-center md:w-1/2">
        <p className="mt-5 text-center text-2xl font-bold text-[#777777] sm:text-4xl md:mt-0">
          For <span className="text-[#89B9D1]">every </span> industry.
        </p>
      </div>
      <div className="relative mt-5 flex justify-center items-center rounded-b-lg bg-[#89B9D1] px-5 md:mt-0 md:w-1/2 md:rounded-none md:rounded-r-[40px] md:px-10 h-full lg:h-[600px] pt-20 pb-16">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-md"
        >
          <CarouselContent className="h-[500px] w-full mt-5">
            {IndustryImageSources.map((item, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center h-[200px] rounded-md">
                      <Image className="h-[200px] w-full object-cover rounded-md" alt={item.alt} src={item.src} width={500} height={500} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Industry;
