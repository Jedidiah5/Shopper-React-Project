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

  return (
    <div>
      <Link to={`/details/${all_products.id}`}>
        <div className='mt-4 lg:w-[325px] hover:scale-105 transition-transform duration-300 relative group'>
          <img src={all_products.image} alt="" className='h-[450px] w-72 mt-4 lg:w-[325px]'></img>
          <p className='text-md text-gray-500'>{all_products.name}</p>
          <p className='text-md text-gray-500'>{all_products.category}</p>
          <div className='flex gap-2'>
            <p className='text-md text-gray-500'>${all_products.new_price}</p>
            <p className='text-md text-gray-500 line-through'>${all_products.old_price}</p>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      </Link>
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