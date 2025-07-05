import React from 'react'
import lady from './ladyimg.png'

function Banner() {
  return (
    <div>
       <div className='bg-fuchsia-700/10 grid grid-cols-1 md:grid-cols-2 p-4 sm:p-6 md:p-10 py-12 md:py-20'>
        <div className='p-3 text-center md:text-left'>
          <p className='text-xs sm:text-sm py-2 md:py-3 text-gray-600'>NEW ARRIVALS TODAY</p>
          <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-7 leading-tight'>
            New👋 <br />
            collections <br />
            for everyone
          </h1>
          <button className='bg-orange-600 text-white text-sm sm:text-base md:text-lg py-2 px-4 sm:px-6 rounded-3xl hover:bg-orange-700 transition-colors'>
            Latest Collection →
          </button>
        </div>

        <div className='hidden md:flex justify-center items-center'>
          <img className='max-h-[400px] lg:max-h-[500px] object-contain' src={lady} alt="Fashion model" />
        </div>
       </div>
    </div>
  )
}

export default Banner
