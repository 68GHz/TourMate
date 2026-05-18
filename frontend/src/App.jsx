import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth-context.jsx'
import Header from './components/Navbar'
import Home from './pages/Home'
import AuthLayout from './components/Auth'
import Dashboard from './pages/Dashboard.jsx'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout.jsx'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthLayout />} />
          
          <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App