import React from 'react'
import pic from '../assets/homeimage.jpg'
import Slider from '../components/Slider'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
const Home = () => {
  const socilaLinks=[
    {
      href:'https://www.facebook.com/',
      icon:<FaFacebook/>
    },
    {
      href:'https://www.instagram.com/?hl=en',
      icon:<FaInstagram/>
    },
    {
      href:'https://www.tiktok.com/en/',
      icon:<FaTiktok/>
    }
  ]

  return (
    <>

      <div>
        <div className='flex md:flex-row flex-col'>
          <div className='px-5 py-12 items-center md:w-1/2  '>
            <h2 className='pt-30 font-bold text-green-400 md:text-3xl'>Welcome to my website</h2>
            <p className='md:text-xl text-justify text-gray-400 '>All are related in nature </p>
            <div className='flex gap-6 mr-40'>
              {
                socilaLinks.map((link,index)=>(
                  <a key={index}
                   href={link.href}
                   target='_blank'
                   className=' p-3 rounded-full hover:scale-105 hover:bg-green-400 transition duration-500 ease-in-out'
                   >
                    {link.icon}
                   </a>
                ))
              }
            </div>
          </div>
          <div className=" md:w-1/2 p-4 w-full ">

            <Slider />
          </div>
        </div>


      </div>


    </>
  )
}

export default Home