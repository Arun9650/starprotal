// src/components/PathComponent.js

import React, { useEffect, useState } from "react";
import BlueLine from "../../../public/assets/blueline.svg";
import SmallLineNFT from "../../../public/assets/smallLineNFT.svg";
import SideLine from "../../../public/assets/sideLine.svg";
import EarnNFTLine from "../../../public/assets/EarnNFT.svg";
import AirdropLine from "../../../public/assets/airdropLine.svg";
import RightArrow from "../../../public/assets/RightArrow.svg";
import discord from "../../../public/assets/discord.svg";

import glassBall from "../../../public/assets/glassBall.png";
import catImage from "../../../public/assets/cat-image.png";
import catImage2 from "../../../public/assets/cat-image2.png";
import airdropDowpDown from "../../../public/assets/airdropDropDown.png";
import basicofcrypto from "../../../public/assets/basicofcryptoListImage1.png";

import LuckDraw from "../../../public/assets/luckydraw.gif";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import XpCoin from "../icons/XpCoin";

const PathComponent = () => {
  const CryptoDropDownData = [
    {
      title: "#1: But what is crupto and web3",
      task: 11,
      image: "/assets/basicofcryptoListImage1.png",
    },
    {
      title: "#2: Setting up your own web3 wallet!",
      task: 8,
      image: "/assets/basicofcryptoListImage2.png",
    },
    {
      title: "#3: What the heck is a blockchain?",
      task: 6,
      image: "/assets/basicofcryptoListImage3.png",
    },
    {
      title: "#4: Swapping and bridging? What’s that?",
      task: 5,
      image: "/assets/basicofcryptoListImage4.png",
    },
  ];

  const calculateTimeLeft = () => {
    const difference = +new Date("2022-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

//   const timerComponents = Object.keys(timeLeft).map((interval) => {
//     return (
//       <span key={interval}>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });

  return (
    <div className="   max-w-full w-full  ">
      <div className="relative">
        <Image
          src={BlueLine}
          alt="blue line"
          className="ml-10"
          width={150}
          height={150}
        />
        <div className="w-[500px] absolute -top-28 z-50 overflow-hidden rounded-3xl ml-40 ">
          <Accordion type="single" collapsible className="w-full bg-[#171616]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                <div className="py-2 px-6 flex ">
                  <div className="relative w-[230px] h-[180px]">
                    <div className="p-2 border border-[#2b2b2b]  bg-[#202020] rounded-2xl h-full">
                      <Image
                        src={glassBall}
                        alt={"adf"}
                        className="object-cover  rounded-xl w-full h-full"
                      />
                    </div>
                    <div className="absolute bottom-0    left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-black bg-opacity-50 flex w-[90px]   text-white rounded-3xl text-sm px-4 py-2 ">
                        {" "}
                        6 Quests
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 pt-2  text-start">
                    <div className="text-2xl text-white">Basics of Crypto</div>
                    <p>
                      The safest and easiest place to start your crypto journey!
                    </p>

                    <Separator className="my-2" />

                    <div className="flex bg-[#252525] items-center gap-1 mt-3 border border-[#2b2b2b]  w-fit p-3 py-1 rounded-3xl ">
                      <XpCoin />
                      <div className="text-sm ">1490 XPs</div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-[#101010] h-72 overflow-y-scroll pt-6">
                {CryptoDropDownData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" m-4 border border-[#252525] p-2 flex-wrap rounded-xl  h-fit bg-[#1c1c1c] "
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt="bacisofCrypto1"
                          width={120}
                          height={100}
                          quality={100}
                          // fill="cover"
                          className="object-cover h-20 rounded-xl "
                        />

                        <div className="flex flex-col  w-full truncate justify-between">
                          <h1 className="text-xl w-64  truncate text-[#cfcfcf] ">
                            {item.title}
                          </h1>
                          <Separator className="my-3 bg-[#252525]  w-[99%] " />
                          <div className="flex justify-between items-center gap-2 w-full">
                            <div className="w-max text-base ">
                              {" "}
                              {item.task} Tasks
                            </div>
                            <div className="w-full bg-[#3e3e3e] rounded-full h-4 overflow-hidden">
                              <div className="bg-[#3e3e3e] shadow-[0_-2px_2px_#0006_inset,0_2px_2px_#0006_inset] shadow-black border  border-[#252525] h-full rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className=" border border-[#3e3e3e] bg-[#252525] self-end  rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 text-[#414141]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[700px]  h-96 mx-auto mt-10 bg-[url(/assets/smallLineNFT.svg)] bg-no-repeat "></div>

        <div>
          <div className="absolute top-20 right-32   rounded-lg overflow-hidden shadow-lg w-72 p-4 text-white">

          <div className="relative flex flex-col gap-3  w-[160px] ">
            <div className=" border bg-[#151515] border-[#252525] text-[#252525] w-fit mx-auto p-3 rounded-full  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
              <div className="p-1.5 border border-[#2a2a2a] bg-[#3030302f] rounded-2xl h-44">
                <Image
                  src={catImage}
                  alt={"adf"}
                  className="object-cover  rounded-xl w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4   -right-4 bg-[#131313] p-3 rounded-full border border-[#303030]">
                <Image
                  src={"/assets/lock.svg"}
                  width={20}
                  height={20}
                  alt="lock"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg text-[#757575] font-semibold">
                Intract Certified: Learner NFT
              </h3>
              <p className="text-sm text-[#3e3e3e] font-semibold w-[160px] mt-2">
                Your crypto black-belt certificate
              </p>
            </div>
            <button className="mt-4 w-[160px] bg-[#151515]  text-[#707070] font-medium py-2 px-4 rounded-lg hover:bg-gray-600">
              Claim
            </button>
          </div>
        </div>

        <div className="absolute w-[700px] h-[700px] z-0 top-64  -right-10 bg-[url(/assets/sideLine.svg)] bg-no-repeat"></div>
      </div>

      <div className="w-full  mt-20 mx-auto relative">
        <div className="w-[550px]  absolute left-1/2 transform -translate-x-1/2 ml-20 z-50 overflow-hidden rounded-3xl mx-auto ">
          <Accordion type="single" collapsible className="w-full bg-[#171616]">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline">
                <div className="py-2 px-6 flex ">
                  <div className="relative w-[180px] h-[180px]">
                    <div className="p-2 border border-[#2a2a2a] bg-[#202020] rounded-2xl h-full">
                      <Image
                        src={airdropDowpDown}
                        alt={"adf"}
                        className="object-cover  rounded-xl w-full h-full"
                      />
                    </div>
                    <div className="absolute bottom-0    left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-black bg-opacity-50 flex w-[90px]   text-white rounded-3xl text-sm px-4 py-2 ">
                        {" "}
                        6 Quests
                      </div>
                    </div>
                  </div>

                  <div className="pl-4 pt-2  text-start">
                    <div className="text-2xl font-medium text-white">Introduction to Airdrops</div>
                    <p className="mt-2 ">
                      Your best bet to make  it big in crypto!
                    </p>

                    <Separator className="my-4" />  

                    <div className="flex items-center gap-1 border border-[#252525] bg-[#252525] w-fit   p-3 py-1   my-2 rounded-3xl ">
                      <XpCoin />
                      <div>1490 XPs</div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-[#101010] h-72 overflow-y-scroll pt-6">
                {CryptoDropDownData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" m-4 border border-[#252525] p-2 flex-wrap rounded-xl  h-fit bg-[#1c1c1c] "
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt="bacisofCrypto1"
                          width={120}
                          height={100}
                          quality={100}
                          // fill="cover"
                          className="object-cover h-20 rounded-xl "
                        />

                        <div className="flex flex-col  w-full truncate justify-between">
                          <h1 className="text-xl w-64  truncate text-[#cfcfcf] ">
                            {item.title}
                          </h1>
                          <Separator className="my-3 bg-[#252525]  w-[99%] " />
                          <div className="flex justify-between items-center gap-2 w-full">
                            <div className="w-max text-base ">
                              {" "}
                              {item.task} Tasks
                            </div>
                            <div className="w-full bg-[#3e3e3e] rounded-full h-4 overflow-hidden">
                              <div className="bg-[#3e3e3e] shadow-[0_-2px_2px_#0006_inset,0_2px_2px_#0006_inset] shadow-black border  border-[#252525] h-full rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className=" border border-[#3e3e3e] bg-[#252525] self-end  rounded-full p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 text-[#414141]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="bg-[url('/assets/EarnNFT.svg')] relative bg-no-repeat ml-72 mt-10 w-[300px] h-[500px] ">
        <div>
          <div className="absolute -bottom-40 -left-32   rounded-lg overflow-hidden shadow-lg w-72 p-4 text-white">
            <div className="relative flex flex-col gap-3  w-[160px] ">
            <div className=" border bg-[#151515] border-[#252525] text-[#252525] w-fit mx-auto p-3 rounded-full  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
              <div className="p-1.5 border border-[#2a2a2a] bg-[#3030302f] rounded-2xl h-44">
                <Image
                  src={catImage2}
                  alt={"adf"}
                  className="object-cover  rounded-xl w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4   -right-4 bg-[#131313] p-3 rounded-full border border-[#303030]">
                <Image
                  src={"/assets/lock.svg"}
                  width={20}
                  height={20}
                  alt="lock"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg text-[#757575] font-semibold">
                Intract Certified: Learner NFT
              </h3>
              <p className="text-sm text-[#3e3e3e] font-semibold w-[160px] mt-2">
                Your crypto black-belt certificate
              </p>
            </div>
            <button className="mt-4 w-[160px] bg-[#151515]  text-[#707070] font-medium py-2 px-4 rounded-lg hover:bg-gray-600">
              Claim
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-screen">
        <div className="bg-[url('/assets/airdropLine.svg')] absolute -top-20  bg-no-repeat  -ml-20   w-full h-screen"></div>

        <div className=" absolute   right-40  top-56  rounded-xl text-white flex  items-end justify-end">
          <div className="">
            <div className="rounded-lg shadow-lg flex  flex-col gap-10 md:flex-row text-white">
              <div className="flex flex-col items-center  z-50 p-4 pt-0 rounded-lg  w-[340px] ">
                <div className="text-center mb-4 border border-[#2b2b2b]  w-full p-3 rounded-xl bg-[#151515] ">
                  <h2 className="text-base  font-medium text-start text-[#727272] ">
                    Reward unlocks in
                  </h2>
                  <Separator  className="my-2 mb-0" />
                  <div className="bg-black mt-2 overflow-hidden rounded-lg">
                    <div className="text-2xl text-[#727272] font-semibold border border-[#2b2b2b]  p-4 px-6 rounded-lg  bg-[url(/assets/dottedbg.png)] bg-contain flex justify-between gap-5 mt-2">
                      <div>
                        <div>00</div>
                        <div className="text-sm">Days</div>
                      </div>
                      <div>
                        <div>00</div>
                        <div className="text-sm">Hrs</div>
                      </div>
                      <div>
                        <div>00</div>
                        <div className="text-sm">Min</div>
                      </div>
                      <div>
                        <div>00</div>
                        <div className="text-sm">sec</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-[#2b2b2b] p-3 rounded-lg w-full bg-[#151515]">
                  <div className="flex flex-col  gap-4 ">
                    <Image
                      src={LuckDraw}
                      alt="lucky draw"
                      width={300}
                      height={300}
                      className="rounded-lg"
                    />

                    <div>
                      <div className="flex justify-between items-center">
                        <h3> Exclusive Community</h3>

                        <h3 className="flex items-center gap-1 justify-between">
                          <Image
                            src={discord}
                            alt="discord icon"
                            width={20}
                            height={20}
                          />
                          EarnDrop
                        </h3>
                      </div>

                      <Separator className="my-2 mb-2.5" />

                      <div className="flex flex-col gap-1 my-1 mb-0">
                        <h3 className="text-[#a3a3a3b7] text-sm font-semibold">
                          {" "}
                          Complete all Essential quests{" "}
                        </h3>
                        <h3 className="text-[#a3a3a3b7] text-sm font-semibold">
                          {" "}
                          Complete at least 1 Alpha Hub quest today
                        </h3>
                      </div>
                    </div>

                    <button className="bg-[#252525] border border-[#2b2b2b] text-[#a3a3a3] flex  items-center justify-center gap-4 font-bold py-2 px-4 rounded-lg ">
                      Clam Now
                      <Image
                        src={RightArrow}
                        className="text-[#a3a3a3]"
                        alt="lucky draw"
                        width={15}
                        height={15}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#131313] p-4 z-50 rounded-lg w-[300px] h-min mt-4 md:mt-0 md:ml-4">
                <h2 className="text-base text-[#6e6e6e] font-medium mb-2">
                  Reward info
                </h2>
                <p className="text-sm text-gray-400 mb-2">
                  Free access to paid KOL (crypto earning) communities!
                </p>
                <p className="text-sm text-gray-400">
                  Win access to exclusive earning communities of some of the
                  greatest earners in crypto for a month, every 24 hours. Get
                  access to unmatched insights, a close-knit community of the
                  best airdrop earners, and more.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  To win: make sure you&apos;ve connected your Twitter and
                  Discord accounts - and follow our criteria!
                </p>
              </div>

              <div className="bg-[url(/assets/connectingLine.svg)] w-60  h-96 bg-no-repeat absolute right-36 -bottom-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathComponent;
