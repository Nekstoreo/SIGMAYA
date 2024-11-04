import { Router } from 'express';
import { ModalidadesYTiposContratoController } from '../controllers/ModalidadesTiposContratoController';

const router = Router();
const controller = new ModalidadesYTiposContratoController();

// Rutas para modalidades
router.get('/modalidades', controller.getModalidades);
router.get('/modalidades/:id', controller.getModalidadById);
router.post('/modalidades', controller.createModalidad);
router.put('/modalidades/:id', controller.updateModalidad);
router.delete('/modalidades/:id', controller.deleteModalidad);

// Rutas para tipos de contrato
router.get('/tiposContrato', controller.getTiposContrato);
router.get('/tiposContrato/:id', controller.getTipoContratoById);
router.post('/tiposContrato', controller.createTipoContrato);
router.put('/tiposContrato/:id', controller.updateTipoContrato);
router.delete('/tiposContrato/:id', controller.deleteTipoContrato);

export default router;
