import React, { useEffect, useState } from 'react';
import Header from './Header';
import Curosal from './Curosal';
import Cards from './Cards';
import MainCards from './MainCards';

const HomePage = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowButtons(currentScrollPos >= 870);
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <div className='w-full mt-32'>
      <div className=''>
        <div className='fixed top-0 w-full z-10'>
          <Header showButtons={showButtons} />
        </div>
        <div className='px-10 mt-20'>
          <div className=''>
            <div className='mt-10 ml-10'>
              <h2 className='text-3xl font-semibold' style={{ fontFamily: "Poppins" }}>Whats on Your Mind ?</h2>
            </div>
            <div className='cursor-pointer'>
              <Curosal />
            </div>
          </div>
          <div className='mt-20 ml-10'>
            <h2 className='text-3xl font-semibold'>Top restaurant Chains in Nellai </h2>
            <Cards />
          </div>
          <div className='mt-20 ml-10'>
            <h1 className='text-3xl font-semibold'>Restaurant with Online Food Delivery in Tirunelveli </h1>
            <MainCards />
          </div>
        </div>
      </div>
      





     



{/* 
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
              
                <div className="absolute right-0 mt-8  w-48 bg-white shadow-lg  rounded-md z-10">
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Search</h1>
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Offers</h1>
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Help</h1>
                  <h1 className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Signin</h1>
                </div>
              
            </div>
          </div> */}




    </div>
  );
};

export default HomePage;
