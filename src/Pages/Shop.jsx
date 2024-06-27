import React from 'react'
import Hero from '../Components/Hero/Hero'
import Populer from '../Components/Popular/Populer'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import News from '../Components/News/News'
function Shop() {
  return (
    <div>
      <Hero/>
      <Populer/>
      <Offers/>
      <NewCollections/>
      <News/>
    </div>
  )
}

export default Shop
