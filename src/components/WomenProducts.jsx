import React from 'react';
import Card from './Card';
import { all_products } from '../data/products';

function WomenProducts() {
  const womenProducts = all_products.filter(product => product.category === 'Women');
  return (
    <div>
      <h1 className='text-black text-center font-bold text-4xl pt-3'>POPULAR IN WOMEN</h1>
      <div className='flex justify-center py-3'>
        <div className='w-40 h-1 bg-black'></div>
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-5 p-5'>
        {womenProducts.map(product => (
          <Card key={product.id} all_products={product} />
        ))}
      </div>
    </div>
  );
}

export default WomenProducts; 