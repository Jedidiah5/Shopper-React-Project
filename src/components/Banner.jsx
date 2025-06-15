import React from 'react'
import lady from './ladyimg.png'

function Banner() {
  return (
    <div>
       <div className='bg-fuchsia-700/10 grid grid-cols-2 p-10 py-20'>
        <div className='p-3 '>
          <p className='text-sm py-3'>NEW ARRIVALS TODAY</p>
          <h1 className='text-3xl  md:text-7xl mb-7 lg:text-8xl '>
            New👋 <br />
            collections <br />
            for everyone
          </h1>
          <button className='bg-orange-600 text-white text-sm md: text-lg py-2 px-4 rounded-3xl lg:mt-5
          '>Latest Collection -</button>
        </div>

        <div className='hidden md:flex justify-center items-center'>
          <img className='max-h-[500px] object-contain' src={lady} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Banner
