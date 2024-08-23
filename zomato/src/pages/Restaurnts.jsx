import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import './Home.css';
import { Pagination } from "@mui/material";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRestaurants();
  }, [page]); // Fetch restaurants whenever page changes

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(`http://localhost:8000/restaurants?page=`+page);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRestaurants(data.restaurants);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-12 bg-orange-50 p-4'>

      <div className='flex flex-col Res-bg justify-center items-center gap-10  p-4 rounded-lg'>
          <img src="/images/logo.png" alt="" className='w-[300px]' />
        <p className='text-white text-3xl font-bold'>Discover the best food & drinks in Chhindwara</p>
      </div>

      <div className='w-auto grid grid-cols-3 gap-12 border border-gray-0 p-4 rounded-lg'>
        {restaurants.map(restaurant => (
          <Card key={restaurant._id} data={restaurant} />
        ))}
      </div>

      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
        variant='outlined'
        color='standard'
        sx={{
          '& .MuiPagination-ul': {
            borderRadius: '0.375rem', // rounded-lg equivalent
          },
        }}
      />
    </div>
  )
}
export default Restaurants;
