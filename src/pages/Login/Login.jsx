import React from "react";
import fb from "../../Assets/fb-login.svg";
import google from "../../Assets/Google.svg";
const Login = () => {
  return (
    <div className=" container justify-center items-center ">
      <div className="min-h-full">
        <div className="flex justify-center items-center ">
          <h1 className="font-din text-[70px] font-bold">
            Sign in for faster checkout
          </h1>
        </div>
        <div className="flex justify-center items-center mt-5">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="pl-[40px] border  outline-none w-full max-w-[310px] max-h-[49px] py-3 rounded-md"
          />
          <button className="bg-[#00AEEF] text-white py-3 px-10 rounded-md -ml-[10px]">
            Login
          </button>
        </div>

        <div className="flex justify-center items-center mt-[70px] ">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 leading-tight"
          />
          <label for="rememberMe" className="text-sm text-[#242424]">
            Remember me
          </label>
        </div>

        <div className="flex flex-col justify-center items-center mt-[40px] gap-4">
          <p className="text-[#242424] text-sm">Login with:</p>
          <div className="flex gap-4  ">
            <img src={google} alt=" google" />
            <img src={fb} alt="facebook" />
          </div>
        </div>

        
        <div className="flex justify-start items-center flex-col mt-[40px] gap-1" >
            <p className="text-sm text-[#242424]">Rememder me</p>
            <p className="text-sm text-[#00AEEF]">Forgot password?</p>
        </div>
        <div className="flex justify-center items-center mt-[30px]">
            <p> Are you first here?  <span className="text-[#00AEEF] cursor-pointer"> Create yours now.</span></p>
        </div>

      </div>
    </div>
  );
};

export default Login;
