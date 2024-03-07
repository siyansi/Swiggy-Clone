import React from 'react'
import Header from './Header'
import { FaStar } from "react-icons/fa";




const Productlist = () => {
  return (
    <div className='mt-40 '>
<div>
    <Header/>
</div>
<div className='px-52'> 
<div className='flex justify-between border-dashed border-b-2 border-zinc-500 '>
    <div className='mb-6'>
    <h2 className='text-lg font-semibold'>Pizza Hut</h2>
    <p>pizzas</p>
    <p>Tirunelveli,4.4km</p>
    </div>

    <div >
        <p className='text-green-600 font-bold flex'><FaStar /> 4.3</p>
        <p>100+ raiting</p>
    </div>
</div>
</div>
    </div>
  )
}

export default Productlist