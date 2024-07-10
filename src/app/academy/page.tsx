"use client";
import CarouselSection from "@/components/carouselSection";
import CryptoCreators from "@/components/CryptoCreators";
import CryptoDictionary from "@/components/CryptoDictionary";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import RecommendedNarratives from "@/components/Narattives";
import Navbar from "@/components/navbar";
import PopularNarratives from "@/components/PopularNarratives";
import { useState } from "react";
import { useAtom } from "jotai";
import { activeTabAtom } from "@/atom";
import PathComponent from "@/components/storyTelling";
import TabSwitcher from "@/components/tabSwitcher";

const Tab = ({ tabs }: { tabs: { label: string; content: JSX.Element }[] }) => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  return (
    <div className="w-full  ">
      <div className="">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};


export  const tabs = [
  {
    label: "Essentials",
    content: (
      <div className="w-full ">
        <PathComponent />
      </div>
    ),
  },
  {
    label: "Alpha Hub",
    content: (
      <div>
        <CarouselSection /> <PopularNarratives /> <RecommendedNarratives />{" "}
      </div>
    ),
  },
];

export default function Academy() {
   
  return (
    <main className="flex flex-col overflow-x-hidden relative text-[#7d7d7d] bg-[#060606] items-center justify-between ">
      <Navbar />
      <Hero />
      <Tab tabs={tabs} />
      <CryptoCreators />
      <CryptoDictionary />
      <TabSwitcher/>
      <Footer />
    </main>
  );
}
