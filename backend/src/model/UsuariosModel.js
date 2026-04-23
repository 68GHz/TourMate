import {sql, poolConnection} from '../config/dataBase.js'

const listarUsuarios = async (req, res) => {
    try {
        const pool = await poolConnection
        const result = await pool.request().execute('spListarUsuarios')
        return result.recordset
    } catch (error) {
        console.error('Error al listar usuarios:', error)
        throw error
    }
}

export {listarUsuarios}