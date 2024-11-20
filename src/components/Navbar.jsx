import React from 'react'
import profile from '../Assets/profile.svg'
import cart from '../Assets/cart.svg'
import logo from '../Assets/logo.svg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className=' bg-white fixed top-0 left-0 w-full z-20  backdrop-blur-md '>
     <div className='flex justify-between items-center px-[50px] py-[30px] '>

        <NavLink to='/' className='text-white'>
            <img src={logo} alt="logo" className='object-cover w-[50px] h-[50px]' />
        </NavLink>

        <div className='flex gap-[40px]'> 
          <NavLink to="/" >
          <p className='text-[#5F5F5F9E] font-[16px] cursor-pointer'>Home</p>
          
          </NavLink>
        <div className= 'text-[#5F5F5F9E] font-[16px] cursor-pointer'>Shop</div>
        <div className='text-[#5F5F5F9E] font-[16px] cursor-pointer'>About</div>
        <div className='text-[#5F5F5F9E] font-[16px] cursor-pointer'>Contact</div>
        </div>

<div className='flex gap-[30px]'>
    <NavLink to='/signUp'><button className=' bg-[#00AEEF] text-white  py-2 px-3 rounded-md'>Book Now</button>
    </NavLink>
    <NavLink to='/login' className='flex justify-center' >
    <img src={profile} alt="profile" className='cursor-pointer' />

    </NavLink>
    <img src={cart} alt="cart" className='cursor-pointer' />
     </div>

       
     </div>

    </nav>
  )
}

export default Navbar