import React from "react";
import CryptoDictionaryImage from "../../../public/assets/crypto-dictionary.png";
import Image from "next/image";

const CryptoDictionary = () => {
  return (
    <div className="w-full   h-screen">
     <div className="max-w-[1200px] mx-auto">
     <div className="flex flex-col items-center my-10 ">
        <div className="text-white text-2xl">Crypto Dictionary</div>
        Your one-stop to catch up on all crypto terms
      </div>
      <div className="relative  w-full h-full  shadow-lg">
        <Image
          src={CryptoDictionaryImage}
          alt="Web3 + Degen Glossary"
          className="w-full rounded-2xl border border-[#ffffff36] overflow-hidden object-cover "
        />

        <div className="absolute inset-0 custom-gradient flex items-end p-4">
          <div className="backdrop-blur-sm ">
            <h2 className="text-2xl text-slate-200 font-semibold">Web3 + Degen Glossary</h2>
            <p className="text-gray-300">Your own crypto dictionary</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default CryptoDictionary;
