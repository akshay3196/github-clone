import React from 'react'
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai'
import ChangeSteps from './ChangeSteps'

const RightSide = () => {
  return (
    <div className='p-4 w-1/4 hidden xl:inline-block'>
        <div className='border border-gray-600 p-4 rounded-md space-y-3 ' >
            <div className='flex justify-between items-center'>
                <AiFillGithub className='h-6 w-6'/> <AiOutlineClose/>
            </div>
            <p className='text-sm font-bold' >Our response to the war in Ukraine</p>
            <p className='text-xs ' >GitHub is united with the people of Ukraine and the international community.</p>
            <button className='text-blue-500 text-xs ' >Read more</button>
        </div>

        <div>
            <ChangeSteps/>
        </div>
    </div>
  )
}

export default RightSide