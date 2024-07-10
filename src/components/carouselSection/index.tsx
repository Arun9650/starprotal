import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselItems } from "./carouselitems";
import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const CarouselSection = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  absolute top-[450px] backdrop-blur-sm left-1/2 transform -translate-x-1/2   max-w-6xl "
    >
      <CarouselContent className="">
        {CarouselItems.map((item, index) => (
          <CarouselItem key={index} className="   ">
            <Card className="bg-[#2525256d] rounded-2xl border-[#444444] ">
              <div className="flex items-center p-5  h-96">
                <div className="flex   rounded-md  w-full h-full">
                  <div className="w-[60%] relative   ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      className="object-cover border border-[#444444] rounded-lg "
                    />
                  </div>
                  <div className="w-1/2 px-8 py-6 text-start  flex items-start justify-between flex-col ">
                    <div>
                      <div className="text-3xl w-full mb-1 text-[#fff]">
                        {item.title}
                      </div>

                      <div className="text-wrap  w-full text-[#fff9] overflow-hidden text-ellipsis leading-tight line-clamp-4">
                        {item.description}
                      </div>

                      <Separator className="my-4" />

                      <div className="flex -space-x-2">
                        {item.userImage?.map((badge, index) => {
                          return (
                            <Image
                              width={108}
                              height={108}
                              quality={100}
                              key={index}
                              className="inline-block h-9 w-9 rounded-full ring-1 ring-white"
                              src={badge}
                              alt="badge"
                            />
                          );
                        })}
                      </div>
                    </div>

                    <button  className="bg-[#6435e9]  border shadow-[0_1px_2px_#ffffff40_inset,0_-1px_2px_#ffffff40_inset] inline-flex justify-center items-center text-white text-base font-medium tracking-[0.117px] max-w-max  px-6 mt-10 py-3.5 rounded-lg border-solid border-[rgba(255,255,255,0.1)]">
                      Begin your journey
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent " />
      <CarouselNext className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent"  />
    </Carousel>
  );
};

export default CarouselSection;
