import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLocationDot, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-green-400'>
      <div className=' flex justify-between   bg-green-400 '>
        <div className=' bg-green-400 w-70 mr-4 rounded-xl'>
          <h1 className='text-xl text-green-600 font-bold  '>GreenLand Nepal</h1>
          <p className='text-justify'> Bringing nature closer to your home with fresh,
            healthy and beautiful plants.
          </p>
        </div>
        <div className=' mt-2  bg-green-400 w-70  rounded-xl'>
          <h2 className='text-xl text-black font-bold mx-2 ' >Contact</h2>

          <p className='mx-2 ' ><IoIosCall className='inline' />+977 977777777</p>
          <p className='mx-2'><FaLocationDot className='inline' /> Tinkune ,Kathmandu</p>
        </div>
        <div className=' mt-2   bg-green-400 w-70  rounded-xl'>
          <h2 className='text-xl text-black font-bold  '>Follow us</h2>
          <div className=' mt-2  flex content-center space-x-2 '>
            <span className='text-blue-500 cursor-pointer hover:bg-white  hover:scale-110 transform duration-200 rounded-2xl'> <FaFacebook /></span>
            <span className='text-blue-500 cursor-pointer hover:bg-white  hover:scale-110 transform duration-200 rounded-2xl'><FaInstagram /></span>
            <span className='text-blue-500 cursor-pointer hover:bg-white rounded-2xl hover:scale-110 transform duration-200 '><FaTiktok /></span>
          </div>
        </div>

      </div>
      <hr className='border-2 text-black' />
      <p className='text-center'>@ 2026 GreenLand Nepal.All rights Reserved</p>
    </div>
  )
}

export default Footer