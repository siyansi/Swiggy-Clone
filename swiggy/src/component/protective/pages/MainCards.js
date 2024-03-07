import React from 'react'
import Cards from './Cards'

const MainCards = () => {
  return (
    <div className='mt-8'>
   <div className="flex flex-wrap gap-2 ">
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg ">Filter</button>
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg ">Sort By</button>
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">Fast Delivery</button>
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">Ratings 4.0+</button>
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full shadow-lg">Pure Veg</button>
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">Offers</button>
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">Rs. 300-Rs. 600</button>
      <button className="text-black border border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">Less than Rs. 300</button>
    </div>

<div className='px-16'>

  <Cards/>
  <Cards/>
  <Cards/>
</div>
    </div>
  )
}

export default MainCards