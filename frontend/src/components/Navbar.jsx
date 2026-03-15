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

            <div className="flex gap-6 ml-30">
                <Link to="/" className="hover:text-blue-600">Inicio</Link>
                <Link to="/destinos" className="hover:text-blue-600">Destinos</Link>
                <Link to="/login" className="hover:text-blue-600">Iniciar Sesion</Link>
            </div>
        </nav>
    </header>
    );
}
/*
bg = background
shadow-md = sombra media
max-w-6xl = ancho maximo de 6xl
mx-auto = margen horizontal automatico (centrar)
flex = display flex
justify-between = justificar contenido entre los extremos
items-center = alinear items al centro verticalmente
py-4 = padding vertical de 4

gap-2 = espacio entre elementos de 2
w-8 h-8 = ancho y alto de 8
font-bold = texto en negrita
text-lg = tamaño de texto large
ml-30 = margen izquierdo de 30
hover:text-blue-600 = al pasar el mouse el texto se vuelve azul 600
*/
























