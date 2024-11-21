import React from "react";
import logo from "../Assets/logo.svg";
import fb from "../Assets/Facebook.svg";
import youtube from "../Assets/YouTube.svg";
import gmail from "../Assets/Gmail.svg";
import location from "../Assets/LocationIcon.svg";
import insta from "../Assets/Instagram.svg";
const Footer = () => {
  return (
    <div>
      {/* First Section */}
      <div className="flex justify-between items-center px-[50px] py-[30px] ">
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="w-[50px] h-[50px] object-cover"
          />
        </div>
        <div className="flex gap-[25px] md:ml-[100px]  ">
          <div className=" cursor-pointer">
            <img src={gmail} alt="gmail" />
          </div>
          <div className=" cursor-pointer">
            <img src={fb} alt="facebook" />
          </div>
          <div className=" cursor-pointer">
            <img src={youtube} alt="youtube" />
          </div>
          <div className=" cursor-pointer">
            <img src={insta} alt="instagram" />
          </div>
        </div>
        <div className="flex gap-[20px] ">
          <img src={location} alt="location" />
          <div>
            <p className="text-[16px] text-[#4A4A4A] ">
              Find the nearest store
            </p>
          </div>
        </div>
      </div>
      {/* 2nd section Subscribe  */}
      <div className="my-[50px] flex flex-col justify-center items-center gap-[20px]">
        <div>
          <h2 className="text-[20px] font-[500] text-daryGrey font-roboto">
            Subscribe for our newsletter
          </h2>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[350px] h-[55px] rounded-[10px] p-[10px]  outline-none  flex  border-[2px] "
          />

          <button
            className="bg-customBlue text-[#fff] rounded-[8px] 
                             px-[65px] py-[8px] -ml-[30px] "
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* 3rd section */}

      <div className="flex justify-between items-start flex-wrap   px-[50px] py-[30px]">
        {/* 1st */}
        <div className="flex flex-col gap-[20px]">
          <div className="text-[20px] font-bold"> Account</div>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#4A4A4A] cursor-pointer">
              <li className="relative group">
                Manage Your Account
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Help
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Settings
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex flex-col gap-[20px]">
          <div className="text-[20px] font-bold">Shop</div>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#4A4A4A] cursor-pointer">
              <li className="relative group">
                Store
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                About
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Wallet
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Find a Store
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* 3rd */}
        <div className="flex flex-col gap-[20px]">
          <div className="text-[20px] font-bold"> For Business</div>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#4A4A4A] cursor-pointer">
              <li className="relative group">
                About
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Conventions
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* 4th */}
        <div className="flex flex-col gap-[20px]">
          <div className="text-[20px] font-bold"> Support</div>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#4A4A4A] cursor-pointer">
              <li className="relative group">
                Contact us
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                FAQ
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Online Services
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* 5th */}
        <div className="flex flex-col gap-[20px]">
          <div className="text-[20px] font-bold"> Orders</div>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#4A4A4A] cursor-pointer">
              <li className="relative group">
                Order Status
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Returns
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Product guide
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Shipping
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
        {/* 6th */}
        <div className="flex flex-col gap-[20px]">
          <div className="text-[20px] font-bold">Privacy & terms</div>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#4A4A4A] cursor-pointer">
              <li className="relative group">
                Terms & Conditions
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Privacy Policy
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Cookies Settings
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="relative group">
                Terms of Use
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-customBlue transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4h section */}
      <div className="flex justify-center items-center text-center text-[#5F5F5F9E]">
        Copyright © 2024 Flix Auto Transport |
        <br />
        Designed by Dfrnc
      </div>
    </div>
  );
};

export default Footer;
