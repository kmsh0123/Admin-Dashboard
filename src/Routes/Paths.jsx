import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Home'
import ErrorPage from '../pages/ErrorPage'
import Table from '../pages/Table'
import Login from '../pages/Login'
import Profile from '../Components/Profile'
import Chart from '../pages/Charts'

const Paths = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/chart' element={<Chart/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default Paths