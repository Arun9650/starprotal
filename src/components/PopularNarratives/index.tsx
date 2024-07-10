// src/components/PopularNarratives.js

import React from "react";
import XpCoin from "../icons/XpCoin";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const narratives = [
  {
    title: "Exploring Farcaster",
    description:
      "Farcaster is a decentralized social network built on OP, enabling users to own their identity and data. Users can share updates, follow others, engage in...",
    quests: 4,
    xp: 230,
    image: "your-image-url-1.jpg",
    participants: 1200,
    badges: [
      "/assets/user-image.jpg",
      "/assets/user-image2.jpg",
      "/assets/user-image3.jpg",
    ],
  },
  {
    title: "$DEGEN Meets Orbit",
    description: "Join your fellow degen with $DEGEN.",
    tasks: 4,
    xp: 70,
    image: "/assets/degen-orbit.png",
    baseBackground: "bg-[#23af52]",
    grid: "/assets/grid-trending.png",
    chain: "Base",
    chainImage: "/assets/baseLogo.svg",
  },
  {
    title: "Introduction to Farcaster",
    description: "Introduction to Farcaster.",
    tasks: 4,
    xp: 40,
    image: "/assets/farcaster.png",
    baseBackground: "bg-[#5038b0]",
    grid: "/assets/grid-trending.png",
    chain: "OP Mainnet",
    chainImage: "/assets/optimism.png",
  },
  {
    title: "Follow People on Warpcast",
    description: "Follow creators on Warpcast.",
    tasks: 5,
    xp: 50,
    image: "/assets/creatorsonFarcaster.png",
    baseBackground: "bg-[#bb5e35]",
    grid: "/assets/grid-trending.png",
    chain: "OP Mainnet",
    chainImage: "/assets/optimism.png",
  },
];

const ExploreLensData = [
  {
    title: "Exploring Lens Protocol",
    description:
      "Lens Protocol is a decentralized social graph that empowers developers to create social media applications on the blockchain. It ensures data ownership, privacy, and interoperability, enabling users to control their content and identities while fostering innovation in decentralized social networking.",
    quests: 3,
    xp: 70,
    image: "your-image-url-1.jpg",
    participants: 604,
    badges: [
      "/assets/user-image1.jpg",
      "/assets/user-image2.jpg",
      "/assets/user-image3.jpg",
    ],
  },
  {
    title: "$DEGEN Meets Orbit",
    description: "Join your fellow degen with $DEGEN.",
    tasks: 4,
    xp: 70,
    image: "/assets/Group1.png",
    chain: "Base",
  },
  {
    title: "Introduction to Farcaster",
    description: "Introduction to Farcaster.",
    tasks: 4,
    xp: 40,
    image: "/your-image-url-3.jpg",
    chain: "OP Mainnet",
  },
  {
    title: "Follow People on Warpcast",
    description: "Follow creators on Warpcast.",
    tasks: 5,
    xp: 50,
    image: "/your-image-url-4.jpg",
    chain: "OP Mainnet",
  },
];

const ExploreGrassData = [
  {
    title: "Exploring Grass",
    description:
      "Grass is a network of over 2 million people who are rewarded for helping AI developers access the internet. Its goal is to prevent the concentration of AI by allowing ordinary people to play a part and share in the benefits of its growth.",
    quests: 1,
    xp: 40,
    image: "your-image-url-1.jpg",
    participants: 1100,
    badges: [
      "/assets/user-image1.jpg",
      "/assets/user-image2.jpg",
      "/assets/user-image3.jpg",
    ],
  },

  {
    title: "Follow People on Warpcast",
    description: "Follow creators on Warpcast.",
    tasks: 5,
    xp: 50,
    image: "/your-image-url-4.jpg",
    chain: "OP Mainnet",
  },
];

