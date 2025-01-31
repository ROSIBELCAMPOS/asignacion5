import pool from '../conexion.js';

class principalModel {
    constructor() {
        
    }

    async mostrarUsuario(){
        const usuario = await pool.query('SELECT *FROM usuario');
        return usuario;
        
    }

    async crearUsuario({numcedula,nombre,apellido,carrera,sede,indiceacad,telefono}){
       const query = { 
        text: 'INSERT INTO usuario(numcedula,nombre,apellido,carrera,sede,indiceacad,telefono) values ($1,$2,$3,$4,$5,$6,$7) RETURNING *',
        values: [numcedula,nombre,apellido,carrera,sede,indiceacad,telefono]
        }
                
        const res = await pool.query(query);
        return res;

    }

    async ActualizarUsuario({numcedula,nombre,apellido,carrera,sede,indiceacad,telefono}){
        const query = { 
            text: 'UPDATE usuario SET numcedula=$1 nombre=$2, apellido=$3, carrera=$4, sede=$5, indiceacad=$6, telefono=$7 WHERE numerocedula=$1) values ($1,$2,$3,$4,$5,$6,$7)',
            values: [numcedula,nombre,apellido,carrera,sede,indiceacad,telefono]
            }

       const res =  await pool.query(query);
       return res;
    }

    async EliminarUsuario(res, req){
        const {numerocedula}=req.params;
        await pool.query('DELETE FROM usuario WHERE numerocedula=$1',[numerocedula]);
    }

    
}
export default new principalModel();