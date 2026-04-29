import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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

    // src/pages/Auth.jsx (o donde tengas el componente)

const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Definimos la URL completa de forma clara
    // Asegúrate de que coincida con tu backend (localhost:4000/api/auth/...)
    const baseUrl = 'http://localhost:4000/api/auth';
    const endpoint = isLogin ? `${baseUrl}/login` : `${baseUrl}/register`;

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        // 2. Primero verificamos si la respuesta del servidor NO fue exitosa (401, 404, 500, etc)
        if (!response.ok) {
            // Aquí atrapará el "Contraseña incorrecta" del backend (Status 401)
            alert(data.error || "Hubo un problema con la solicitud");
            return; // Detenemos la ejecución aquí
        }

        // 3. Si llegamos aquí, la respuesta es exitosa (Status 200 o 201)
        if (isLogin) {
            // Lógica de Login exitoso
            console.log("Login correcto:", data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/'); 
        } else {
            // Lógica de Registro exitoso
            alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
            setIsLogin(true); // Cambiamos a modo login
            setFormData({ nombre: '', email: '', password: '' }); // Limpiamos el form
        }

    } catch (error) {
        console.error("Error de conexión:", error);
        alert("No se pudo conectar con el servidor. Revisa que el backend esté encendido.");
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