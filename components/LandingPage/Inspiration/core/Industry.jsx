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
import {
  IndustryImageSources,
} from "@/app/lib/constant";

const Industry = () => {
  return (
    <div className="mt-10 flex md:flex-row flex-col md:rounded-[40px] rounded-lg bg-[#F7F7F7]">
      <div className="flex md:w-1/2 items-center justify-center">
        <p className="text-center sm:text-4xl text-2xl font-bold text-[#777777] mt-5 md:mt-0">
          For <span className="text-[#89B9D1]">every </span> industry.
        </p>
      </div>
      <div className="relative flex lg:h-[740px] h-[500px] mt-5 md:mt-0 md:w-1/2 justify-center rounded-b-lg md:rounded-none md:rounded-r-[40px] bg-[#89B9D1] px-10">
        <Carousel
          opts={{
            align: "start",
          }}
          className="flex md:max-w-lg items-center"
        >
          <CarouselContent>
            {IndustryImageSources.map((item, index) => (
              <CarouselItem key={index} className="md:basis-2/2 lg:basis-1/2 w-full">
                <div>
                  <Card>
                    <CardContent className="sm:h-[400px] h-[300px] rounded-md">
                      <Image
                        className="h-full w-full rounded-md object-fill md:object-cover"
                        width={2000}
                        height={2000}
                        src={item.src}
                        alt="svg"
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
