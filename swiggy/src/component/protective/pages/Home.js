// import React from 'react';
// import { CiSearch } from "react-icons/ci";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import photo from '../../assests/Tie Neck Lantern Sleeve Dress 1.png';

// const Circle = ({ color }) => {
//   return (
//     <div
//       className={`w-10 h-10 rounded-full flex items-center justify-center bg-white  border-${color}-500`}
//     >
//       <div
//         className={`w-8 h-8 rounded-full bg-${color}-500`}
//       ></div>
//     </div>
//   );
// };
// const Home = () => {
//   return (
//     <div className="flex h-screen ">
//       <div className="absolute top-0 left-0 m-4 text-xl font-bold text-black">
//         <CiSearch  className='cursor-pointer'/>
//       </div>
      
//       <div className="w-1/2 bg-white flex text-end items-center h-full flex place-content-end"> 
//         <div className="text-[170px] text-black mb-24" style={{fontFamily: "Trirong"}}>
//           New Fa
//           <h2 className="pr-24 mt-2" style={{fontFamily: "poppins"}}>
//             <p className='text-left text-sm mr-24 ml-5'>Whether It's Through Our Ethically Sourced Materials, Our Commitment To Fair Labor Practices, 
//             Or Our Dedication To Empowering Local Artisans, We Strive To Make A Positive Impact On Both The
//             Fashion Industry And The World At Large. <br/><br/>
//             <button className="text-white  ml-10 rounded-full py-2 px-8 mt-4 " style={{fontFamily: "poppins", backgroundColor: "#9776C4"}}>
//              <p className='cursor-pointer'> Shop Now</p>
//             </button>
//             </p>
//           </h2>
//         </div>
//       </div>
      
//       <div className="w-1/2  flex justify-left items-center" style={{backgroundColor: "#9776C4"}}>
//         <div className="absolute top-0 right-0 m-4">
//           <ul className="flex space-x-8">
//             <li className="text-white cursor-pointer"style={{fontFamily: "poppins"}}>Home</li>
//             <li className="text-white cursor-pointer"style={{fontFamily: "poppins"}}>Shop</li>
//             <li className="text-white cursor-pointer"style={{fontFamily: "poppins"}}>Features</li>
//             <li className="text-white cursor-pointer"style={{fontFamily: "poppins"}}>Contact</li>
//             <li className="text-white cursor-pointer flex"><HiOutlineShoppingBag className="mr-2 mt-1 text-xl" /></li>
//             <li className="text-white border border-white px-3 py-1 rounded cursor-pointer"style={{fontFamily: "poppins"}}>Login</li>
//           </ul>
//         </div> 
//         <h1 className="text-[170px] text-black mb-64" style={{fontFamily: "Trirong"}}>shion</h1>

//         <div className="flex items-center justify-around w-full mt-44 ml-30 mr-44 gap-2">
//           <Circle color="blue" />
//           <Circle color="red" />
//           <Circle color="pink" />
//           <Circle color="green" />
//         </div>
//       </div>

//       <div className="absolute inset-0 flex justify-center items-center mt-20">
//         <img src={photo} alt='reg' className='w-[510px] h-[510px]' />
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(''); // State to store input value
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to manage dropdown visibility

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsDropdownVisible(e.target.value.trim().length > 0); // Show dropdown if input is not empty
  };

  // Function to handle input focus
  const handleInputFocus = () => {
    setIsDropdownVisible(inputValue.trim().length > 0); // Show dropdown if input is not empty
  };

  // Function to handle input blur
  const handleInputBlur = () => {
    setIsDropdownVisible(false); // Hide dropdown on blur
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {isDropdownVisible && (
        <div className="dropdown bg-black">
          {/* Dropdown content goes here */}
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
