import React from 'react'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'

const RecentRepos = () => {
  return (
    <div className='w-full p-3  md:w-1/3 xl:w-1/4  ' >
        <div className='flex justify-between items-center' ><span className='text-sm font-bold text-gray-400'>Recent Repositories</span>
        <button className='bg-green-700 rounded-lg px-3 py-1  items-center space-x-2 hidden md:flex '><span className='text-white text-sm'>NEW</span> <BsFillJournalBookmarkFill/> </button>
        </div>

        <div className='mt-6 md:mt-2  ' >
        <input type="text" className='bg-gray-800 rounded-lg placeholder:text-gray-400 text-xs p-2 w-full focus:outline-none mb-2 ' placeholder='Find a repository..' />
        <div className='bg-gray-800 md:bg-black rounded-lg border-b-2 border-gray-500 pb-3 '>
        <p className='p-2 flex items-center text-xs '><FaUser className='mr-4' /><span>AkshayDeosthale/bored-monkey-clone</span></p>
        <p className='p-2 flex items-center text-xs '><FaUser className='mr-4' /><span>akshay3196/testing-project</span></p>
        <p className='p-2 flex items-center text-xs '><FaUser className='mr-4' /><span>akshay3196/audio-component</span></p>
        <p className='p-2 flex items-center text-xs '><FaUser className='mr-4' /><span>thinkwik/Elitenannies-Web</span></p>
        <p className='p-2 flex items-center text-xs '><FaUser className='mr-4' /><span>veegs-shop/Veegs-Admin</span></p>
        <p className='p-2 flex items-center text-xs '><FaUser className='mr-4' /><span>veegs-shop/Veegs-NextJS</span></p>
        <p className='p-2 flex items-center text-xs '><FaUser className='mr-4' /><span>thinkwik/Live-Match-Tracker-Admin</span></p>
        <hr className='border border-gray-600 md:hidden '/>
        <div className='bg-gray-800 p-5 md:bg-black ' >
            <span className='text-xs text-gray-400' >Show more</span>
        </div>
        </div>

        <div className='mt-7' >
            <p>Recent activity</p>
            <div className='p-2 bg-gray-800 md:bg-black ' >
            <span className='text-xs text-gray-400' >When you take actions across GitHub, we’ll provide links to that activity here.</span>
            </div>
        </div>
       
       
        </div>
    </div>
  )
}

export default RecentRepos