import React from 'react'
import brush from '../../Assets/Brush1.svg'
const AdvancePolyCarboMaterial = () => {
  return (
    <div className='pl-[200px]'>
        <div className='flex justify-start items-start m-auto'>
            <h1 className='text-[70px] font-bold font-din  text-[#242424] max-w-[992px] w-full text-nowrap'>Advenced <span className='zooming-text text-[#00AEEF]'>
            <span>Poly</span>
      <span>Carbo</span>
      <span>Max</span>
                 </span> material</h1>
        </div>

        <div className='flex justify-between items-start mt-[20px] '>
        <div className='max-w-[440px] w-full'>
            <p className='text-[16px]  font-din text-[#242424]'>Material
            A better deShedding design made possible using an innovative new composite carbon fiber. 
            </p>
            <br/>
            <br/>
            <p className='text-[16px] font-din text-[#242424]'>
            This groind-breaking material is incredibly strong and curiously lightweight, enabling the innovative and patented FUR4 deShedding enges with eight SafetyNubs.
            </p>
            <br/>
  <p className='text-[16px]  font-din text-[#242424]'>
  The end result is a safer, gentler, and more effective deShedding experience for you and your pet.
  </p>

        </div>
        <div className='lg:-mt-[60px]'>
          <img src={brush} alt="item"  className='w-full h-full object-cover'/>
        </div>
        </div>
    </div>
  )
} 

export default AdvancePolyCarboMaterial