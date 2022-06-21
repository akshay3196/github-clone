import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Foryou = () => {
  return (

    <>
     <div className='bg-gray-800 rounded-lg mt-5 p-3' >
     
     <p className='flex justify-between items-center' > <span>Welcome to the new feed!</span> <span><AiOutlineClose/></span> </p>
     <p className='text-sm text-gray-400 mt-2'>
     We’re updating the cards and ranking all the time, so check back regularly. At first, you might need to follow some people or star some repositories to get started 🌱.
     </p>
     <button className='text-blue-400 mt-2' >Send feedback</button>

 </div>


 <div className='bg-gray-800 rounded-lg mt-5 p-3 flex flex-col space-y-3 justify-center items-center text-center '>
    <p className='text-2xl' >Explore GitHub</p>
    <p className='text-sm text-gray-400' >Star repositories and follow contributors to receive personalized suggestions.</p>
 </div>
    </>
   
  )
}

export default Foryou