import { activeTabAtom } from '@/atom'
import { useAtom } from 'jotai'
import React from 'react'
import PathComponent from '../storyTelling';
import CarouselSection from '../carouselSection';
import PopularNarratives from '../PopularNarratives';
import RecommendedNarratives from '../Narattives';

export  interface ITab {
  label: string;
  content: JSX.Element;
}


export  const tabs: ITab[] = [
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

interface TabProps {
  tabs: ITab[];
}

const TabSwitcher = () => {
    const [activeTab, setActiveTab] = useAtom(activeTabAtom)
  return (
    <div className='w-full  mx-auto fixed z-[1000]   mb-20 bottom-12 '>
         <div className="flex mx-auto  
         bg-[#00000040] backdrop-blur-sm   border-[#ffffff26] rounded-3xl overflow-hidden  w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`p-1 px-8 text-lg bg-[#181818]   overflow-hidden rounded-3xl  ${
              activeTab === tab.label
                ? "text-white  bg-[#5e5e5e9a] backdrop-blur-sm  shadow-2xl  "
                : "text-[#fff6]  bg-transparent "
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TabSwitcher