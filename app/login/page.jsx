import React from "react";
import Link from 'next/link'

function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-white w-90 p-3">
        <h2 className="text-[#613DC1] text-2xl font-semibold my-2">Login</h2>
        <form action="" method="post">
          {/* fullname */}
          <label htmlFor="firstName" className=" text-sm">
            Email
          </label>
          <input type="email" name="" id="email" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm"/>
          <label htmlFor="password" className=" text-sm">
            Password
          </label>
          <input type="password" name="" id="password" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm mb-3"/>
          <input type="submit" value="Register" className=" h-12 w-full border-2 bg-[#613DC1] text-white rounded-md text-sm hover:bg-[#8875bb] transition duration-200 cursor-pointer mb-3" />
          <button  className=" h-12 w-full border-2 bg-gray-50 text-black rounded-md text-sm hover:bg-gray-200 transition duration-200 cursor-pointer mb-3" >Sign in with Google</button>
          <button  className=" h-12 w-full border-2 bg-gray-50 text-black rounded-md text-sm hover:bg-gray-200 transition duration-200 cursor-pointer mb-3" >Sign in with Github</button>
          <p className="my-3 text-sm">Don't have an account? <Link href={"/Register"} className=" text-[#613DC1]">Sign up</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
