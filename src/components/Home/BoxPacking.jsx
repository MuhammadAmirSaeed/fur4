import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';

import packing_box  from '../../Assets/Packing_BoxImage.svg'
const BoxPacking = () => {

  AOS.init({
    duration: 1000, 
    delay: 300,     
  }); 
 

  return (
    <div className=' flex flex-col justify-center items-center gap-[30px] '>
        <div>
            <h1 className='font-din  lg:text-[96px] md:text-[70px] font-bold'>Sturdy and convenient <span className=' text-[#00AEEF]'>
    <Typewriter
            words={['packaging']}
            loop={50}
            cursor
            cursorStyle=' '
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={3500}
          />
    
   </span> </h1>
        </div>
        

        <div className="w-full h-full max-w-[952px] max-h-[490px] ">
  <img src={packing_box} alt="packing_box" className="w-full h-full object-cover zooming-image " />
</div>

      

    </div>
  )
}

export default BoxPacking