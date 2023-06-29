import { useState } from 'react'
import Paths from './Routes/Paths'
import User from './Components/User'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Table from './pages/Table'
import Home from './Components/Home'

function App() {
  return (
    <div className="font-poppins">
      <Navbar/>
      <User/>
     <Home/>
    </div>
  )
}

export default App
