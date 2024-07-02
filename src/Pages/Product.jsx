import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from "../Context/ShopContext"
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

function Product() {
  const {all_product} = useContext(ShopContext)
  const {producteId} = useParams()
  const product = all_product.find((e)=> e.id === Number(producteId))
  return (
    <div>
       <Breadcrums product={product}/>
       <RelatedProducts/>
    </div>
  )
}

export default Product
