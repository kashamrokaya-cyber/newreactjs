import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLocationDot, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-green-400'>
      <div className='flex justify-around items-center bg-green-400 '>
        <div className= ' p-2   bg-green-400 w-70 h-40 rounded-xl'>
          <h1 className='text-xl text-green-600 font-bold mx-2 '>GreenLand Nepal</h1>
          <p className='mx-2 text-justify'> Bringing nature closer to your home with fresh,
            healthy and beautiful plants.
          </p>
        </div>
        <div className= ' mt-2  bg-green-400 w-70 h-40 rounded-xl'>
          <h2 className='text-xl text-black font-bold mx-2 ' >Contact</h2>
          
          <p className='mx-2 ' ><IoIosCall className='inline' />+977 977777777</p>
          <p className='mx-2'><FaLocationDot className='inline'/> Tinkune , Kathmandu</p>
        </div>
        <div className=' mt-2   bg-green-400 w-70 h-40 rounded-xl'>
          <h2 className='text-xl text-black font-bold mx-4 '>Follow us</h2>
          <div className=' mt-2 mx-2 flex space-x-6'>
          <span className='text-blue-500 cursor-pointer hover:bg-white p-2 hover:scale-110 transform duration-200 rounded-2xl'> <FaFacebook/></span>
          <span className='text-blue-500 cursor-pointer hover:bg-white p-2 hover:scale-110 transform duration-200 rounded-2xl'><FaInstagram/></span>
          <span className='text-blue-500 cursor-pointer hover:bg-white rounded-2xl hover:scale-110 transform duration-200 p-2'><FaTiktok/></span>
          </div>
        </div>
      
      </div>
        <hr  className='border-2 text-black'/>
      <p className='text-center'>@ 2026 GreenLand Nepal.All rights Reserved</p>
    </div>
  )
}

export default Footer