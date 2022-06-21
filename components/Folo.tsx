import React from 'react'
import { AiOutlineBulb } from 'react-icons/ai'
import { BsFillRssFill } from 'react-icons/bs'


const Folo = () => {
  return (
    <>
     <div className='bg-gray-800 rounded-lg mt-5 p-3' >
    <p className='text-gray-300 text-sm' >Introduce yourself</p>
    <p className='text-gray-300 text-sm'>The easiest way to introduce yourself on GitHub is by creating a README in a repository about you! You can start here:</p>
            
            <div className='border rounded-lg border-gray-500 p-2 mt-3'>
                
                <div className='flex justify-center items-center p-4 text-gray-400' >akshay3196/README.md</div>
                <hr className='border border-gray-600  '/>
                <p className='text-sm p-1' > 👋 Hi, I’m @akshay3196</p>
                <p className='text-sm p-1' > 👀 I’m interested in ...</p>
                <p className='text-sm p-1' > 🌱 I’m currently learning ...</p>
                <p className='text-sm p-1' > 💞️ I’m looking to collaborate on ...</p>
                <p className='text-sm p-1' > 📫 How to reach me ...</p>
    
            </div>
            <div className='flex justify-end items-center space-x-3 mt-3'>
                <button className='text-sm text-blue-600' >Dismiss this</button>
                <button className='text-sm text-white bg-green-500 p-2 rounded-lg'>Continue</button>
            </div>
            </div>




    <div  className='bg-gray-800 rounded-lg mt-5 p-5'>
        <p className='text-lg md:text-xl '>Discover interesting projects and people to populate your personal news feed.</p>
        <p className='text-gray-300 mt-3'>Your news feed helps you keep up with recent activity on repositories you watch or star and people you follow.</p>
        <button className='mt-3 px-3 py-1 text-blue-500 bg-gray-900 rounded-lg' >Explore GitHub</button>
    </div>

    <p className='mt-5 text-gray-400 flex text-sm  ' ><AiOutlineBulb className='h-5 w-5 mr-3' /> ProTip! The feed shows you events from people you follow and repositories you watch or star. </p>
    <p className='mt-5 text-gray-400 flex text-sm  ' ><BsFillRssFill className='h-5 w-5 mr-3' /> Subscribe to your news feed </p>

    </>
   
  )
}

export default Folo