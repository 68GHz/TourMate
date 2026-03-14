import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
    <header className="bg-gray-200 shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-4">

            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="TourMate Logo" className="w-8 h-8"/>
                <span className="font-bold text-lg">TourMate</span>
            </div>

            <div className="flex gap-6">
                <Link to="/" className="hover:text-blue-600">Inicio</Link>
                <Link to="/destinos" className="hover:text-blue-600">Destinos</Link>
                <Link to="/login" className="hover:text-blue-600">Iniciar Sesion</Link>
            </div>
        </nav>
    </header>
    );
}
