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
    <div className="sticky top-0 flex flex-col rounded-lg bg-[#F7F7F7] md:flex-row md:rounded-[40px]">
      <div className="flex items-center justify-center md:w-1/2">
        <p className="mt-5 text-center text-3xl font-bold text-[#777777] sm:text-4xl md:mt-0">
          For <span className="text-[#89B9D1]">every </span>{" "}
          <br className="block md:hidden" /> industry.
        </p>
      </div>
      <div className="relative mt-5 flex h-[450px] items-center justify-center rounded-b-lg bg-[#89B9D1] pb-16 pt-20 md:mt-0 md:h-[700px] md:w-1/2 md:rounded-none md:rounded-r-[40px] md:px-5 lg:h-[600px]">
        <Carousel className="w-full lg:max-w-lg">
          <CarouselContent className="-ml-1">
            {IndustryImageSources.map((item, index) => (
              <CarouselItem key={index} className="pl-1 ">
                <div className="p-5">
                  <Card>
                    <CardContent>
                      <Image
                        className="h-[300px] w-full rounded-md object-cover md:h-[300px]"
                        alt={item.alt}
                        src={item.src}
                        width={500}
                        height={500}
                      />
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
