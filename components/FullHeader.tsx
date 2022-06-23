import Link from 'next/link'
import React from 'react'
import { AiFillGithub,AiOutlineBell,AiOutlinePlus,AiOutlineArrowDown ,AiOutlineUser} from 'react-icons/ai'
import { BsSlash } from 'react-icons/bs'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const FullHeader = () => {
  return (
    <div className='w-full  items-center bg-black p-3 text-white hidden md:inline-flex ' >
      <div className='w-1/4 flex justify-center items-center px-4 ' >
      <AiFillGithub className='text-white h-9 w-9' />
      <input type="text" className='bg-black border ml-3 rounded-md border-gray-600 placeholder:text-gray-300 text-xs p-2 w-full focus:outline-none ' placeholder='Saerch or jump to...' />
      </div>

      <div className='w-2/4 flex items-center justify-start space-x-5 px-4 text-sm font-bold text-white ' >
        <span>  <Link href='/pulls' >Pull Request</Link></span>
        <span><Link href='/issues' >Issues</Link></span>
        <span>Marketplace</span>
        <span>Explore</span>
      </div>
      <div className='w-1/4 flex justify-end items-center space-x-4  ' >
<AiOutlineBell className='h-5 w-5' />
<div className='flex items-center border p-1 rounded-md ' >
<select name="+" id="plus" className='bg-black text-xs outline-none' >
  <option  value="new repository">new repository</option>
  <option value="new repository">import repository</option>
  <option value="new repository">new gist</option>
  <option value="new repository">new organization</option>
  <option value="new repository">new project</option>
</select>

</div>
<AiOutlineUser className='hover:scale-150' />
      </div>
    </div>
  )
}

export default FullHeader
