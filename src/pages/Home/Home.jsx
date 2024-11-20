import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import AdvancePolyCarboMaterial from '../../components/Home/AdvancePolyCarboMaterial'
import BoxPacking from '../../components/Home/BoxPacking'
import logo from '../../Assets/logo.svg'
const Home = () => {
  return (
    <div>

<div className="items-center flex justify-center bouncing-image"  >
      <img src={logo} alt="logo" className="object-cover w-[75px] h-[70px]" />
    </div>
    


        {/* hero section */}
 <HeroSection/> 


   

    {/* Packing section */}
    <AdvancePolyCarboMaterial/>


    <br/>
    <br/>
    <div>
      <BoxPacking/>
    </div>

    </div>
  )
}

export default Home