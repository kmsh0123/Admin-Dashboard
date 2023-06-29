import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Home'
import Chart from '../pages/Charts'
import ErrorPage from '../pages/ErrorPage'
import Navbar from '../Components/Navbar'
import Table from '../pages/Table'
import Login from '../pages/Login'

const Paths = () => {
  return (
    <Routes>
      <Navbar/>
        <Route path='/' element={<Home/>}/>
        <Route path='/charts' element={<Chart/>}/>
        <Route path='/errorPage' element={<ErrorPage/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Paths