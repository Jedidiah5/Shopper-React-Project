import React from 'react'
import { useParams } from 'react-router-dom'
import { all_products } from '../data/products'

function Product_details() {
  const { id } = useParams();
  const product = all_products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <h1 className="font-bold text-xl text-orange-500 mt-4">{product.name}</h1>
            <h1 className="font-bold mt-2">Available Size: </h1>
            <div className="flex gap-3 mt-2">
              <div className="bg-black text-orange-500 px-3 py-2 rounded-full w-10 h-10 text-center flex items-center justify-center">XL</div>
              <div className="bg-black text-orange-500 px-3 py-2 rounded-full w-10 h-10 text-center flex items-center justify-center">L</div>
              <div className="bg-black text-orange-500 px-3 py-2 rounded-full w-10 h-10 text-center flex items-center justify-center">M</div>
              <div className="bg-black text-orange-500 px-3 py-2 rounded-full w-10 h-10 text-center flex items-center justify-center">SM</div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">Category: {product.category}</p>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold text-orange-500">${product.new_price}</p>
              <p className="text-xl text-gray-400 line-through">${product.old_price}</p>
            </div>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex officiis vel 
              suscipit perspiciatis temporibus ab dolores, nemo omnis explicabo laboriosam
              minus corporis commodi exercitationem aliquid quis culpa nihil delectus corrupti 
              ea cumque? Distinctio, aperiam corporis veritatis atque voluptatum pariatur saepe 
              temporibus numquam, explicabo at minima enim excepturi nobis magnam.
            </p>
            <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product_details
