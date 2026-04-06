import React from 'react'
const About = () => {
  return (
    <>
      <div className=''>
        <div className='mt-4 mx-4'
        >
          <h1 className='mb-5 text-green-500 text-center font-bold text-3xl'>About GreenLand Nepal</h1>
          <p className='mb-4 text-justify'><span className='font-bold'>GreenLand Nepal</span> is dedicated to bringing nature closer to your everyday life. We provide high-quality
            plants and greenery solutions that help create healthier,fresher,and more beautiful environments.
          </p>
          <p className='mb-5 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, non nulla. Vitae alias, nulla aliquid eaque sit ullam repellendus sequi esse iusto fugiat accusantium, autem officia reiciendis, ipsam delectus illo.</p>
          
          
          
          <div className=' gap-5 md:flex-row flex flex-col'>

            <div className='  border-2 w-1/2 h-50 rounded-3xl bg-green-50 border-green-400 '>
              <h1 className='text-green-500 text-2xl mx-5 my-5 max-w-2xl' >Our Mission</h1>
              <p className='mx-5'>To promote a greener lifestyle by providing sustainable,affordable,and healthy plants for everyone.</p>
            </div>

            <div className='w-1/2  border-2 rounded-3xl bg-green-50 border-green-400'>
              <h1 className='text-green-500 mx-5 my-5 text-2xl font-bold '>Why choose us</h1>
              <p className='mx-5'>To promote a greener lifestyle by providing sustainable,affordable,and healthy plants for everyone.</p>
            </div>
          </div>
          
          
          <h1 className='font-bold  text-green-400'>Our Values</h1>
          <ul className='list-disc ml-3'>
            <li>Sustainability and eco-friendly practise</li>
            <li>Customer first approach</li>
            <li>Quality and plant health</li>
            <li>Love for nature and greenery</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About