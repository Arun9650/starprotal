"use client";
import { NavbarItems } from "@/components/navbar/NavbarItems";
import React, { useState } from "react";
import SearchBar from "../searchbar";
import TvIcon from "../icons/TvIcon";
import NavbarSection from "@/components/navbar/NavbarSection";
import { useScroll, useMotionValueEvent } from "framer-motion";


export default function Navbar() {
  const [activeLink, setActiveLink] = useState("academy");
  const [navbarColor, setNavbarColor] = useState("#060606"); 

  const {scrollYProgress, scrollY} = useScroll();

  useMotionValueEvent(scrollY , "change",(latest) => {
    if(latest  > 150){
      setNavbarColor("bg-[#00000040] backdrop-blur-sm border-b-[1px]  border-[#ffffff26]");
    }
     else {
      setNavbarColor("bg-black");
    }
  })

  return (
   <div  className={`${navbarColor} w-full h-16 z-[1000] flex items-center fixed top-0 `}
  
  >
    
     <div
      className={`  flex justify-between items-center   mx-auto  max-w-7xl w-full     bg-transparent   text-xs font-bold`}
      style={{ zIndex: 100 }}
    >
      <span className=" text-xl font-normal    text-white">
        Star Portal.
      </span>

      <div className=" flex items-center">
        <NavbarSection
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          section={NavbarItems}
        />
      </div>

      <SearchBar />

      <div className="border border-[#fa8922] p-3 rounded-full">
        <TvIcon />
      </div>

      <button className="bg-white text-black p-2 rounded-lg px-6">
        Sign in
      </button>
    </div>
   </div>
  );
}
