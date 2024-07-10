// src/components/RecommendedNarratives.js

import Image from 'next/image';
import React from 'react';
import XpCoin from '../icons/XpCoin';

const narratives = [
  {
    title: "Exploring Scroll",
    description: "Scroll seamlessly extends Ethereum’s capabilities through zero knowledge tech and EVM...",
    quests: 5,
    xp: 390,
    image: "/assets/exploring-scroll.png",
  },
  {
    title: "Exploring BASE",
    description: "Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users...",
    quests: 3,
    xp: 170,
    image: "/assets/exploring-base.png",
  },
  {
    title: "Exploring SocialFi Drops",
    description: "Explore SocialFi drops. SocialFi drops fuse finance with social media, empowering creators...",
    quests: 4,
    xp: 380,
    image: "/assets/exploring-socialFi.jpg",
  },
  {
    title: "Get onboarded on Bitcoin",
    description: "Bitcoin: the first decentralized digital currency, enabling direct transactions on a peer-to-peer...",
    quests: 2,
    xp: 180,
    image: "/assets/Bitcoin-narratives.png",
  },
  {
    title:"Trending",
    description:"Explore the Latest Trends: Discover Projects on the Verge of Mainnet Launch or with Exciting Airdrop Opportunities.",
    quests:4,
    xp:280,
    image:"/assets/Trending.png"
  },
  {
    title:"Exploring Solana",
    description:"Solana: A blazing-fast blockchain with speeds up to 65,000 transactions per second, surpassing Bitcoin and Ethereum. Low transaction fees and minimal energy consumption make it cost-effective and sustainable. Explore Solana’s ecosystem for cutting-edge development! 🚀💡🔗",
    quests:5,
    xp:480,
    image: "/assets/exploring-solana.png"
  }
];

const RecommendedNarratives = () => {
  return (
    <div className="container max-w-[1200px] mt-10 mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Recommended Narratives</h2>
        <a href="#" className="text-sm text-gray-400 hover:underline">See all</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {narratives.map((narrative, index) => (
          <div key={index} className="flex hover:bg-[#2d2d2d] bg-[#151515] rounded-3xl border border-[#252525] p-4  overflow-hidden shadow-lg">
            <div className="relative w-[150px] h-[180px]">
                <div className='p-2 border border-[#2a2a2a] bg-[#202020] rounded-2xl h-full'>
                <Image src={narrative.image} alt={narrative.title} width={150} height={200} className="object-cover  rounded-xl w-full h-full" />
                </div>
              <div className="absolute bottom-0    left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-black bg-opacity-50 flex w-[90px]   text-white rounded-3xl text-sm px-4 py-2 "> {narrative.quests} Quests</div>
              </div>
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-medium  text-white">{narrative.title}</h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2   ">{narrative.description}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center  p-2 px-[10px]  gap-2 rounded-2xl bg-[#252525] border-[#252525] text-sm text-gray-400">
                    <XpCoin/>
                  <span className=" "> {narrative.xp} XPs</span>
                </div>
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedNarratives;
