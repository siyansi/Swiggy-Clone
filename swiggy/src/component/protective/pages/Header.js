import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import logo from "../../assests/10399365.png";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelp } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import LoginPage from "../../register/LoginPage";

const Header = ({ showButtons }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="fixed top-0 w-full z-10  ">
      
      <div className="bg-white drop-shadow-xl bg-gradient-to-t from-violet-200 to-white ">
        <header>
        
             
             {showButtons ? (
              <div className="h-24 bg-white drop-shadow-xl bg-gradient-to-t from-violet-200 to-white  ">
              <div className="flex gap-96   ">
                {/* Render your buttons here */}
                <div className="flex  gap-2   pt-10 ml-10 w-full ">
                <div className="carousel rounded-box w-full gap-6">
  <div className="carousel-item ">
  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg ">
                    Filter
                  </button>
  </div> 
  <div className="carousel-item">
  <button className="text-black border text-sm border-gray-400 font-bold  h-9 px-5 rounded-full  shadow-lg ">
                    Sort By
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
                  
                </div>

                <div className=" justify-end pt-8 mr-14">
                  <label className="input input-bordered flex items-center gap-2 bg-transparent">
                    <input
                      type="text"
                      className="grow bg-transparent"
                      placeholder="Search"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              </div>
            ) : (
            
              <div >

<div className="flex justify-between items-center">
          <div className="flex items-center">
              <img className="h-24" src={logo} alt="Logo" />
              
             
               <div className="ml-4 z-30">
                <div className="drawer " style={{ zIndex: 20 }}>
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />
                  <div className="drawer-content">
                    <label
                      htmlFor="my-drawer"
                      className="flex underline hover:text-orange-500 font-semibold cursor-pointer text-lg "
                    >
                      Others{" "}
                      <IoIosArrowDown className="mt-2 ml-2 text-orange-500" />{" "}
                    </label>
                  </div>
                  <div className="drawer-side">
                    <label
                      htmlFor="my-drawer"
                      aria-label="close sidebar"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-96 min-h-full bg-base-200 text-base-content">
                      <li>
                        <a>
                          <input
                            type="text"
                            placeholder="Type here"
                            className="input w-full max-w-xs"
                          />
                        </a>
                      </li>
                      <li className="border-2 h-20 hover:border-orange-500 ">
                        <a>Use my current location </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </div> 

                
              <div className="flex gap-6 mr-4">
                
                <h1 className="text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex">
                  {" "}
                  <IoSearch className="mt-1" />
                  Search
                </h1>
                
                <h1 className="text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex">
                  {" "}
                  <BiSolidOffer className="mt-1" />
                  Offers
                </h1>
                <h1 className="text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden md:flex">
                  {" "}
                  <IoMdHelp className="mt-1" />
                  Help
                </h1>
                
                {/* Open the modal using document.getElementById('ID').showModal() method */}
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
                <h1 className="text-xl font-semibold hover:text-orange-600 cursor-pointer flex gap-2 hidden mr-10 md:flex">
                  <TiShoppingCart className="mt-1" /> Cart
                </h1>
                <div className="md:hidden">
                  <button
                    onClick={handleDropdownToggle}
                    className="flex items-center gap-2 text-xl font-semibold hover:text-orange-600 cursor-pointer"
                  >
                    More{" "}
                    <IoIosArrowDown className="mt-1 text-orange-500 mr-6" />
                  </button>
                  </div>
                  {showDropdown && (
                    <div className="absolute right-0 mt-8  w-48 bg-white shadow-lg rounded-md z-10">
                      <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        Search
                      </h1>
                      <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        Offers
                      </h1>
                      <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        Help
                      </h1>
                      <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                        Signin
                      </h1>
                    </div>
                  )}
                </div>
              </div>
              </div>
            )}
         
        </header>
      </div>
    </div>
  );
};

export default Header;
