import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'

import Crud from './componnents/Crud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Crud />
    </>
  )
}

export default App
