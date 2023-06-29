import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Home'
import Table from '../pages/Table'
import Login from '../pages/Login'

const Paths = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default Paths