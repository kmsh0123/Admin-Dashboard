import { useState } from 'react'
import Paths from './Routes/Paths'
import Table from './pages/Table'
import Home from './Components/Home'

function App() {

  return (
    <div className='font-poppins'>
      <Paths/>
      <Home/>
    </div>
  )
}

export default App
