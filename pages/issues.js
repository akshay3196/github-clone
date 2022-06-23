import React, { useState } from 'react'
import FullHeader from '../components/FullHeader'
import {BsSearch} from 'react-icons/bs'
import Header from '../components/Header'
import {FcDataConfiguration} from 'react-icons/fc'
import {TiTick} from 'react-icons/ti'
import {IoMdArrowDropdown} from 'react-icons/io'
import {AiOutlineClose,AiOutlineBulb} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {MdControlPointDuplicate} from 'react-icons/md'
import PullPageFooter from '../components/PullPageFooter'

const Issues = () => {
    const [tip, settip] = useState('Add no:assignee to see everything that’s not assigned.')
  return (
    <>
    {/* modal 1 */}
    <input type="checkbox" id="my-modal-6" className="modal-toggle  " />
        <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box text-white bg-black">
        <h3 className="font-bold text-lg flex items-center mb-3 ">Visibility</h3>
        <p className="p-3 text-xs text-gray-400 active:bg-gray-700 rounded-md "><label htmlFor="my-modal-6" >Private repositories only</label></p>
        <p className="p-3 text-xs text-gray-400 active:bg-gray-700 rounded-md "><label htmlFor="my-modal-6" >Public repositories only</label></p>
        </div>
        </div>

        {/* modal 2 */}

        <input type="checkbox" id="my-modal-7" className="modal-toggle  " />
        <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box text-white bg-black">
        <h3 className="font-bold text-lg">Organization</h3>
        <div className='flex flex-col space-y-4  '>
                      <div className='w-full flex justify-between'><span>Filter by organization or owner</span></div>
                      <div className='w-full' ><input type="text" placeholder='Filter organizations' className='w-full p-2 border rounded-lg bg-inherit border-gray-800  outline-none' /></div>
                      <div className='flex justify-center items-center space-x-3 hover:bg-gray-800 cursor-pointer p-3 rounded-md transition-all duration-300 ' ><span className='border p-1 rounded-full border-purple-500 ' ><BiUser/></span><span>User123456</span></div>
                  </div>
        <div className="modal-action text-white ">
            <label htmlFor="my-modal-7" className="btn">Done</label>
        </div>
        </div>
        </div>

        {/* modal 3 */}

        <input type="checkbox" id="my-modal-8" className="modal-toggle  " />
        <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box text-white bg-black">
        <h3 className="font-bold text-lg">Sort</h3>
        <p className="py-4">Sort by:</p>
        <ul  className="dropdown-content menu  w-full text-gray-300 text-xs  bg-gray-900 rounded-md border border-gray-800 ">
                <li className='px-5 py-1 ' > <div className='flex justify-between items-center' > <span>Sort by</span> </div> </li>
                <li className=' w-full  '><p className='space-x-5' ><label htmlFor="my-modal-8" className="btn   w-full bg-black py-0 "> Newest</label> </p></li>
                <li className=' w-full  '><p className='space-x-5' ><label htmlFor="my-modal-8" className="btn w-full bg-black py-0 ">Oldest</label></p></li>
                <li className=' w-full  '><p className='space-x-5' ><label htmlFor="my-modal-8" className="btn w-full bg-black py-0 ">Most commented</label></p></li>
                <li className=' w-full  '><p className='space-x-5' ><label htmlFor="my-modal-8" className="btn w-full bg-black py-0 ">Least commented</label></p></li>
                <li className=' w-full  '><p className='space-x-5' ><label htmlFor="my-modal-8" className="btn w-full bg-black py-0 ">Recently updated</label></p></li>
                <li className=' w-full  '><p className='space-x-5' ><label htmlFor="my-modal-8" className="btn w-full bg-black py-0 ">Last recently updated</label> </p></li>
              </ul>
       
        </div>
        </div>



    <FullHeader/>
   
    <div className='bg-black text-white   md:h-screen h-auto bg-cover ' >
    <Header/> 
        <div className=' w-full  p-2 md:p-0 md:w-3/4 mx-auto flex  justify-between items-center  ' >
            <div className='flex mt-2  flex-col lg:flex-row items-center justify-around w-full space-y-4 lg:space-y-0 lg:space-x-16 ' >
            <div className=' flex items-center ' >
                <button className='px-3 py-1 border border-gray-700 rounded-l-md focus:bg-blue-500 ' onClick={()=>settip('Add no:assignee to see everything that’s not assigned.')} >Created</button>
                <button className='px-3 py-1 border border-gray-700 focus:bg-blue-500' onClick={()=>settip('Notify someone on an issue with a mention, like: @akshay3196.')} >Assigned</button>
                <button className='px-3 py-1 border border-gray-700 focus:bg-blue-500' onClick={()=>settip('Notify someone on an issue with a mention, like: @akshay3196.')}>Mentioned</button>
                </div>

            <div className='flex   border  border-gray-700 rounded-md items-center  px-3 py-1 space-x-3 w-full '>
                <BsSearch className='' />
                <input type="text" className='w-full outline-none bg-black placeholder:text-gray-400' placeholder='is:open is:pr author:akshay3196 archived:false '  />
            </div>
            </div>
        </div>

<div className='w-full md:w-3/4  mx-auto flex flex-col border border-gray-600 rounded-md mt-2 p-2 md:p-0' >


<div className=' w-full flex flex-col md:flex-row justify-between' >
            <div className='flex'>
              <button className='p-3 text-gray-400 focus:text-gray-200  flex justify-around items-center ' > <FcDataConfiguration/> Open</button>
              <button className='p-3 text-gray-400 focus:text-gray-200 flex justify-around items-center '> <TiTick/> Closed</button>
            </div>

            <hr className='border border-gray-700' />

           <div className=' hidden md:flex'>           
           <div className="dropdown  ">
              <label tabIndex="0" className="btn m-1 bg-black border-none text-gray-400 focus:text-gray-200 "> Visibility <IoMdArrowDropdown/></label>
              <ul tabIndex="0" className="dropdown-content menu   text-gray-300 text-xs  w-72 bg-gray-900 rounded-md border border-gray-800 ">
                <li className='px-5 py-1 ' > <div className='flex justify-between items-center' > <span>Repository visibility</span> </div> </li>
                <li className='pl-14 py-2 hover:bg-gray-800' ><p>Private repositories only</p></li>
                <li className='pl-14 py-2 hover:bg-gray-800'><p>Public repositories only</p></li>
              </ul>
          </div>  
            
              <div className="dropdown">
                  <label tabIndex="0" className="btn m-1 bg-black border-none text-gray-400 focus:text-gray-200"> Organisazion <IoMdArrowDropdown/></label>
                  <div tabIndex="0" className="dropdown-content card card-compact w-64 p-4 shadow bg-gray-900 text-primary-content  rounded-md border border-gray-800 text-xs ">
                     <div className='flex flex-col space-y-4  '>
                      <div className='w-full flex justify-between'><span>Filter by organization or owner</span></div>
                      <div className='w-full' ><input type="text" placeholder='Filter organizations' className='w-full p-2 border rounded-lg bg-inherit border-gray-800  outline-none' /></div>
                      <div className='flex justify-center items-center space-x-3 hover:bg-gray-800 cursor-pointer p-3 rounded-md transition-all duration-300 ' ><span className='border p-1 rounded-full border-purple-500 ' ><BiUser/></span><span>User123456</span></div>
                  </div>
                  </div>
              </div>

              
            

              <div className="dropdown  ">
              <label tabIndex="0" className="btn m-1 bg-black border-none text-gray-400 focus:text-gray-200 ">Sort  <IoMdArrowDropdown/></label>
              <ul tabIndex="0" className="dropdown-content menu   text-gray-300 text-xs  w-72 bg-gray-900 rounded-md border border-gray-800 ">
                <li className='px-5 py-1 ' > <div className='flex justify-between items-center' > <span>Sort by</span> </div> </li>
                <li className='pl-7 py-2  hover:bg-gray-800'><p className='space-x-5' > <TiTick/> Newest</p></li>
                <li className='pl-7 py-2  hover:bg-gray-800'><p className='space-x-5' ><TiTick/>Oldest</p></li>
                <li className='pl-7 py-2  hover:bg-gray-800'><p className='space-x-5' ><TiTick/>Most commented</p></li>
                <li className='pl-7 py-2  hover:bg-gray-800'><p className='space-x-5' ><TiTick/>Least commented</p></li>
                <li className='pl-7 py-2  hover:bg-gray-800'><p className='space-x-5' ><TiTick/>Recently updated</p></li>
                <li className='pl-7 py-2  hover:bg-gray-800'><p className='space-x-5' > <TiTick/>Last recently updated</p></li>
              </ul>
          </div>  

      

          

           </div>

          {/* htmlFor mobile view */}
           <div className='flex justify-evenly items-center md:hidden '>
            {/* visbility */}
          
            <label htmlFor="my-modal-6" className="btn modal-button text-xs bg-inherit border-none active:bg-black focus:bg-black text-gray-400 ">open modal</label>
            <label htmlFor="my-modal-7" className="btn modal-button text-xs bg-inherit border-none active:bg-black focus:bg-black text-gray-400 ">organization</label>
            <label htmlFor="my-modal-8" className="btn modal-button text-xs bg-inherit border-none active:bg-black focus:bg-black text-gray-400 ">sort</label>



            {/* org */}
            {/* sort */}
           </div>

           

           
           
          </div>






          <hr className='border border-gray-700' />
          <div className='h-96 p-4 flex flex-col justify-center items-center text-center space-y-6 ' >
            <div>
              <MdControlPointDuplicate className='h-10 w-10' />
            </div>
            <p>No results matched your search.</p>
            <p>You could search <span className='text-blue-600 cursor-pointer'>all of GitHub</span> or try an <span className='text-blue-600 cursor-pointer'>advanced search.</span></p>
          </div>







</div>


<p className='text-center p-4 text-sm text-gray-500 flex justify-center items-center space-x-5 ' > <AiOutlineBulb/> <span>ProTip! {tip}</span> </p>
        
<div className='md:w-3/4 w-full mx-auto'>
  <PullPageFooter />
</div>

    </div>
    </>
  )
}

export default Issues