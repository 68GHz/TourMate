import {sql, poolConnection} from '../config/dataBase.js'

const listarDestinos = async (req, res) => {
    try {
        const pool = await poolConnection
        const result = await pool.request().execute('spListarDestinos')
        return result.recordset
    } catch (error) {
        console.error('Error al listar destinos:', error)
        throw error
    }
}

export {listarDestinos}