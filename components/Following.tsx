import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Folo from './Folo'
import Footer from './Footer'
import Foryou from './Foryou'

const Following = () => {
    const [select, setselect] = useState('following')
  return (
    <div className='p-3 w-full md:w-2/3 xl:w-2/4 mt-8 md:mt-0  '>
        <div className='space-x-6  '>
            <span className={` text-sm pb-3 cursor-pointer transition-all duration-300 ${select==='following' ? 'border-orange-500 text-orange-500 border-b-2' : ''  } `} onClick={()=> setselect('following') } >Following</span>
            <span className={`text-sm pb-3 cursor-pointer transition-all duration-300 ${select==='following' ? '' : 'border-orange-500 text-orange-500 border-b-2 '  } `} onClick={()=> setselect('foryou') } >For you</span>
        </div>

{
    select==='following' &&  <Folo />
}

      {
        select==='foryou' &&  <Foryou/>
      } 

      <Footer/>

       
    </div>
  )
}

export default Following