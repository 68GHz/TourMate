import { getUsuarios } from "../controller/UsuariosController.js";
import express from "express";

const router = express.Router();

router.get('/usuarios', getUsuarios)

export default router