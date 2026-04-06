import React, { useState } from 'react'
import About from '../pages/About';
import navLinks from '../constants/data'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    return (
        <nav className=' bg-green-500 rounded-xl   text-white w-full md:p-4 '>
            <div className='flex justify-between items-center mx-2'>
                <NavLink to='/' className='flex items-center md:flex-row gap-1 '>
                    <img src="/Logo.jpg" alt="logo" className='w-20 h-20 rounded-[50%]' />
                    <h1 className='text-3xl'>Food Home</h1>
                </NavLink>
                <button className='md:hidden text-2xl font-bold bg-blue-500 text-white px-2 py-2 hover:scale-105 duration-500 ease-initial ' onClick={()=>setOpen(!open)}>
                   {open?<HiOutlineX/>:<HiOutlineMenu/>}
                </button>
                 <ul className=' md:flex relative space-x-5 hidden right-20 font-bold '>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))
                    }
                    {
                        location.pathname === "/login" ? (
                            <Link className='bg-green-500' to='/signup'> Signup</Link>
                        ) : (
                            <Link className='bg-green-400 rounded-[3px]' to='/login'>Login</Link>
                        )
                    }
                </ul>

              

                   {
                    open &&(  <ul className='w-50 gap-4 md:hidden flex flex-col  space-y-5 font-bold absolute left-0 top-20 bg-white text-black   '>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))
                    }
                    {
                        location.pathname === "/login" ? (
                            <Link className='bg-green-500' to='/signup'> Signup</Link>
                        ) : (
                            <Link className='bg-green-400 rounded-[3px]' to='/login'>Login</Link>
                        )
                    }
                </ul>)
                   }


            </div>

        </nav>
    )
}

export default Navbar