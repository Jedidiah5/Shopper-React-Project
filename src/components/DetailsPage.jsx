import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { all_products } from '../data/products'

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
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
      >
        &larr; Back
      </button>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image Gallery Column */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-4 gap-4">
            {/* Thumbnail Images Column */}
            <div className="col-span-1 space-y-4">
              <img src={product.image} alt="thumbnail" className="w-full h-auto rounded-lg shadow-lg cursor-pointer" />
              <img src={product.image} alt="thumbnail" className="w-full h-auto rounded-lg shadow-lg cursor-pointer" />
              <img src={product.image} alt="thumbnail" className="w-full h-auto rounded-lg shadow-lg cursor-pointer" />
            </div>
            {/* Main Product Image Column */}
            <div className="col-span-3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Product Details Column */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            {/* Rating */}
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
            {/* Description */}
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilis laboriosam nulla, non molestiae odio quia quae, per dolores iste.
            </p>
            {/* Size Selection */}
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
            {/* Category and Tags */}
            <div className="text-sm text-gray-500">
              <p>Category: {product.category}</p>
              <p>Tags: Modern, Latest</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
          
          {/* Review Submission Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Write a Review</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="reviewerName" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="reviewerName" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="reviewRating" className="block text-sm font-medium text-gray-700">Rating</label>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
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
                </div>
              </div>
              <div>
                <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700">Your Review</label>
                <textarea 
                  id="reviewText" 
                  rows="4" 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Write your review here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Existing Reviews List */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <p className="font-semibold text-gray-800">John Doe</p>
                <span className="ml-4 text-yellow-500">★★★★★</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Reviewed on January 15, 2023</p>
              <p className="text-gray-700">"This jacket is amazing! The quality is superb and it fits perfectly. Highly recommend!"</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <p className="font-semibold text-gray-800">Jane Smith</p>
                <span className="ml-4 text-yellow-500">★★★★☆</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Reviewed on February 2, 2023</p>
              <p className="text-gray-700">"Good jacket, but the color was slightly different than expected. Still happy with the purchase."</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <p className="font-semibold text-gray-800">Peter Jones</p>
                <span className="ml-4 text-yellow-500">★★★☆☆</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Reviewed on March 10, 2023</p>
              <p className="text-gray-700">"It's okay. Nothing special, but it serves its purpose."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
