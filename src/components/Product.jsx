import React from 'react'
import Card from './Card'
import WomenProduct from './WomenProduct'
import { all_products } from '../data/products'

function Product() {
  return (
    <div>
      <body className='min-h-screen '>
        <div>
        <h1 className='text-black text-center font-bold text-4xl pt-3'>PPOPULAR IN WOMEN</h1>
          <div className='flex justify-center py-3'>
          <div className='w-40 h-1 bg-black'></div>
          </div>

          <div>
            <WomenProduct/>
          </div>
        </div>

        <div>
          <h1 className='text-black text-center font-bold text-4xl pt-3'>NEW COLLECTIONS</h1>
          <div className='flex justify-center py-3'>
          <div className='w-36 h-1 bg-black'></div>
          </div>
        </div>
        
       <div className='grid md:grid-cols-3 lg:grid-cols-5 p-5'>
        {all_products.map(product => (
          <Card key={product.id} all_products={product} />
        ))}
      </div>
      </body>
    </div>
  )
}

export default Product
