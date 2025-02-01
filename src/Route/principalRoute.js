import express from 'express';
const router = express.Router();
import controlador from '../Controller/principalController.js'

router.get('/', controlador.getUsers);
router.post('/', controlador.create);
router.put('/', controlador.update);
router.delete('/:numerocedula', controlador.delete);

export default router;