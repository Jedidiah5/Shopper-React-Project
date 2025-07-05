import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'


function Card({all_products}) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(all_products);
  };

  const handleView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/details/${all_products.id}`;
  };

  return (
    <div className='mt-4 w-full relative group'>
      <div className='relative overflow-hidden rounded-lg'>
        <img 
          src={all_products.image} 
          alt={all_products.name} 
          className='h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        
        {/* Overlay with buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 sm:space-x-4">
          <button
            onClick={handleView}
            className="bg-white text-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm sm:text-base"
          >
            View
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-orange-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm sm:text-base"
          >
            Cart
          </button>
        </div>
      </div>
      
      <div className="mt-3 px-2">
        <p className='text-sm sm:text-md text-gray-500 font-medium'>{all_products.name}</p>
        <p className='text-xs sm:text-sm text-gray-400'>{all_products.category}</p>
        <div className='flex gap-2 mt-1'>
          <p className='text-sm sm:text-md text-gray-800 font-semibold'>${all_products.new_price}</p>
          <p className='text-xs sm:text-sm text-gray-400 line-through'>${all_products.old_price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

    // <div className="min-h-screen bg-gray-100">
    //   <div className="container mx-auto px-4 py-8">
    //     <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
    //       Vite + React + Tailwind CSS Template
    //     </h1>
    //     <div className="bg-white rounded-lg shadow-md p-6">
    //       <p className="text-gray-600">
    //         This is a starter template using Vite, React, and Tailwind CSS. Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> to get started!
    //       </p>
    //     </div>
    //   </div>
    // </div>