
import React from 'react'
import FullHeader from '../components/FullHeader'
import {BsSearch} from 'react-icons/bs'
import Header from '../components/Header'
import {FcDataConfiguration} from 'react-icons/fc'
import {TiTick} from 'react-icons/ti'
import {IoMdArrowDropdown} from 'react-icons/io'

const PullRequest = () => {
  return (
    <>
    <FullHeader/>
   
    <div className='bg-black text-white w-full   md:h-screen h-auto bg-cover ' >
    <Header/> 
        <div className=' w-full p-2 md:p-0 md:w-3/4 mx-auto flex justify-between items-center ' >
            <div className='flex flex-col lg:flex-row items-center justify-around w-full space-y-4 lg:space-y-0 lg:space-x-16 ' >
            <div className=' flex items-center ' >
                <button className='px-3 py-1 border border-gray-700 rounded-l-md ' >Created</button>
                <button className='px-3 py-1 border border-gray-700'>Assigned</button>
                <button className='px-3 py-1 border border-gray-700'>Mentioned</button>
                <button className='px-3 py-1 border border-gray-700 rounded-r-md  items-center space-x-1 hidden md:inline-flex '> <span>Review</span> <span>requests</span> </button>
            </div>

            <div className='flex   border  border-gray-700 rounded-md items-center  px-3 py-1 space-x-3 w-full '>
                <BsSearch className='' />
                <input type="text" className='w-full outline-none bg-black placeholder:text-gray-400' placeholder='is:open is:pr author:akshay3196 archived:false '  />
            </div>
            </div>
        </div>

        <div className=' w-full mt-5 p-2 md:p-0 md:w-3/4 mx-auto flex' >
          <div className=' w-full flex justify-between' >
            <div className='flex'>
              <div className='p-3 text-gray-200 flex justify-around items-center ' > <FcDataConfiguration/> Open</div>
              <div className='p-3 text-gray-400 flex justify-around items-center '> <TiTick/> Closed</div>
            </div>

           <div className='flex'>
           
            
           <div class="dropdown  ">
              <label tabindex="0" class="btn m-1 bg-black border-none text-gray-400 "> Visibility <IoMdArrowDropdown/></label>
              <ul tabindex="0" class="dropdown-content menu  bg-black text-gray-300 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
          </div>
            
            
            
            
            
              
             
                
              <div class="dropdown">
                  <label tabindex="0" class="btn m-1 bg-black border-none text-gray-400 "> Organisazion <IoMdArrowDropdown/></label>
                  <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                     <div class="card-body">
                        <h3 class="card-title">Card title!</h3>
                        <p>you can use any element as a dropdown.</p>
                      </div>
                  </div>
              </div>

              
              <div className='p-3 text-gray-400 flex justify-around items-center'>Sort <IoMdArrowDropdown/></div>
           </div>
           
          </div>
        </div>


    </div>
    </>
  )
}

export default PullRequest