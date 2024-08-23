import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8000/restaurants/search/${searchTerm}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      navigate(`/restaurant_details/${data.id}`, { state: { data } });
    } catch (error) {
      console.error('Error fetching restaurant:', error);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col Home-bg justify-center items-center gap-10'>
        <div className='flex'>
          <img src="/images/logo.png" alt="" className='w-[300px]' />
        </div>
        <p className='text-white text-3xl font-bold'>Discover the best food & drinks in Chhindwara </p>
        <div className='flex flex-row items-center gap-4'>
          {/* <TextField
            label="Search by ID"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          /> */}
          <input type="text" className='border-2 border-gray-300 p-2 rounded-full w-[400px]' placeholder='Search by ID' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <Button variant="contained" color="primary" sx={{ borderRadius: '18px'}} onClick={handleSearch}>
            Search
          </Button>
        </div>
        <div className='text-2xl '>
          <button className='bg-[rgba(120,66,39,0.92)] text-white rounded-full px-9 py-2 border-2 border-[rgba(200,150,100,0.37)] font-small' onClick={()=>{
            navigate("/restaurants");
          }}> 
          <div className='flex gap-3 justify-center items-center'>
            <p>View Restaurants</p>  
            <MdRestaurant />
          </div>
          </button>
           </div>
      </div>
    </div>
  );
};

export default Home;
