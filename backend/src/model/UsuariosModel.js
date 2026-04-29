import { sql, poolConnection } from '../config/dataBase.js';

const listarUsuarios = async () => {
    try {
        const pool = await poolConnection;
        const result = await pool.request().execute('spListarUsuarios');
        return result.recordset;
    } catch (error) {
        console.error('Error al listar usuarios:', error);
        throw error;
    }
};

// NUEVA FUNCIÓN: Ejecuta el SP para registrar
const crearUsuario = async (nombre, email, password) => {
    try {
        const pool = await poolConnection;
        const result = await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            // Asegúrate de que este procedimiento almacenado exista en tu SQL Server
            .execute('spRegistrarUsuario'); 
        return result;
    } catch (error) {
        console.error('Error en DB al crear usuario:', error);
        throw error;
    }
};

const buscarUsuarioPorEmail = async (email) => {
    try {
        const pool = await poolConnection;
        const result = await pool.request()
            .input('email', sql.VarChar, email)
            .execute('spBuscarUsuarioPorEmail');
        
        // Retornamos el primer registro si existe
        return result.recordset[0]; 
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        throw error;
    }
};

export { listarUsuarios, crearUsuario, buscarUsuarioPorEmail };