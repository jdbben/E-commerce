import React from 'react'
import Item from '../item/Item'
import data_product from '../Assets/data'
import "./RelatedProducts.css"
import { Link } from 'react-router-dom'
function RelatedProducts() {
     
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr />
        <div className="related-products-data">
        {data_product.map((item,i)=>{
          return  <Item key={i} id={item.id} name ={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}/>
        })}
        </div>
        
    </div>
  )
}

export default RelatedProducts
