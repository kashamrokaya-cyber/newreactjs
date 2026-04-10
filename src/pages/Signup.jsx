import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    password: "",
    password: ""
  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    setData({ ...data, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.fullname || !data.email || !data.password || !data.password) {
      alert("required all data")
      return;
    }

    setData({
      fullname: "",
      email: "",
      password: "",
      password: ""
    })


  }

  return (
    <>
      <div className=' bg-green-400 h-[90vh] px-4 flex justify-center items-center'>
        <div className='w-full rounded-3xl bg-white max-w-xl p-8'>
          <h1 className='font-bold text-3xl text-center mb-6'>SignUp</h1>

          <form className='space-y-4 ' onSubmit={handleSubmit} >
            <input name='fullname' value={data.fullname} onChange={handleChange} type="text" placeholder='Fullname' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
            <input name='email' value={data.email} onChange={handleChange} type="email" placeholder='Email' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
            <input name='password' value={data.password} onChange={handleChange} type="password" placeholder='Passowrd' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
            <input name='password' value={data.password} onChange={handleChange} type="password" placeholder='Conform password' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />

            <button className='bg-green-400 w-full py-2.5  rounded-xl hover:bg-green-700  transition duratision-500 ease-in-out ' type='submit'> Send Message</button>
            <p>I have already an account. <Link className=" text-blue-500" to="/login">Login</Link></p>
          </form>
          
        </div>
      </div>
    </>
  )
}

export default Signup