const PopularNarratives = () => {
  return (
    <div className="container max-w-[1200px] h-full flex flex-col gap-6 mx-auto mt-40 p-4">
      <div className="h-full ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Popular Narratives</h2>
          <a href="#" className="text-sm text-gray-400 hover:underline">
            See all
          </a>
        </div>
        <div className="flex items-stretch  space-x-4    rounded-3xl  bg-[#101010]">
          <div className="bg-[#141414] rounded-l-3xl  shadow-lg w-[30%] p-8">
            <h3 className="text-[32px] font-base text-white">
              {narratives[0].title}
            </h3>
            <p className="text-base font-medium leading-tight mt-2">
              {narratives[0].description}
            </p>
            <div className="flex items-center mt-4">
              <span className="bg-[#252525] font-medium  text-sm px-3 py-1.5 rounded-3xl mr-2">
                {narratives[0].quests} Quests
              </span>
              <div className="flex -space-x-2">
                {narratives[0].badges?.map((badge, index) => (
                  <img
                    key={index}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={badge}
                    alt="badge"
                  />
                ))}
              </div>
              <span className="ml-4 text-gray-400">
                {narratives[0].participants}K
              </span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center text-white gap-2 p-3 py-1.5 rounded-3xl bg-[#252525]">
                {" "}
                <XpCoin />
                <span className="text-sm text-white">
                  {narratives[0].xp} XPs
                </span>
              </div>
            </div>
            <button className="mt-12 w-full bg-[#6435e9] text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700">
              Start here
            </button>
          </div>
          <div className="flex  self-stretch py-8  grow w-[70%] bg-[#101010]">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-4xl h-full
               flex items-center  "
            >
              <CarouselContent className="h-full">
                {narratives.slice(1).map((narrative, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full ">
                      <Card className=" border-[#212121] h-full  rounded-xl">
                        <CardContent className="p-0 h-full aspect-square rounded-lg   flex  w-full">
                          <div
                            key={index}
                            className="bg-[#212121] flex flex-col justify-between h-full p-3.5 rounded-lg shadow-lg w-full  "
                          >
                            <div
                              className={`${narrative.baseBackground} h-3/5 w-full  relative rounded-lg  `}
                            >
                              <Image
                                src={narrative.grid as string}
                                alt={narrative.title}
                                width={180}
                                height={100}
                                className="  absolute top-1/2 bg-contain left-1/2 w-[90%] h-[90%] rounded-sm transform -translate-x-1/2 -translate-y-1/2  bg-no-repeat   "
                              />
                              <Image
                                src={narrative.image}
                                alt={narrative.title}
                                quality={100}
                                width={200}
                                height={100}
                                className="w-[80%]  object-cover rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  drop-shadow-2xl  shadow-black"
                              />
                            </div>

                            <div className="flex flex-col gap-2 ">
                            <div className="">
                              <div className="flex items-center gap-2  ">
                                <Image
                                  src={narrative.chainImage as string}
                                  alt={narrative.title}
                                  width={20}
                                  height={20}
                                />
                                <div className="text-white">
                                  {narrative.chain}
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold  text-white ">
                                {narrative.title}
                              </h3>
                            </div>

                            <div className="h-[1px] w-full rounded-full bg-white "></div>
                            <div className="flex items-center justify-between ">
                              <div className="flex items-center text-sm  text-gray-400">
                                <span className="mr-2  p-2 bg-[#313131] border-[#252525] px-3 rounded-full">
                                  {narrative.tasks} Tasks
                                </span>
                                <span className="flex items-center gap-2 p-2 px-3 bg-[#313131] border-[#252525] rounded-full">
                                  <XpCoin />
                                  {narrative.xp} XPs
                                </span>
                              </div>
                             
                            </div>
                            </div>

                         
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent " />
      <CarouselNext className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent"  />
            </Carousel>
          </div>
        </div>
      </div>

      <ExploreLens />
      <ExploringGrass />
    </div>
  );
};

const ExploreLens = () => {
  return (
    <div className="flex space-x-4 rounded-3xl  bg-[#101010]">
      <div className="bg-[#141414] rounded-l-3xl  overflow-hidden shadow-lg w-[30%] p-8">
        <h3 className="text-[32px] font-base text-white">
          {ExploreLensData[0].title}
        </h3>
        <p className="text-base font-medium leading-tight line-clamp-4 mt-2">
          {ExploreLensData[0].description}
        </p>
        <div className="flex items-center mt-4">
          <span className="bg-[#252525] font-medium  text-sm px-3 py-1.5 rounded-3xl mr-2">
            {ExploreLensData[0].quests} Quests
          </span>
          <div className="flex -space-x-2">
            {ExploreLensData[0].badges?.map((badge, index) => (
              <img
                key={index}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src={badge}
                alt="badge"
              />
            ))}
          </div>
          <span className="ml-4 text-gray-400">
            {ExploreLensData[0].participants}K
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-white gap-2 p-3 py-1.5 rounded-3xl bg-[#252525]">
            {" "}
            <XpCoin />
            <span className="text-sm text-white">
              {ExploreLensData[0].xp} XPs
            </span>
          </div>
        </div>
        <button className="mt-12 w-full bg-[#6435e9] text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700">
          Start here
        </button>
      </div>
      <div className="flex py-8 w-[70%] bg-[#101010]">
      <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-4xl h-full
               flex items-center  "
            >
              <CarouselContent className="h-full">
                {narratives.slice(1).map((narrative, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full ">
                      <Card className=" border-[#212121] h-full  rounded-xl">
                        <CardContent className="p-0 h-full aspect-square rounded-lg   flex  w-full">
                          <div
                            key={index}
                            className="bg-[#212121] flex flex-col justify-between h-full p-3.5 rounded-lg shadow-lg w-full  "
                          >
                            <div
                              className={`${narrative.baseBackground} h-3/5 w-full  relative rounded-lg  `}
                            >
                              <Image
                                src={narrative.grid as string}
                                alt={narrative.title}
                                width={180}
                                height={100}
                                className="  absolute top-1/2 bg-contain left-1/2 w-[90%] h-[90%] rounded-sm transform -translate-x-1/2 -translate-y-1/2  bg-no-repeat   "
                              />
                              <Image
                                src={narrative.image}
                                alt={narrative.title}
                                quality={100}
                                width={200}
                                height={100}
                                className="w-[80%]  object-cover rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  drop-shadow-2xl  shadow-black"
                              />
                            </div>

                            <div className="flex flex-col gap-2 ">
                            <div className="">
                              <div className="flex items-center gap-2  ">
                                <Image
                                  src={narrative.chainImage as string}
                                  alt={narrative.title} 
                                  width={20}
                                  height={20}
                                />
                                <div className="text-white">
                                  {narrative.chain}
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold  text-white ">
                                {narrative.title}
                              </h3>
                            </div>

                            <div className="h-[1px] w-full rounded-full bg-white "></div>
                            <div className="flex items-center justify-between ">
                              <div className="flex items-center text-sm  text-gray-400">
                                <span className="mr-2  p-2 bg-[#313131] border-[#252525] px-3 rounded-full">
                                  {narrative.tasks} Tasks
                                </span>
                                <span className="flex items-center gap-2 p-2 px-3 bg-[#313131] border-[#252525] rounded-full">
                                  <XpCoin />
                                  {narrative.xp} XPs
                                </span>
                              </div>
                             
                            </div>
                            </div>

                         
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent " />
              <CarouselNext className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent"  />
            </Carousel>
      </div>
    </div>
  );
};

const ExploringGrass = () => {
  return (
    <div className="flex space-x-4 rounded-3xl  bg-[#101010]">
      <div className="bg-[#141414] rounded-l-3xl  overflow-hidden shadow-lg w-[30%] p-8">
        <h3 className="text-[32px] font-base text-white">
          {ExploreGrassData[0].title}
        </h3>
        <p className="text-base font-medium line-clamp-4 leading-tight mt-2">
          {ExploreGrassData[0].description}
        </p>
        <div className="flex items-center mt-4">
          <span className="bg-[#252525] font-medium  text-sm px-3  py-1.5 rounded-3xl mr-2">
            {ExploreGrassData[0].quests} Quests
          </span>
          <div className="flex -space-x-2">
            {ExploreGrassData[0].badges?.map((badge, index) => (
              <img
                key={index}
                className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                src={badge}
                alt="badge"
              />
            ))}
          </div>
          <span className="ml-4 text-gray-400">
            {ExploreGrassData[0].participants}K
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-white gap-2 p-3 py-1.5 rounded-3xl bg-[#252525]">
            {" "}
            <XpCoin />
            <span className="text-sm text-white">
              {ExploreGrassData[0].xp} XPs
            </span>
          </div>
        </div>
        <button className="mt-12 w-full bg-[#6435e9] text-white font-medium py-2 px-4 rounded-lg hover:bg-purple-700">
          Start here
        </button>
      </div>
      <div className="flex py-8 w-[70%] bg-[#101010]">
      <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-4xl h-full
               flex items-center  "
            >
              <CarouselContent className="h-full">
                {narratives.slice(1).map((narrative, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full ">
                      <Card className=" border-[#212121] h-full  rounded-xl">
                        <CardContent className="p-0 h-full aspect-square rounded-lg   flex  w-full">
                          <div
                            key={index}
                            className="bg-[#212121] flex flex-col justify-between h-full p-3.5 rounded-lg shadow-lg w-full  "
                          >
                            <div
                              className={`${narrative.baseBackground} h-3/5 w-full  relative rounded-lg  `}
                            >
                              <Image
                                src={narrative.grid as string}
                                alt={narrative.title}
                                width={180}
                                height={100}
                                className="  absolute top-1/2 bg-contain left-1/2 w-[90%] h-[90%] rounded-sm transform -translate-x-1/2 -translate-y-1/2  bg-no-repeat   "
                              />
                              <Image
                                src={narrative.image}
                                alt={narrative.title}
                                quality={100}
                                width={200}
                                height={100}
                                className="w-[80%]  object-cover rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  drop-shadow-2xl  shadow-black"
                              />
                            </div>

                            <div className="flex flex-col gap-2 ">
                            <div className="">
                              <div className="flex items-center gap-2  ">
                                <Image
                                  src={narrative.chainImage as string}
                                  alt={narrative.title}
                                  width={20}
                                  height={20}
                                />
                                <div className="text-white">
                                  {narrative.chain}
                                </div>
                              </div>
                              <h3 className="text-lg font-semibold  text-white ">
                                {narrative.title}
                              </h3>
                            </div>

                            <div className="h-[1px] w-full rounded-full bg-white "></div>
                            <div className="flex items-center justify-between ">
                              <div className="flex items-center text-sm  text-gray-400">
                                <span className="mr-2  p-2 bg-[#313131] border-[#252525] px-3 rounded-full">
                                  {narrative.tasks} Tasks
                                </span>
                                <span className="flex items-center gap-2 p-2 px-3 bg-[#313131] border-[#252525] rounded-full">
                                  <XpCoin />
                                  {narrative.xp} XPs
                                </span>
                              </div>
                             
                            </div>
                            </div>

                         
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent " />
      <CarouselNext className="rounded-md py-8 w-11 border border-[#ffffff1a]  bg-[#ffffff0d] hover:bg-transparent"  />
            </Carousel>
      </div>
    </div>
  );
};

export default PopularNarratives;
