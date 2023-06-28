import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Components/Home'
import Chart from '../pages/Charts'
import ErrorPage from '../pages/ErrorPage'

const Paths = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/charts' element={<Chart/>}/>
        <Route path='/errorPage' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default Paths