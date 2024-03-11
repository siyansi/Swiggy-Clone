import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import Curosal from './Curosal';
import Cards from './Cards';
import MainCards from './MainCards';
import Footer from './Footer';

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
    <div className=' mt-32'>
      <div className='w-[100%]'>
        <div className='fixed top-0 w-full z-10'>
          <Header showButtons={showButtons} />
        </div>
        <div className=' mt-20 w-full '>
          <div className=''>
            {/* <div className='mt-10 ml-10'>
              <h2 className='text-3xl font-semibold' style={{ fontFamily: "Poppins" }}>Whats on Your Mind ?</h2>
            </div> */}
            <div className='cursor-pointer  '>
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
      
      <div className='mt-16  '>

<Footer/>
</div>

    </div>
    
  );
};

export default HomePage;
