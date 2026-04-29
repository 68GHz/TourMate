import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const BackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const AuthLayout = () => {
    const navigate = useNavigate();

    // --- ESTADOS ---
    const [isLogin, setIsLogin] = useState(true);
    const [currentImage, setCurrentImage] = useState(0);
    const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });

    const images = ['/about1.jpg', '/about2.jpg', '/about3.jpg'];

    // --- EFECTOS ---
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    // --- MANEJADORES ---
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // src/pages/Auth.jsx

const handleSubmit = async (e) => {
    e.preventDefault();

    // Definimos la URL base para no repetir
    const url = `http://localhost:4000/api/auth/${isLogin ? 'login' : 'register'}`;

    try {
        
        const response = await axios.post(url, formData);
        
        
        const data = response.data;

        // status fue 2xx (Éxito)
        if (isLogin) {
            console.log("Login correcto:", data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/'); 
        } else {
            alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
            setIsLogin(true);
            setFormData({ nombre: '', email: '', password: '' });
        }

    } catch (error) {
        // catch cualquier respuesta que no sea 2xx (401, 404, 500, etc.)
        if (error.response) {
            // El servidor respondió con un error
            alert(error.response.data.error || "Hubo un problema con la solicitud");
        } else if (error.request) {
            // La petición se hizo pero no hubo respuesta
            alert("No se pudo conectar con el servidor. Revisa que el backend esté encendido.");
        } else {
            // Error al configurar la petición
            console.error("Error:", error.message);
        }
    }
};

    return (
        <div className="auth-outer-wrapper">
            {/* Fondo de pantalla */}
            <div className="auth-background-layer">
                <img src="/loginBackground.jpg" alt="Background" className='background-image' />
            </div>

            <div className="auth-page-container">
                <div className="auth-card-wrapper">
                    
                    {/* Lado Izquierdo: Carrusel */}
                    <div className="auth-carousel">
                        <Link to="/" className="back-home-btn">
                            <BackIcon /><span>Volver al Home</span>
                        </Link>
                        <img src={images[currentImage]} alt="TourMate" className="carousel-image"/>
                        <div className="carousel-overlay">
                            <h2>Capturando Momentos,<br/>Creando Recuerdos</h2>
                            <div className="pagination-dots">
                                {images.map((_, index) => (
                                    <button 
                                        key={index}
                                        className={`dot ${index === currentImage ? 'active' : ''}`}
                                        onClick={() => setCurrentImage(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Lado Derecho: Formulario */}
                    <div className="auth-form-section">
                        <div className="form-header">
                            <div className="form-top-toggle">
                                <p>
                                    {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
                                    <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
                                        {isLogin ? "Crear cuenta" : "Inicia sesión"}
                                    </button>
                                </p>
                            </div>
                            <div className="form-logo-container">
                                <img src="/logo.png" alt="Logo" className="form-logo"/>
                            </div>
                        </div>

                        <div className="form-body">
                            <h1>{isLogin ? "Iniciar Sesión" : "Crear una cuenta"}</h1>
                            <form onSubmit={handleSubmit}>
                                {!isLogin && (
                                    <div className="input-group">
                                        <label>Nombre completo</label>
                                        <input 
                                            name="nombre" 
                                            type="text" 
                                            placeholder="Ej. Juan Pérez" 
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                )}

                                <div className="input-group">
                                    <label>Correo electrónico</label>
                                    <input 
                                        name="email" 
                                        type="email" 
                                        placeholder="tu@email.com" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Contraseña</label>
                                    <input 
                                        name="password" 
                                        type="password" 
                                        placeholder="••••••••" 
                                        value={formData.password}
                                        onChange={handleChange}
                                        required 
                                    />
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
    );
};

export default AuthLayout;