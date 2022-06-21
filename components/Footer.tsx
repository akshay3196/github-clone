import React from 'react'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="text-gray-500 body-font">
  <div className="container px-2 py-2 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className=" hidden md:inline-flex md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
        <BsGithub className='h-8 w-8'/>
        <span className="ml-3 text-sm">© 2022 GitHub, Inc.</span>
      </a>
     
    </div>
    <div className="flex md:space-x-9">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
       
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">About</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Shop</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Contact GitHub</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Pricing</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
     
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">API</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Training</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Status</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Security</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Terms</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Privacy</a>
          </li>
          <li>
            <a className="text-gray-500 text-sm hover:text-gray-800">Docs</a>
          </li>
          
        </nav>
      </div>
    
    </div>
  </div>
  
</footer>
  )
}

export default Footer