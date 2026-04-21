import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

// Para el icono de volver, puedes usar emojis o una librería de iconos.
// Aquí usaré un ícono de texto genérico para simplicidad.
const BackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const AuthLayout = () => {
    const navigate = useNavigate();

    // Estado para alternar entre Login y Registro
    const [isLogin, setIsLogin] = useState(true);
    
    // Estado para el carrusel de imágenes
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        '/about1.jpg', // Reemplaza con tus imágenes reales
        '/about2.jpg',
        '/about3.jpg'
    ];

  // Efecto para cambiar la imagen cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer); // Limpieza del intervalo
    }, [images.length]);

    return (
        <>
            <div className="auth-outer-wrapper">
                <div className="auth-background-layer">
                    <img src="/loginBackground.jpg" alt="Background" className='background-image' />
                </div>
            

            <div className="auth-page-container">
                {/* Contenedor principal con el borde de color personalizado */}
            <div className="auth-card-wrapper">
        
                {/* Lado Izquierdo: Carrusel de Imágenes */}
                <div className="auth-carousel">
                    {/* BOTÓN "VOLVER AL HOME" - Esquina superior derecha del carrusel */}
                    <Link to="/" className="back-home-btn"><BackIcon /><span>Volver al Home</span></Link>

                    <img src={images[currentImage]} alt="Explora con TourMate" className="carousel-image"/>
                    <div className="carousel-overlay">
                        <h2>Capturando Momentos,<br/>Creando Recuerdos</h2>
                        <div className="pagination-dots">
                            {images.map((_, index) => (
                                <button key={index}
                                className={`dot ${index === currentImage ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                                aria-label={`Ir a imagen ${index + 1}`}/>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Formulario interactivo en gris claro */}
                <div className="auth-form-section">
                    {/* PARTE SUPERIOR REESTRUCTURADA */}
                    <div className="form-header">
                        {/* El enlace de alternancia se mueve a la esquina superior derecha */}
                        <div className="form-top-toggle">
                            <p>
                            {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
                            <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Crear cuenta" : "Inicia sesión"}
                            </button>
                            </p>
                        </div>

                        {/* LOGO DE TOURMATE - Centrado debajo del enlace de alternancia */}
                        <div className="form-logo-container">
                            <img src="/logo.png" alt="TourMate Logo" className="form-logo"/>
                        </div>
                    </div>

                    <div className="form-body">
                        <h1>{isLogin ? "Iniciar Sesión" : "Crear una cuenta"}</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="input-group">
                                <label>Nombre completo</label>
                                <input type="text" placeholder="Ej. Juan Pérez" required />
                            </div>
                        )}

                        <div className="input-group">
                            <label>Correo electrónico</label>
                            <input type="email" placeholder="tu@email.com" required />
                        </div>

                        <div className="input-group">
                            <label>Contraseña</label>
                            <input type="password" placeholder="••••••••" required />
                        </div>

                            <button type="submit" className="primary-submit-btn">
                            {isLogin ? "Ingresar" : "Crear cuenta"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default AuthLayout;