import { Router } from "express";
import { UsuariosController } from "../controllers/UsuariosController";

const router = Router();
const controller = new UsuariosController();

// Usuarios
router.get('/usuarios', controller.getUsuarios);
router.get('/usuarios/:id', controller.getUsuarioById);
router.post('/usuarios', controller.createUsuario);
router.put('/usuarios/:id', controller.updateUsuario);
router.delete('/usuarios/:id', controller.deleteUsuario);

// Tipos de documento
router.get('/tipos-documento', controller.getTiposDocumento);
router.get('/tipos-documento/:id', controller.getTipoDocumentoById);
router.post('/tipos-documento', controller.createTipoDocumento);
router.put('/tipos-documento/:id', controller.updateTipoDocumento);
router.delete('/tipos-documento/:id', controller.deleteTipoDocumento);

// Identidades de género
router.get('/identidades-genero', controller.getIdentidadesGenero);
router.get('/identidades-genero/:id', controller.getIdentidadGeneroById);
router.post('/identidades-genero', controller.createIdentidadGenero);
router.put('/identidades-genero/:id', controller.updateIdentidadGenero);
router.delete('/identidades-genero/:id', controller.deleteIdentidadGenero);

// Grupos étnicos
router.get('/grupos-etnicos', controller.getGruposEtnico);
router.get('/grupos-etnicos/:id', controller.getGrupoEtnicoById);
router.post('/grupos-etnicos', controller.createGrupoEtnico);
router.put('/grupos-etnicos/:id', controller.updateGrupoEtnico);
router.delete('/grupos-etnicos/:id', controller.deleteGrupoEtnico);

// Estados civiles
router.get('/estados-civil', controller.getEstadosCivil);
router.get('/estados-civil/:id', controller.getEstadoCivilById);
router.post('/estados-civil', controller.createEstadoCivil);
router.put('/estados-civil/:id', controller.updateEstadoCivil);
router.delete('/estados-civil/:id', controller.deleteEstadoCivil);

// Estados
router.get('/estados', controller.getEstados);
router.get('/estados/:id', controller.getEstadoById);
router.post('/estados', controller.createEstado);
router.put('/estados/:id', controller.updateEstado);
router.delete('/estados/:id', controller.deleteEstado);

export default router;
