import express from 'express';
const router = express.Router();
import controlador from '../Controller/principalController.js'

router.get('/', controlador.mostrar);
router.post('/', controlador.crear);
router.put('/', controlador.actualizar);
router.delete('/:numerocedula', controlador.borrar);

export default router;