import { getDestinos } from "../controller/DestinosController.js";
import express from "express";

const router = express.Router();
router.get('/destinos', getDestinos)

export default router
