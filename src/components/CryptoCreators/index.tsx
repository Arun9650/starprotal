import Image from "next/image";
import React from "react";

const CryptoCreators = () => {
  const topCryptoCreators = [
    {
      title: "How to plan your retirement with crypto?",
      image: "/assets/cat.png",
    },
    {
      title: "Why are there limited Bitcoin?",
      image: "/assets/froge.png",
    },
    {
      title: "How does Uniswap actually works?",
      image: "/assets/unicorn.png",
    },
    {
      title: "How to spot crypto projects to invest in?",
      image: "/assets/monkey.png",
    },
  ];

  return (

    <div className=" h-screen flex flex-col justify-center py-10 mt-10">
        <div className="flex flex-col items-center">
            <div className="text-white text-2xl">

        Top Crypto Creators and Projects to Follow
            </div>
            <div>
            Answers to your crypto doubts, straight from the experts

            </div>
        </div>
    <div className="flex gap-5 my-4  ">
      {topCryptoCreators.map((item, index) => (
          <div
          key={index}
          className="flex gap-4 rounded-lg border border-none overflow-hidden relative"
          >
          <Image src={item.image} alt={item.title} width={280} height={250} />

          <div className="absolute bottom-0 blur-3xl bg-black h-1/2 ">

          </div>

          <div className="absolute bottom-0 p-6 backdrop-blur-xl  text-start  flex items-center justify-center flex-col ">
            <div className="text-xl w-full  text-[#ffedd9] bg-blend-color-burn">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default CryptoCreators;
