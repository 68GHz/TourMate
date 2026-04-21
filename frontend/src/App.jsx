import { useState } from 'react'
import Home from './pages/Home'
import Auth from './components/Auth'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
