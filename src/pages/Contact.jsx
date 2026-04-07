import React, { useState } from 'react'

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.phone || !data.address || !data.message) {
      alert("at first fill all blanks")
      return;
    }
    if (!/^[0-9]{10}$/.test(data.phone)) {
      alert("number must be 10");
      return;

    }


    setData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: ""

    })
    alert("successfully submitted")

  }

  return (
    <div className=' bg-green-400 px-4 flex justify-center items-center'>
      <div className='w-full bg-white max-w-xl p-8'>
        <h1 className='text-center font-bold text-3xl text-green-500'>Contact Us</h1>
        <p className='text-center  mt-2'>We'd like to hear from you. Please fill out the form below.</p>

        <form className='space-y-4 ' onSubmit={handleSubmit}>
          <input name='name' value={data.name} onChange={handleChange} type="text" placeholder='FullName' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
          <input name='email' value={data.email} onChange={handleChange} type="email" placeholder='Email' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
          <input name='phone' value={data.phone} onChange={handleChange} type="number" placeholder='number' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
          <input name='address' value={data.address} onChange={handleChange} type="text" placeholder='Address' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
          <textarea name='message' value={data.message} onChange={handleChange} type="text" placeholder='Enter your messages' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400'></textarea>
          <button className='bg-green-400 w-full py-2.5  rounded-xl hover:bg-green-700  transition duratision-500 ease-in-out ' type='submit'> Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact