import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { all_products } from '../data/products'
import { Link } from 'react-router-dom'
import WomenProduct from './WomenProduct'
import { useCart } from '../context/CartContext'


function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = all_products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      {/* Breadcrumb Navigation */}
      <div className="text-sm text-gray-600 mb-4 overflow-x-auto whitespace-nowrap">
        <Link className='px-2 sm:px-3 hover:text-orange-500' to="/">Home</Link>
        <span className="px-1">/</span>
        <Link className='px-2 sm:px-3 hover:text-orange-500' to="/">Shop</Link>
        <span className="px-1">/</span>
        <Link
          className='px-2 sm:px-3 hover:text-orange-500'
          to={product.category === 'Men' ? '/men' : product.category === 'Women' ? '/women' : '/'}
        >
          {product.category}
        </Link>
        <span className="px-1">/</span>
        <span className='px-2 sm:px-3 text-gray-800'>{product.name}</span>
      </div>
      
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
      >
        &larr; Back
      </button>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Product Images */}
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              <div className="col-span-1 space-y-2 sm:space-y-4">
                <img src={product.image} className="w-full h-auto rounded cursor-pointer hover:opacity-80 transition-opacity" />
                <img src={product.image} className="w-full h-auto rounded cursor-pointer hover:opacity-80 transition-opacity" />
                <img src={product.image} className="w-full h-auto rounded cursor-pointer hover:opacity-80 transition-opacity" />
                <img src={product.image} className="w-full h-auto rounded cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
              <div className="col-span-3">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="col-span-1 lg:col-span-1 space-y-4 mt-6 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{product.name}</h1>
            
            <div className="flex items-center">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    key={index}
                    className={
                      index <= (hover || rating) ? "text-yellow-500 text-xl sm:text-2xl" : "text-gray-300 text-xl sm:text-2xl"
                    }
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    &#9733;
                  </button>
                );
              })}
              <span className="ml-2 text-gray-500 text-sm sm:text-base">(140)</span>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-xl sm:text-2xl font-bold text-orange-500">${product.new_price}</p>
              <p className="text-lg sm:text-xl text-gray-400 line-through">${product.old_price}</p>
            </div>
            
            <p className="text-gray-700 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilis laboriosam nulla, non molestiae odio quia quae, per dolores iste.
            </p>
            
            <div className="space-y-2">
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Select Size</p>
              <div className="flex gap-2 flex-wrap">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size} className="border border-gray-300 px-3 py-2 rounded hover:bg-gray-100 text-sm sm:text-base transition-colors">{size}</button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Add to Cart
            </button>
            
            <div className="text-sm text-gray-500">
              <p>Category: {product.category}</p>
              <p>Tags: Modern, Latest</p>
            </div>
          </div>
        </div>
        
      </div>

      {/* Product Tabs */}
      <div className="mt-8 sm:mt-10">
        <div className='flex flex-col sm:flex-row'>
          <div className='border-2 px-4 sm:px-10 py-4 sm:py-6 text-sm sm:text-base font-medium cursor-pointer hover:bg-gray-50'>Description</div>
          <div className='border-2 border-t-0 sm:border-t-2 sm:border-l-0 px-4 sm:px-10 py-4 sm:py-6 text-sm sm:text-base font-medium cursor-pointer hover:bg-gray-50'>Review(122)</div>
        </div>
        <div className='border-2 border-t-0 px-4 sm:px-10 py-4 sm:py-6'>
          <p className='p-2 sm:p-3 text-sm sm:text-base'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laudantium nisi 
            perferendis, deleniti harum corporis ratione similique vitae, neque, voluptates quo 
            sunt? Ipsam laborum id asperiores consequatur, beatae reiciendis vitae
          </p>
          <p className='p-2 sm:p-3 text-sm sm:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste magnam porro accusamus
             totam quae reprehenderit assumenda rerum nemo, doloremque aut!
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8 sm:mt-10">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {all_products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 5)
            .map(related => (
              <Link key={related.id} to={`/details/${related.id}`} className="block rounded-lg p-2 sm:p-4 hover:shadow-lg transition-shadow">
                <img src={related.image} alt={related.name} className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full object-cover mb-2 rounded" />
                <h3 className="text-sm sm:text-lg font-semibold">{related.name}</h3>
                <p className="text-orange-500 font-bold text-sm sm:text-base">${related.new_price}</p>
              </Link>
            ))}
        </div>
      </div>

      {/* Footer */}
      <div className='mt-8 sm:mt-10 flex justify-center'>
        <img src="" alt="" /><span className='text-2xl sm:text-4xl font-bold font-serif'>SHOPPER</span>
      </div>

      <div className='flex justify-center mt-4 sm:mt-5 flex-wrap gap-2 sm:gap-4'>
          <a className='px-2 sm:px-3 text-sm sm:text-base hover:text-orange-500' href="">Company</a>
          <a className='px-2 sm:px-3 text-sm sm:text-base hover:text-orange-500' href="">Product</a>
          <a className='px-2 sm:px-3 text-sm sm:text-base hover:text-orange-500' href="">Offices</a>
          <a className='px-2 sm:px-3 text-sm sm:text-base hover:text-orange-500' href="">About</a>
          <a className='px-2 sm:px-3 text-sm sm:text-base hover:text-orange-500' href="">Contact</a>
        </div>
    </div>
  )
}

export default DetailsPage
