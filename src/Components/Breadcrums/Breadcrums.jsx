import React, { useContext, useState } from 'react'
import "./Breadcrums.css"
 import arrow_icon from "../Assets/breadcrum_arrow.png"
import { ShopContext } from '../../Context/ShopContext'
function Breadcrums(props) {
    const {product} = props
    const {addTocart} =useContext(ShopContext)
    
  return (
    <div className='breadcrums'>
      <div className="path">
        Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> { product.category } <img src={arrow_icon} alt="" /> { product.name}
      </div>
      <div className="Product-infos">
        <div className="left">
        <div className="small-img">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        </div>
        <div className="main-img">
        <img src={product.image} alt="" />
        </div>
        </div>
        <div className="main-infos">
        <h1>{product.name}</h1>
        <div className="ptage">
        <p className='old'>${product.old_price}</p><p className='new'>${product.new_price}</p>
        </div>
        <p className='over'>Select Size</p>
        <div className="selectsize">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
        </div>
        <div className="add-to-cart">
            <button onClick={()=>{addTocart(product.id)}} >ADD TO CART</button>
        </div>
        <div className="more-infos">
            <p>Category: {product.category}</p>
            <p>Category: Modern,Latest</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrums
