import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    setData({ ...data, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      alert("all are required");
      return;
    }
    setData({
      email: "",
      password: ""
    })

    alert("login successfully")
  }



  return (
    <>
      <div className=' bg-green-400 h-[90vh] px-4 flex justify-center items-center'>
        <div className='w-full rounded-3xl bg-white max-w-xl p-8'>
          <h1 className='font-bold text-3xl text-center mb-6'>Login</h1>

          <form className='space-y-4 ' onSubmit={handleSubmit}>

            <input name='email' value={data.email} onChange={handleChange} type="email" placeholder='Email Address' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />
            <input name='password' value={data.password} onChange={handleChange} type="password" placeholder='Passowrd' className='w-full px-4 py-3 rounded-xl border border-gray-400 outline-none hover:border-green-400' />


            <button className='bg-green-400 w-full py-2.5  rounded-xl hover:bg-green-700  transition duratision-500 ease-in-out ' type='submit'> Send Message</button>
              <p>If you don't have an account. <Link to='/signup' className='text-blue-500' >Signup</Link></p>
          </form>

         
        </div>
      </div>

    </>
  )
}

export default Login