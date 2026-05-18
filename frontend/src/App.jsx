import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth-context.jsx'
import Header from './components/Navbar'
import Home from './pages/Home'
import AuthLayout from './components/Auth'
import './App.css'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthLayout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App