import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className=' h-[80px]  px-8 fixed  w-full py-5'>
      <div className='flex justify-between items-center w-full'>
        <header>
            <h2 className='font-semibold text-xl text-[#613DC1]'>Q-<span className='text-black'>B</span><span>ee</span></h2>
        </header>
        <nav>
          <ul className='flex gap-7'>
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
      
          <button className='border-2 px-9 py-[5px] bg-[#9A48D0] text-white font-semibold text-sm outline-none border-none rounded-md cursor-pointer'> 
              <Link href={"/Register"}>Register</Link>
          </button>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar