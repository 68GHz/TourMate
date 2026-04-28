import { getUsuarios, register, login } from "../controller/UsuariosController.js";
import express from "express";

const router = express.Router();

// Ruta existente
router.get('/usuarios', getUsuarios);

// NUEVAS RUTAS PARA AUTH
router.post('/register', register); // Esto crea: /api/register
router.post('/login', login);       // Esto crea: /api/login

export default router;