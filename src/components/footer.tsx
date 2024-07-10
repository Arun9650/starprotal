import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full bg-black'>
         <footer className="max-w-[1200px]  mx-auto  py-8 px-4">
        <div className="flex  justify-between gap-8">
            <div>
                <h2 className="text-3xl font-bold mb-2">intract.</h2>
                <p className='text-sm w-72'>We are your personal guide for exploring web3 projects & earning 100x rewards</p>
            </div>
            <div className='grid-cols-1 md:grid-cols-5'>
                <h3 className="text-base font-semibold mb-2">INTRACT</h3>
                <ul>
                    <li><a href="#" className="hover:underline text-[15px]">Explore Quests</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Communities</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Alpha Hub</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-base font-semibold mb-2">EARN</h3>
                <ul>
                    <li><a href="#" className="hover:underline text-[15px]">Refer & Earn</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Leaderboard</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Achievements</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-base font-semibold mb-2">ABOUT</h3>
                <ul>
                    <li><a href="#" className="hover:underline text-[15px]">Product Roadmap</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Affiliate Program</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Sign up Program</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Growth Community</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Blogs</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-base font-semibold mb-2">SUPPORT</h3>
                <ul>
                    <li><a href="#" className="hover:underline text-[15px]">Help Center</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Create your quest</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Terms of Service</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline text-[15px]">Community Guidelines</a></li>
                </ul>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-sm">
                <span className="font-semibold">Disclaimer:</span> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
            </p>
        </div>
        <div className="mt-4">
            <p className="text-sm">CREATED BY <a href="#" className="font-semibold hover:underline">INTRACT</a></p>
        </div>
        {/* <div className="mt-4 flex space-x-4">
            <a href="#"><Image src="twitter-icon.png" alt="Twitter" className="w-6 h-6"/></a>
            <a href="#"><Image src="telegram-icon.png" alt="Telegram" className="w-6 h-6"/></a>
            <a href="#"><Image src="spotify-icon.png" alt="Spotify" className="w-6 h-6"/></a>
            <a href="#"><Image src="other-icon.png" alt="Other" className="w-6 h-6"/></a>
        </div> */}
    </footer>
    </div>
  )
}

export default Footer