import React from 'react';
import { useNavigate } from 'react-router-dom';
import food from '../../assests/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg'
const Cards = () => {
 

  // Array of different items
  const items = [
    {
      id: 1,
      img: food,
      heading: "Pizza Hut",
      rating:'4.2',
      time: "30-35 mins",
      Items: "Pizza",
      place: "Tirunelveli",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1709527630~exp=1709531230~hmac=941fc2ee332e340ad548dfa98a30de716da6e20489c32d515db36a83ad266891&w=1380",
      heading: "KFC",
      rating:'4.4',
      time: "30-35 mins",
      Items: "Burgers, Biryani, American, Snacks,...",
      place: "palayamkottai",
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-photo/traditional-indian-thali-wooden-table-generative-ai_849906-19306.jpg?w=1380",
      heading: "Annapoorna Garden Restaurant",
      rating:'3.5',
      time: "30-55 mins",
      Items: "Pizza",
      place: "melapalayam",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1709527702~exp=1709531302~hmac=ee56bee1980a684d85e31cceac83d6b89670f5178b3f0e109a366160ae148036&w=1060",
      heading: "Arabian hot Grills",
      rating:'4.1',
      time: "30-40 mins",
      Items: "Biryani, Arabian, Chinese, South",
      place: "Tirunelveli",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?t=st=1709527735~exp=1709531335~hmac=fbe60f37a41724d034489cae451b0cd3160c078d2edecb9971c727b463113ec7&w=1060",
      heading: "Sweet truth",
      rating:'4.1',
      time: "30-40 mins",
      Items: "Biryani, Arabian, Chinese, South",
      place: "Tirunelveli",
    },
    {
      id: 6,
      img: "https://img.freepik.com/free-photo/top-view-pie-dried-slices-lemon_23-2148656412.jpg?t=st=1709528259~exp=1709531859~hmac=0a59a7c8b347651bea09b5d770f7b25e21e6074a2e48937815566072332c59ff&w=1380",
      heading: "Sri Janakiram",
      rating:'4.1',
      time: "30-40 mins",
      Items: "Biryani, Arabian, Chinese, South",
      place: "Tirunelveli",
    },
    {
      id: 7,
      img: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?t=st=1709528175~exp=1709531775~hmac=1efd7888dcb0b8655c0ac2dedb2bfb97913d636cc6ce711ee55738f436fd6a67&w=1380",
      heading: "Aruvi Bakery ",
      rating:'4.1',
      time: "30-40 mins",
      Items: "Biryani, Arabian, Chinese, South",
      place: "Tirunelveli",
    },
    {
      id: 8,
      img: "https://img.freepik.com/free-photo/delicious-meal-table_23-2150857684.jpg?t=st=1709528020~exp=1709531620~hmac=6de43b2988b2d74a1aa9ea64aa155016276c09afa50f76cd106affb284c04aee&w=1380",
      heading: "Hotel Hari Prasath ",
      rating:'4.1',
      time: "30-40 mins",
      Items: "Biryani, Arabian, Chinese, South",
      place: "Tirunelveli",
    },




    // Add more items here
  ];

  return (
    <div className=' mt-10 w-screen md:text-lg sm:text-sm' style={{ width: "100%", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
    {/* <div className='flex gap-10'>
      {items.map((item) => (
        <div className="" key={item.id}>
          <div className="">
            <img className='h-44 w-72 rounded-xl' src={item.img} alt="Burger" />
          </div> 
          <div className='mt-2'>
            <h2 className='text-xl font-bold text-gray-700'>{item.heading}</h2>
            <div className='flex gap-2 font-semibold text-gray-700'>
              <h3>{item.rating}</h3><h3>{item.time}</h3>
            </div>
            <p className='font-medium text-gray-500'>{item.Items}</p>
            <p className='font-medium text-gray-500'>{item.place}</p>
          </div>
        </div>
      ))}
    </div> */}

    <div className="carousel rounded-box ">
  <div className="carousel-item">
  <div className='flex gap-10 cursor-pointer '>
      {items.map((item) => (
        <div className="transition-transform duration-300 transform hover:scale-95 " key={item.id}>
          <div className="">
            <img className='h-44 w-72 rounded-xl ' src={item.img} alt="Burger" />
          </div> 
          <div className='mt-2'>
            <h2 className='text-xl font-bold text-gray-700'>{item.heading}</h2>
            <div className='flex gap-2 font-semibold text-gray-700'>
              <h3>{item.rating}</h3><h3>{item.time}</h3>
            </div>
            <p className='font-medium text-gray-500'>{item.Items}</p>
            <p className='font-medium text-gray-500'>{item.place}</p>
          </div>
        </div>
      ))}
    </div>
  </div> 
 
</div>
</div>
  );
};

export default Cards;
