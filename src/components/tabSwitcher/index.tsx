import { tabs } from '@/app/academy/page'
import { activeTabAtom } from '@/atom'
import { useAtom } from 'jotai'
import React from 'react'

const TabSwitcher = () => {
    const [activeTab, setActiveTab] = useAtom(activeTabAtom)
  return (
    <div className='w-full  mx-auto fixed z-[1000]   mb-20 bottom-12 '>
         <div className="flex mx-auto  
          bg-[#181818]   rounded-3xl overflow-hidden  w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`p-1 px-8 text-lg bg-[#181818]   overflow-hidden rounded-3xl  ${
              activeTab === tab.label
                ? "text-white  bg-[#3e3e3e] border border-[#444444]  "
                : "text-[#fff6] bg-[#181818]  "
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