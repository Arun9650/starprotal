import { activeTabAtom } from "@/atom";
import { useAtom } from "jotai";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import homeImage from "../../public/assets/homeImage2.svg";

const Hero = () => {
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);
  console.log("🚀 ~ Hero ~ activeTab:", activeTab)

  return (

    <div className="bg-[url('/assets/herobg.png')] h-screen mt-14 relative w-full bg-no-repeat bg-center bg-contain">
      <div className={`${activeTab === "Alpha Hub" ? "-top-44" : "-top-10"}  flex w-full h-full justify-center absolute   items-center`}>
       
        
        
        <div className="flex flex-col items-center">
          <Image
            src={"/assets/asset11.gif"}
            width={250}
            height={250}
            alt="ad"
            className=" mix-blend-screen"
          />
          {activeTab === "Essentials" && (
            <div className="flex items-center flex-col gap-14">

            <div className="w-[550px] text-xl text-center ">
              <div>
              <span className="text-white"> Intract users </span>have together
              made more than <span className="text-white">$100 million</span> in
              web3. Join them and{" "}
              <span className="text-white">learn how to earn crypto!</span>
              </div>
              
            </div>

            <Button className=" bg-[#6d40eb] px-20 mt-8 font-normal">
                Get Started 
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
