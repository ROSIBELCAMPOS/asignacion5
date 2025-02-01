import modelo from '../Model/principalModel.js';

class principalController {

    // Mostrar todos los usuarios
    async getUsers(req, res) {
        try {
            const users = await modelo.mostrarUsuario();
            // Verificar si hay usuarios
            if (!users.rows.length) {
                return res.status(404).json({ message: 'No se encontraron usuarios.' });
            }
            return res.status(200).json({ users: users.rows });
        } catch (e) {
            console.error("Error al obtener usuarios:", e);
            return res.status(500).json({ message: 'Error interno del servidor', error: e.message });
        }
    }

    // Crear un nuevo usuario
    async create(req, res) {
            // Imprimir los datos que llegan en el body de la solicitud
            console.log('Datos recibidos en la API:', req.body);
        try {
            const { numerocedula, nombre, apellido, carrera, sede, indiceAcad, telefono } = req.body;
            
            // Validación básica
            if (!numerocedula || !nombre || !apellido || !carrera) {
                return res.status(400).json({ message: 'Faltan campos requeridos.' });
            }

            const usuario = await modelo.crearUsuario(req.body);
            return res.status(201).json({ message: 'Usuario creado con éxito', usuario: usuario.rows[0] });
        } catch (e) {
            console.error("Error al crear usuario:", e);
            return res.status(500).json({ message: 'Error interno del servidor', error: e.message });
        }
    }

    // Actualizar un usuario existente
    async update(req, res) {
        try {
            const { numerocedula, nombre, apellido, carrera, sede, indiceAcad, telefono } = req.body;

            if (!numerocedula) {
                return res.status(400).json({ message: 'La cédula es requerida para la actualización.' });
            }

            const usuario = await modelo.ActualizarUsuario(req.body);
            if (!usuario.rowCount) {
                return res.status(404).json({ message: 'Usuario no encontrado para actualizar.' });
            }

            return res.status(200).json({ message: 'Usuario actualizado con éxito', usuario: usuario.rows[0] });
        } catch (e) {
            console.error("Error al actualizar usuario:", e);
            return res.status(500).json({ message: 'Error interno del servidor', error: e.message });
        }
    }

    // Borrar un usuario
    async delete(req, res) {
        try {
            const { numerocedula } = req.params;

            if (!numerocedula) {
                return res.status(400).json({ message: 'La cédula es requerida para eliminar el usuario.' });
            }

            const usuario = await modelo.EliminarUsuario(numerocedula);
            if (!usuario.rowCount) {
                return res.status(404).json({ message: 'Usuario no encontrado para eliminar.' });
            }

            return res.status(200).json({ message: 'Usuario eliminado con éxito' });
        } catch (e) {
            console.error("Error al eliminar usuario:", e);
            return res.status(500).json({ message: 'Error interno del servidor', error: e.message });
        }
    }
}

export default new principalController();
