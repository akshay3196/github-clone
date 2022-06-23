import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

const PullPageFooter = () => {
  return (
    <div className='w-full space-y-5 md:space-y-0 md:flex md:flex-row flex flex-col-reverse  md:items-center md:justify-evenly' >
           
<p className='flex items-center space-x-3  justify-center my-4'><span  ><AiFillGithub className='h-7 w-7 text-gray-500 '/></span><span className='text-xs text-gray-500 ' >© 2022 GitHub, Inc.</span></p>
          
          <p className='flex justify-evenly items-center space-x-5' >
          <span className='text-blue-500  text-xs ' >Terms</span> 
           <span className='text-blue-500  text-xs ' >Privacy</span>
           <span className='text-blue-500  text-xs ' >Security</span>
           <span className='text-blue-500  text-xs ' >Status</span>
           <span className='text-blue-500  text-xs ' >Docs</span>
            </p> 
            <p className='flex justify-evenly items-center   space-x-5'>
            <span className='text-blue-500  text-xs ' >Contact Github</span>
           <span className='text-blue-500  text-xs ' >Pricing</span>
           <span className='text-blue-500  text-xs ' >API</span>
           <span className='text-blue-500  text-xs ' >Training</span>
           <span className='text-blue-500  text-xs ' >Blog</span> 
           <span className='text-blue-500  text-xs ' >About</span>
            </p>
           
    </div>
  )
}

export default PullPageFooter