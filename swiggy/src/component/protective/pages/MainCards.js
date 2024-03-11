import React from 'react'
import Cards from './Cards'
import { FaChevronDown } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import Home from './Home';
import SecondCards from './SecondCards';


const MainCards = () => {
  return (
    <div className='mt-8'>
  <div className=" carousel rounded-box w-full gap-4">
  <div className="carousel-item  ">
  

<button className="" onClick={()=>document.getElementById('my_modal_3').showModal()}><button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full pt-2  shadow-lg flex ">
                    Filter<IoIosOptions className="mt-1 h-4 w-4" />
                  </button></button>
<dialog id="my_modal_3" className="w-[60%] h-96 rounded-xl shadow-lg slideIn">
  <div className="w-[80%] p-4 ml-2">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   <Home/>
  </div>
</dialog>
  </div>

  <div className="carousel-item">
  <button className="text-black border text-sm border-gray-400 font-bold pt-2 gap-1 h-9 px-5 rounded-full flex shadow-lg ">
                    Sort By<FaChevronDown className="mt-1 h-4 w-4" />
                  </button>  </div> 
                  
  <div className="carousel-item">

  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">
                    Fast Delivery
                  </button>  </div> 
  <div className="carousel-item">
  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">
                    Ratings 4.0+
                  </button>  </div> 
  <div className="carousel-item">

  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full shadow-lg">
                    Pure Veg
                  </button>  </div> 
  <div className="carousel-item">
  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">
                    Offers
                  </button>  </div> 
  <div className="carousel-item">
  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">
                    Rs. 300-Rs. 600
                  </button>  </div>
  <div className="carousel-item">
  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg">
                    Less than Rs. 300
                  </button>  </div>
  
</div>

<div className=''>

  <Cards/>
  
  <Cards/>
  

</div>
    </div>
  )
}

export default MainCards