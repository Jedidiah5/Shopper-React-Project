import React from 'react'
import { useParams } from 'react-router-dom'
import { all_products } from '../data/products'

function DetailsPage() {
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
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-600">Category: {product.category}</p>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold text-orange-500">${product.new_price}</p>
              <p className="text-xl text-gray-400 line-through">${product.old_price}</p>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
