import React from 'react'
import SingleCard from '../SingleCard'

const Cards = () => {
  return (
    <div className='relative'>
       {/* <div className="fixed top-0 left-0 w-full h-[40vh] flex justify-center items-center opacity-70 pointer-events-none z-10">
        <p className="text-gray-300 text-[96px] font-bold font-din">
          deShedding Tool
        </p>
      </div> */}
    <div className='flex flex-wrap gap-[2px] pt-[40vh] relative z-10'>
       <SingleCard/>
       <SingleCard/>
       <SingleCard/>
       <SingleCard/>
    </div>
    <div className='flex justify-center items-center mt-10 '>
        <button className='bg-customBlue py-3 px-10 text-white rounded-md'>See all Products</button>
    </div>
    </div>
  )
}

export default Cards
