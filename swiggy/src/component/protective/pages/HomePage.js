import React from 'react'
import Header from './Header'

import Curosal from './Curosal'
import Cards from './Cards'
import MainCards from './MainCards'



const HomePage = () => {
  return (
    <div className='w-full mt-32  '>
<div className='fixed top-0 w-full'style={{fontFamily:"Poppins"}} >
  <Header/>
</div>
<div className='px-10'>
  <div className=''>
  <div className='mt-10 ml-10 '>
    <h2 className='text-3xl font-semibold' style={{fontFamily:"Poppins"}}>Whats on Your Mind ?</h2>
  </div>
  <div className='cursor-pointer'>
    <Curosal/>
  </div>
</div>

<div className='mt-20 ml-10'>
  <h2  className='text-3xl font-semibold'>Top restaurant Chains in Nellai </h2>

  <div className='overflow-x-auto cursor-pointer '>
<Cards />

  </div>
</div>

<div>
<div className='mt-20 ml-10'>
    <h1  className='text-3xl font-semibold'>Restaurant with Online Food Delivery in Tirunelveli </h1>
</div>
  <MainCards/> 
</div>

</div>


    </div>
  )
}

export default HomePage