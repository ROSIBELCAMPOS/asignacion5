import modelo from '../Model/principalModel.js';

class principalController {
    constructor() {
        
    }

    async mostrar(_req, res){
        try {
           
           const user = await modelo.mostrarUsuario();
           console.log(user.rows);
           return res.status(201).json({status: 'ok'});
           
            
        } catch (e) {
            res.status(500).send(e);
            
            
        }
    }
    async crear(req, res){
        try{
            const {numerocedula,
                nombre, 
                apellido, 
                carrera, 
                sede, 
                indiceAcad,
                telefono }= req.body;
                
            const usuario = await modelo.crearUsuario(req.body);
            //res.send(usuario.rows);
            res.status(201).json({status: 'ok'});
            
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    async actualizar(res, req){
        try {
           const{numerocedula,
                nombre,
                apellido,
                carrera,
                sede,
                indiceAcad,
                telefono}=req.body;

            const usuario = await modelo.ActualizarUsuario(req.body);
            res.status(201).json({status: 'ok'});
            console.log(usuario.rows);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async borrar(req, res){
        try {
           /* const {numerocedula}=req.params;
            await modelo.EliminarUsuario(res, req);*/
            res.status(201).json({status: 'ok'});
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
export default new principalController();
