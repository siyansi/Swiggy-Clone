import React from 'react';
import { useNavigate } from 'react-router-dom';
import food from '../../assests/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg'
import { FaCheckCircle } from "react-icons/fa";
const SecondCards = () => {
 

  // Array of different items
  const items = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-photo/view-delicious-food-dish_23-2150777821.jpg?t=st=1709882896~exp=1709886496~hmac=fe58519f2e97ad728d1b8bb189d2707b793cfedfeb0249f58d8bfd4df6f81923&w=1060',
      heading: "Pizza Hut",
      rating:'4.2',
      time: "30-35 mins",
      Items: "Pizza",
      place: "Tirunelveli",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/top-view-tasty-mushrooms-meal-with-fresh-tomatoes-seasonings-dark-surface-dish-dinner-meal-cooking-mushroom_140725-118363.jpg?t=st=1709880197~exp=1709883797~hmac=bb71eb08adc73b714bd89985676c0dc7ca9cc991a4a0ea9159ea555777e8bff4&w=1060",
      heading: "Shah Bucket Biryani",
      rating:'4.4',
      time: "30-35 mins",
      Items: "Biryani",
      place: "Palayamkottai Opp Court",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg?t=st=1709881061~exp=1709884661~hmac=365b6571f6c1b5e37d69784eb72fd572f82742b78df37b71286d44f8a961eb78&w=1060",
      heading: "Hotel Banu Birunthavan ",
      rating:' 4.3',
      time: "30-55 mins",
      Items: " South Indian, Chinese, Beverage",
      place: "  Palayamkottai OPP Bell School",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/variation-thai-cuisine-with-bell-peppers-bokchoy-wooden-desk-against-black-background_23-2148093088.jpg?t=st=1709883045~exp=1709886645~hmac=819988e122081637abefd8711ba2abc0edaa863743dc56e98f4bd6c556613ff3&w=1060",
      heading: " Sithi Kitchen",
      rating:' 4.2 ',
      time: "30-40 mins",
      Items: " Biryani,  North Indian, Seafood",
      place: "Perumalpuram",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/hotdog-with-ketchup-mustard-lettuce-wooden-table_2829-19795.jpg?t=st=1709881154~exp=1709884754~hmac=fcef53cb3d7cbde56e719d74e5c9887c6c6e2ec99aed1d39673bd42ac38ecfb6&w=1060",
      heading: "zam Zam Briyani",
      rating:'4.1',
      time: "30-40 mins",
      Items: "  Biryani, Chinese, South Indian",
      place: "Samathanapuram",
    },
    {
      id: 6,
      img: "https://img.freepik.com/free-photo/top-view-tasty-pakistani-dish_23-2148825124.jpg?t=st=1709881177~exp=1709884777~hmac=6c5abf96b45985f5fce7a50a4c82a4f1256161974d49e6fdec3d1660c6f9cd01&w=1060",
      heading: " Hotel Anandhabhavan",
      rating:'4.1',
      time: "25-30 mins",
      Items: "Chinese, North Indian, South Indian",
      place: "Vannarpettai OPP Galaxy Hospital",
    },
    {
      id: 7,
      img: "https://img.freepik.com/free-photo/delicious-food-table_23-2150857814.jpg?t=st=1709881201~exp=1709884801~hmac=7ba61a5fac5f8fc5e64bd35d67ba1e87d8d2c02e0c1d2d86e6ec02ddf1f307fd&w=1380",
      heading: " Aasife Biriyani ",
      rating:'4.1',
      time: " 25-30 mins",
      Items: " Desserts,South Indian, Ice Cream, Biryani",
      place: "Tirunelveli",
    },
    {
      id: 8,
      img: "https://img.freepik.com/free-photo/view-delicious-tacos-dish_23-2150777657.jpg?t=st=1709881238~exp=1709884838~hmac=712a4655d63cf42086ada24a9c754b70e7980881400b117d8f1ad37cdf422fd7&w=1480",
      heading: " Anjappar",
      rating:'3.9',
      time: "30-40 mins",
      Items: "Chettinad",
      place: "Tirunelveli",
    },




    // Add more items here
  ];

  return (
    <div className=' mt-10  md:text-lg sm:text-sm' style={{ width: "100%", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
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

    <div className="carousel rounded-box w-full ">
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
            <p className='font-medium text-gray-500'> {item.Items}</p>
            <p className='font-medium text-gray-500 flex'> {item.place}</p>
          </div>
        </div>
      ))}
    </div>
  </div> 
 
</div>
</div>
  );
};

export default SecondCards;
