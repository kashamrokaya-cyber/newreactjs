import React from 'react'

import navLinks from '../constants/data'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-blue-500 rounded-xl'>
            <div className='flex justify-between items-center mx-2'>
                <NavLink to='/' className='flex items-center '>
                    <img src="/Logo.jpg" alt="logo" className='w-20 h-20 rounded-[50%]'/>
                    <h1 className='text-3xl'>Home Food</h1>
                </NavLink>

                <ul className='flex gap-5 text-3xl'>
                    {
                        navLinks.map((link,index)=>(
                            <li key={index}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </nav>
    )
}

export default Navbar