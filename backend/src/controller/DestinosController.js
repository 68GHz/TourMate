import { listarDestinos } from "../model/DestinosModel.js";

const getDestinos = async (req, res) => {
    try {
        const destinos = await listarDestinos()
        res.status(200).json({
            success: true,
            data: destinos
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener destinos',
            error: error.message
        })
    }
}

export { getDestinos }