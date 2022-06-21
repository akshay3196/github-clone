import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import {BsBell,BsSlash} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import {IoMdExit} from 'react-icons/io'

const Header = () => {

const [dropDown, setDropDown] = useState(false)


  return (
    <div className=''>
        <div className='flex justify-between items-center p-4  md:hidden '>
            <FiMenu className='text-white h-7 w-7' onClick={()=> setDropDown(!dropDown) } />
        <AiFillGithub className='text-white h-9 w-9' />
       <BsBell className='text-white h-5 w-5' />
        </div>
        {
            dropDown && <div className='p-3 md:hidden '>
                <div className='border border-gray-600 px-3 rounded-lg  flex justify-between items-center mb-4'>
                <input type="text" className='bg-black placeholder:text-gray-300 text-xs p-2 w-full focus:outline-none ' placeholder='Saerch or jump to...' />
                <BsSlash className='border border-gray-600 rounded-md h-5 w-5' />
                </div>

                <div className='text-sm'>
                <hr className='border border-gray-600'/>
                    <p className='p-2'>Dashboard</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2'>Pull requests</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2'>Issues</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2'>Marketplace</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2'>Explore</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2'>Codespaces</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2'>Sponsors</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2'>Settings</p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2 flex items-center'><FaUser className='mr-4' /><span>AkshayDeosthale</span></p>
                    <hr className='border border-gray-600'/>
                    <p className='p-2 flex items-center'><IoMdExit className='mr-4'/><span>Sign out</span></p>
                    <hr className='border border-gray-600'/>
                </div>
               
            </div>
        }
       
    </div>
  )
}

export default Header