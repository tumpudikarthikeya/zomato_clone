import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Card = ({data}) => {
    // console.log(data)
    const navigate = useNavigate()
    const temp = () => {
        navigate(`/restaurant_details/${data.id}`, {state : {data}});
    }
     
  return (

        <div onClick={temp} className='w-[300px] h-[250px] flex flex-col rounded-lg  ring-opacity-100 ring-[0.5px] hover:shadow-lg transition-shadow duration-300'>
            <div className='flex h-[200px]'>
                <img src={data.featured_image} alt="" className='w-[100%]  object-cover rounded-lg ' />
            </div>
            <div className='flex mt-1 px-3 justify-between items-center'>
                <p className='text-xl font-bold'>{data.name}</p>
                <IoIosArrowDropright className='text-2xl' />
            </div>
        </div>
  )
}

export default Card