import React from 'react'
import Card from './Card'
import WomenProduct from './WomenProduct'
import { all_products } from '../data/products'

function Product() {
  return (
    <div>
      <body className='min-h-screen'>
        <div>
        <h1 className='text-black text-center font-bold text-2xl sm:text-3xl md:text-4xl pt-3 px-4'>POPULAR IN WOMEN</h1>
          <div className='flex justify-center py-3'>
          <div className='w-20 sm:w-32 md:w-40 h-1 bg-black'></div>
          </div>

          <div>
            <WomenProduct/>
          </div>
        </div>

        <div>
          <h1 className='text-black text-center font-bold text-2xl sm:text-3xl md:text-4xl pt-3 px-4'>NEW COLLECTIONS</h1>
          <div className='flex justify-center py-3'>
          <div className='w-16 sm:w-24 md:w-36 h-1 bg-black'></div>
          </div>
        </div>
        
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-5'>
        {all_products.map(product => (
          <Card key={product.id} all_products={product} />
        ))}
      </div>
      </body>
    </div>
  )
}

export default Product
