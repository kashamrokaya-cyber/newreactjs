import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import More from './pages/More'
import Login from './pages/Login'
import Scroller from './components/Scroller'

const App = () => {
const [cartItems,setCartItems]=useState([]);

const addToCart=(items)=>{
  setCartItems([...cartItems,item])
}

  return (
    <>

      <Navbar />
     <Scroller/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services  addCard={addToCart}/>} />

        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}

export default App