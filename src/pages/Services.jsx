import React from 'react'
import ServicesItem from '../constants/Services'
const Services = () => {
  return (
    <div className='p-6 w-6xl mx-auto'>
      <h2 className='text-3xl mb-5 font-semibold text-center'>
        Our Services
      </h2>
      <div className='grid grid-cols-2 mb-5 md:grid-cols-3 mx-auto gap-6 '>
        {
            ServicesItem.map((plant)=>(
                      <div className=' hover:shadow-2xl rounded-2xl hover:bg-gray-400 duration-200 transform  flex flex-col items-center' key={plant.id}>
                        <img className='rounded-xl w-full h-50 mb-4 object-cover' src={plant.img} alt={plant.name} />
                        <h3 className=' text-2xl font-bold' > Plant name : {plant.name}</h3>
                        <p className=' text-2xl'>Prices Rs: <span className='font-bold'>{plant.price}</span></p>
                        <button className='  hover:bg-green-500 transition duration-200 ease-in-out hover:rounded-2xl   bg-green-600 px-2 w-full font-bold'>Add to Cart</button>
                      </div>
            )
            )
        }
      </div>
    </div>
  )
}

export default Services