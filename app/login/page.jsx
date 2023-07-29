// 'use client'
// import React, { useState } from "react";
// import Link from 'next/link'
// import Image from "next/image";
// import { HiFingerPrint, HiAtSymbol} from "react-icons/hi";
// import Navbar from "../components/Navbar";
// import {BsFillPersonFill} from "react-icons/bs"
import { SignIn } from "@clerk/nextjs";


function Login() {
  // const[showPassword, setShowPassword] = useState(false)
  return (
    
    <div className="w-full h-screen flex justify-center items-center">
      <SignIn/>
      {/* <div className="bg-white md:w-[50%] p-3 w-96">
        <h2 className="text-[#613DC1] text-2xl font-semibold my-2 text-center flex justify-center items-center gap-1">Login
         <BsFillPersonFill size={30}/>
        </h2>
          <div>
          </div>
        <form>
          <label htmlFor="firstName" className=" text-sm">
            Email
          </label>
          <div className="flex relative">
          <input type="email"  id="email" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm " />
          <span className="absolute  right-4 text-slate-300 top-2 cursor-pointer">
            <HiAtSymbol size={20}/>
          </span>
          </div>
          
          <label htmlFor="password" className=" text-sm">
            Password
          </label>
          <div className="flex relative">
            <input type={showPassword ? "text" : "password"} id="password" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm mb-3"/>
            <span className="absolute  right-4 text-slate-300 top-2 cursor-pointer hover:text-[#613DC1]" onClick={() => setShowPassword(!showPassword)}>
                <HiFingerPrint size={20}/>
            </span>
          </div>
         
          <input type="submit" value="Register" className=" h-12 w-full border-2 bg-[#613DC1] text-white rounded-md text-sm hover:bg-[#8875bb] transition duration-200 cursor-pointer mb-3" />
          <button  className=" h-12 w-full border-2 bg-gray-50 text-black rounded-md text-sm hover:bg-gray-200 transition duration-200 cursor-pointer mb-3 flex justify-center items-center gap-2" >Sign in with Google <Image src={"/../public/google.png"} width={20} height={20} alt="img"/></button>
          <button  className=" h-12 w-full border-2 bg-gray-50 text-black rounded-md text-sm hover:bg-gray-200 transition duration-200 cursor-pointer mb-3 flex justify-center items-center gap-2">Sign in with Github <Image src={"/../public/github.png"} width={20} height={20} alt="img"/></button>
          <p className="my-3 text-sm">Don't have an account? <Link href={"/Register"} className=" text-[#613DC1]">Sign up</Link></p>
        </form>
      </div> */}
    </div>

  );
}

export default Login;
