import React from 'react'
import { IoMdHelp } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import LoginPage from '../../register/LoginPage';
import cook from '../../assests/43060-removebg-preview.png'
const AddCart = () => {
  return (
    <div className='px-10'>
<div className="navbar  bg-gradient-to-t from-violet-200 to-white  rounded-xl ">
  <div className="flex-1">
    <a className=" text-xl font-bold pl-4 " style={{  fontFamily: ""  }}>SECURE CHECKOUT</a>
  </div>
  <div className="flex-none gap-4">
  <h1 className="text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex">
                  {" "}
                  <IoMdHelp className="mt-1" />
                  Help
                </h1>

                <button className="" onClick={()=>document.getElementById('my_modal_2').showModal()}><h1 className="text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex">
                  <SiGnuprivacyguard className="mt-1" /> Signin
                </h1></button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
   <LoginPage/>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

  </div>
</div>

<div className='flex  mt-32  justify-center w-full '>

<img className='items-center mr-60 '  src={cook}/>
</div>
<div>
    <h2 className='text-center text-xl font-semibold mb-1'>Your Cart is empty </h2>
    <p className='text-center text-lg font-medium text-gray-500 mb-2'>You can go to home page to view more restaurants</p>
<div className='flex place-content-center  '>
    <button className=" justify-center btn btn-wide bg-orange-500 text-white">SEE RESTAURANTS NEAR YOU </button>
    </div>
</div>


    </div>
  )
}

export default AddCart