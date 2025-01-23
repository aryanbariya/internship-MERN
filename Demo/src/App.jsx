import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Screen from './Screen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-white flex '>
      <Navbar />
      <Screen/>
    </div>
  

    </>
  )
}

export default App
