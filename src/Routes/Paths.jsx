import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'


const Paths = () => {
  return (
    <Routes>
      <Navbar/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default Paths