import React, { useState } from 'react';
import Header from './header/Header'
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const Productlist = () => {

  const [count, setCount] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className='mt-40 '>
<div>
    <Header/>
</div>
<div className='px-52'> 
<div className='flex justify-between border-dashed border-b border-zinc-500 '>
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


<div>
  <h3>30-35 mins </h3><h3>250 for two </h3>
</div>
<div>
  <h3>ibhued</h3>
  <p>iducvyuqeh as</p>
</div>
</div>

<div className='px-44 '>
  <h1 className='text-xl font-bold'>Recommenend (20)</h1>
  <div className='flex justify-between border-b pb-6 border-zinc-400'>
<div className=' mt-10   '>
  <h2>Oninion Dosa</h2>
  <h4>$154</h4>
  <p className='text-sm'>Serves 1 | A delectable breakfast option bursting with flavorful goodness to start<br/> your day on a delightful note. </p>
  
  </div>
  <div className=" bottom-0 left-0 right-0  justify-center items-center">
      <img className="h-24 w-44 rounded-lg" src='https://img.freepik.com/free-photo/delicious-meal-table_23-2150857684.jpg?t=st=1709528020~exp=1709531620~hmac=6de43b2988b2d74a1aa9ea64aa155016276c09afa50f76cd106affb284c04aee&w=1380' alt="Product" />
      {showButtons ? (
        <button className=" font-semibold text-success text-xl border border-black w-24 bg-zinc-100 h-10 gap-3 flex place-content-center ml-3 rounded-lg" onClick={handleAddClick}>
          Add
        </button>
      ) : (
        <div className=" mr-3 bottom-0 left-0 right-0 h-3 flex justify-center items-center">
          <div className="border border-black w-24 bg-zinc-100 h-10 gap-3 flex place-content-center ml-3 rounded-lg">
            <button className=' font-bold  ' onClick={handleDecrement}><FaMinus /></button>
            <span  className='text-green-500 font-bold pt-1 '>{count}</span>
            <button  className='text-green-500 font-bold ' onClick={handleIncrement}><FaPlus /></button>
          </div>
        </div>
      )}
    </div>
  </div>
</div>

    </div>
  )
}

export default Productlist