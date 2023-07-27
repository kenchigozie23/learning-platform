import React from "react";
import Link from 'next/link'
import { HiFingerPrint, HiAtSymbol} from "react-icons/hi";

function Register() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-white md:w-[60%] w-96 p-3">
        <h2 className="text-[#613DC1] text-2xl font-semibold my-2">Register</h2>
        <form action="" method="post">
          {/* fullname */}
          <div className="flex flex-row ">
            <div className="mr-2 w-1/2">
              <label htmlFor="firstName" className=" text-sm">
                First name
              </label>
              <input type="text" name="" id="firstName" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm" />
            </div>
            <div className="w-1/2 mr-1 ">
              <label htmlFor="firstName" className=" text-sm ">
                Last name
              </label>
              <input type="text" name="" id="firstName" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm"/>
            </div>
          </div>
          <label htmlFor="firstName" className=" text-sm">
            Email
          </label>
          <input type="email" name="" id="email" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm"/>
          <label htmlFor="password" className=" text-sm">
            Password
          </label>
          <input type="password" name="" id="password" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm"/>
          <label htmlFor="password-confirm" className=" text-sm ">
            Confirm Password
          </label>
          <input type="password" name="" id="password-confirm" className="w-full h-9 border border-slate-300 text-sm pl-2 bg-transparent rounded-md outline-[#613DC1] shadow-sm mb-2"/>
          <input type="submit" value="Register" className=" h-9 w-full border-2 bg-[#613DC1] text-white rounded-md outline-2 outline-[#8875bb] hover:outline outline-offset-2 text-sm hover:bg-[#8875bb] transition duration-200 cursor-pointer" />
          <p className="my-3 text-sm">Already have an account? <Link href={"/login"} className=" text-[#613DC1]">Sign in</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
