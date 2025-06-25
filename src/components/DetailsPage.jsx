import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { all_products } from '../data/products'
import { Link } from 'react-router-dom'
import WomenProduct from './WomenProduct'


function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = all_products.find(p => p.id === parseInt(id));

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link className='px-3' to="/">Home</Link>
        <Link className='px-3' to="/">Shop</Link>
        <Link
          className='px-3'
          to={product.category === 'Men' ? '/men' : product.category === 'Women' ? '/women' : '/'}
        >
          {product.category}
        </Link>
        <span className='px-3'>{product.name}</span>
      </div>
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
      >
        &larr; Back
      </button>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2 grid grid-cols-4 gap-4">
            <div className="col-span-1 space-y-4">
              <img src={product.image} className="w-full h-auto" />
              <img src={product.image} className="w-full h-auto" />
              <img src={product.image} className="w-full h-auto" />
              <img src={product.image} className="w-full h-auto" />
            </div>
            <div className="col-span-3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto "
              />
            </div>
          </div>

          
          <div className="col-span-1 md:col-span-1 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            
            <div className="flex items-center">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    key={index}
                    className={
                      index <= (hover || rating) ? "text-yellow-500 text-2xl" : "text-gray-300 text-2xl"
                    }
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    &#9733;
                  </button>
                );
              })}
              <span className="ml-2 text-gray-500">(140)</span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-2xl font-bold text-orange-500">${product.new_price}</p>
              <p className="text-xl text-gray-400 line-through">${product.old_price}</p>
            </div>
            
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilis laboriosam nulla, non molestiae odio quia quae, per dolores iste.
            </p>
            
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Select Size</p>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button key={size} className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">{size}</button>
                ))}
              </div>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
              Add to Cart
            </button>
            
            <div className="text-sm text-gray-500">
              <p>Category: {product.category}</p>
              <p>Tags: Modern, Latest</p>
            </div>
          </div>
        </div>
        
      </div>

      <div>
        <div className='flex mt-10'>
        <div className='border-2  px-10 py-6'>Discription</div>
        <div className='border-2  px-10 py-6'>Review(122)</div>
        </div>
        <div className='border-2  px-10 py-6'>
          <p className='p-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae laudantium nisi 
            perferendis, deleniti harum corporis ratione similique vitae, neque, voluptates quo 
            sunt? Ipsam laborum id asperiores consequatur, beatae reiciendis vitae
          </p>
          <p className='p-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste magnam porro accusamus
             totam quae reprehenderit assumenda rerum nemo, doloremque aut!
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl font-bold mb-4 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {all_products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 5)
            .map(related => (
              <Link key={related.id} to={`/details/${related.id}`} className="block  rounded-lg p-4">
                <img src={related.image} alt={related.name} className="h-[450px] w-72  object-cover mb-2 rounded" />
                <h3 className="text-lg font-semibold">{related.name}</h3>
                <p className="text-orange-500 font-bold">${related.new_price}</p>
              </Link>
            ))}
        </div>
      </div>

      <div className='mt-10 flex justify-center'>
        <img src="" alt="" /><span className='text-4xl font-bold font-serif'>SHOPPER</span>
      </div>

        

      <div className='flex justify-center mt-5'>
          <a className='px-3' href="">Company</a>
          <a className='px-3' href="">Product</a>
          <a className='px-3' href="">Offices</a>
          <a className='px-3' href="">About</a>
          <a className='px-3' href="">Contact</a>
        </div>
    </div>
  )
}

export default DetailsPage
