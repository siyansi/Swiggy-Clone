import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelp } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";
import logo from '../../assests/10399365.png'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <div>
    <div className='bg-white drop-shadow-xl  bg-gradient-to-t from-violet-300 to-white '>
      <header>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img className='h-24' src={logo} alt="Logo" />
            <div className='ml-4'>
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="flex underline hover:text-orange-500 font-semibold cursor-pointer text-lg ">Others <IoIosArrowDown className='mt-2 ml-2 text-orange-500'/> </label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a><input type="text" placeholder="Type here" className="input w-full max-w-xs" /></a></li>
      <li className='border-2 h-20 hover:border-orange-500 '><a>Use my current location </a></li>
      
    </ul>
  </div>
</div>
            </div>
          </div>
          <div className='flex gap-6 mr-4'>
            <h1 className='text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex'> <IoSearch className='mt-1' />Search</h1>
            <h1 className='text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex'> <BiSolidOffer className='mt-1' />Offers</h1>
            <h1 className='text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex'> <IoMdHelp className='mt-1' />Help</h1>
            <h1 className='text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex'><SiGnuprivacyguard className='mt-1' /> Signin</h1>
            <h1 className='text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden mr-10 md:flex'><TiShoppingCart className='mt-1' /> Cart</h1>
            <div className="md:hidden">
              <button onClick={handleDropdownToggle} className="flex items-center gap-2 text-xl font-semibold hover:text-orange-600 cursor-pointer">
                More <IoIosArrowDown className='mt-1 text-orange-500 mr-6' />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-8  w-48 bg-white shadow-lg  rounded-md z-10">
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Search</h1>
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Offers</h1>
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Help</h1>
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Signin</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>

<div>
  
</div>
    </div>
  )
}

export default Header
