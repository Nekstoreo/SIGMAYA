import { Router } from 'express';
import { PrerrequisitosYDetallesCalificacionesController } from '../controllers/PrerrequisitosDetallesCalificacionesController.js';

const router = Router();
const controller = new PrerrequisitosYDetallesCalificacionesController();

// Rutas para tbl_detalles_calificaciones
router.get('/detalles', controller.getDetallesCalificaciones);
router.get('/detalles/:id', controller.getDetalleCalificacionById);
router.post('/detalles', controller.createDetalleCalificacion);
router.put('/detalles/:id', controller.updateDetalleCalificacion);
router.delete('/detalles/:id', controller.deleteDetalleCalificacion);

// Rutas para tbl_prerrequisitos
router.get('/prerrequisitos', controller.getPrerrequisitos);
router.get('/prerrequisitos/:id', controller.getPrerrequisitoById);
router.post('/prerrequisitos', controller.createPrerrequisito);
router.put('/prerrequisitos/:id', controller.updatePrerrequisito);
router.delete('/prerrequisitos/:id', controller.deletePrerrequisito);

export default router;
