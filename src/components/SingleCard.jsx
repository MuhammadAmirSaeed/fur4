import React from 'react'
import brush from '../Assets/LHD-website.svg'

const SingleCard = () => {
  return (
    <div className='card bg-white rounded-3xl shadow-xl w-[300px] h-[450px] m-auto'>
        <div className='flex flex-col m-auto justify-center items-center'>
        <div>
            <img src={brush} alt="brush" />

        </div>
        <div  className='text-center mt-3'>
            <h2 className=' text-[20px] text-daryGrey'>deShedding Tool</h2>
            <p className='text-daryGrey'>for long hair dogs</p>
        </div>
        </div>
    </div>
  )
}

export default SingleCard