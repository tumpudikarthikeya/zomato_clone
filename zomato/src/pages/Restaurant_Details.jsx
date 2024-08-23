import React from 'react'
import { useLocation } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import Rating from '@mui/material/Rating';


const Restaurant_Details = () => {
    const location = useLocation();
    const {data} = location.state;
    console.log(data)
  return (
    <div className='border-solid border-black flex flex-col gap-6 items-center'>
        <div>
            <img src={data.featured_image} alt="" className=' w-[90%] h-[300px] mt-4 rounded-lg object-cover '/>
        </div>
        <div className='  flex flex-col items-center gap-3'>
            <p className='text-3xl font-bold mb-4'>{data.name}</p>
            <div className='flex gap-2'>
                <CiLocationOn className='text-2xl'/>
                <p className=''>{data.location.address}</p>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <Rating
            name="simple-controlled"
            defaultValue={data.user_rating.aggregate_rating} 
            precision={0.1}
            readOnly/>
            <p>{data.user_rating.aggregate_rating}</p>
            </div>
            <p>{data.cuisines}</p>
        </div>

    </div>
  )
}

export default Restaurant_Details