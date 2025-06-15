import React from 'react'
import Card from './Card'
import p1_img from '../Images/img1.jpg'
import p2_img from '../Images/img2.avif'
import p3_img from '../Images/img3.jpg'
import p4_img from '../Images/img4.avif'
import p5_img from '../Images/img5.jpg'
import p6_img from '../Images/img6.avif'
import p7_img from '../Images/img7.jpg'
import p8_img from '../Images/img8.avif'
import p9_img from '../Images/img9.jpg'

function WomenProduct() {
  let awproducts = [
    {
      id: 1,
      name: 'Stripped Flutter Sleeve Overlap Collar Peplum Hem Blouse',
      category: "Women",
      image: p1_img,
      new_price: 50.0,
      old_price: 80.5,
    },
    {
      id: 3,
      name: 'Floral Print Wrap Midi Dress',
      category: "Women",
      image: p3_img,
      new_price: 45.0,
      old_price: 75.0,
    },
    {
      id: 5,
      name: 'Oversized Knit Sweater',
      category: "Women",
      image: p5_img,
      new_price: 55.0,
      old_price: 85.0,
    },
    {
      id: 7,
      name: 'Ruffled Sleeve Blouse',
      category: "Women",
      image: p7_img,
      new_price: 40.0,
      old_price: 65.0,
    },
    {
      id: 9,
      name: 'High-Waisted Pencil Skirt',
      category: "Women",
      image: p9_img,
      new_price: 35.0,
      old_price: 55.0,
    }

  ]
  return (
    <div>
             <div className='grid md:grid-cols-3 lg:grid-cols-5 p-5'>

{awproducts.map(awproducts=> (
  <Card key={awproducts.id} all_products={awproducts} />
))}
</div>
    </div>
  )
}

export default WomenProduct
