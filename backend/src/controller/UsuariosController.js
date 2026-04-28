import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { listarUsuarios } from '../model/UsuariosModel.js';
import { crearUsuario } from '../model/UsuariosModel.js'; 

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await listarUsuarios(); // Llama al SP de SQL
        res.status(200).json(usuarios);         // Devuelve la lista en formato JSON
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios de la base de datos" });
    }
};

export const register = async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
        // 1. Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // 2. Guardar en la base de datos usando el modelo
        await crearUsuario(nombre, email, hashedPassword);
        
        // 3. Responder al frontend
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ error: "Error interno al guardar en la base de datos" });
    }
};

export const login = async (req, res) => {
    try {
        // Lógica de login pendiente...
        res.status(200).json({ message: "Login en construcción" });
    } catch (error) {
        res.status(500).json({ error: "Error al loguear" });
    }
};