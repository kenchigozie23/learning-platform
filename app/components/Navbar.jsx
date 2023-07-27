'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineBars} from "react-icons/ai";
import {FaTimes} from "react-icons/fa";



function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <div className=' h-[80px]  fixed  w-full '>
      <div className='flex items-center w-full justify-between shadow-md py-4 px-6 md:shadow-none '>
        <header>
            <h2 className='font-semibold text-xl text-[#613DC1]'>Q-<span className='text-black'>B</span><span>ee</span></h2>
        </header>
        {/* Large Screen for device 
        
          AiOutlineBars
          FaTimes
        */}
        <nav>
          <ul className='md:flex gap-7 hidden'>
            <li>Home</li>
            <li>Courses</li>
            <li>Members</li>
            <li>About</li>
          </ul>
        </nav>
        <div className='flex gap-5'>
          <button className='border-2 p-3 outline-none border-none text-[#613DC1] font-medium'>
          <Link href={"/login"}>Sign in</Link>
            
          </button>
      
          <button className='border-2 px-9 py-[5px] bg-[#9A48D0] text-white font-semibold text-sm outline-none border-none rounded-md cursor-pointer hidden md:flex md:items-center md:justify-center'> 
              <Link href={"/Register"}>Register</Link>
          </button>
        
        </div>

        {/* handburger */}
        <div onClick={() => setNav(!nav)} className='md:hidden'>
          {nav ? <FaTimes size={24}/> : <AiOutlineBars size={25}/>}
        </div>
      </div>
      <ul className={nav ? "flex gap-7 flex-col justify-center items-center w-full h-screen bg-[#EAF2EF] text-3xl" : "hidden"}>
            <li>Home</li>
            <li>Courses</li>
            <li>Members</li>
            <li>About</li>
          </ul>
    </div>
  )
}

export default Navbar