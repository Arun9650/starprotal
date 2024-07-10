"use client";
import CryptoCreators from "@/components/CryptoCreators";
import CryptoDictionary from "@/components/CryptoDictionary";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { useAtom } from "jotai";
import { activeTabAtom } from "@/atom";
import TabSwitcher, {  ITab, tabs } from "@/components/tabSwitcher";


interface TabProps {
  tabs: ITab[];
}


const Tab : React.FC<TabProps>  = (props : TabProps) => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  return (
    <div className="w-full  ">
      <div className="">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};




export default function Academy() {
   
  return (
    <main className="flex flex-col overflow-x-hidden relative text-[#7d7d7d] bg-[#060606] items-center justify-between ">
      <Navbar />
      <Hero />
      <Tab tabs={tabs} />
      <CryptoCreators />
      <CryptoDictionary />

      <div className="">
      <TabSwitcher/>
      <Footer />
      </div>
    </main>
  );
}
