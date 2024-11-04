import { Router } from "express";
import { AdministrativosController } from "../controllers/AdministrativosController.js";

const router = Router();
const controller = new AdministrativosController();

// Rutas para tbl_administrativos
router.get("/administrativos", controller.getAdministrativos);
router.get("/administrativos/:id", controller.getAdministrativoById);
router.post("/administrativos", controller.createAdministrativo);
router.put("/administrativos/:id", controller.updateAdministrativo);
router.delete("/administrativos/:id", controller.deleteAdministrativo);

// Rutas para tbl_cargos_administrativos
router.get("/cargos", controller.getCargosAdministrativos);
router.get("/cargos/:id", controller.getCargoAdministrativoById);
router.post("/cargos", controller.createCargoAdministrativo);
router.put("/cargos/:id", controller.updateCargoAdministrativo);
router.delete("/cargos/:id", controller.deleteCargoAdministrativo);

// Rutas para tbl_niveles_acceso
router.get("/niveles-acceso", controller.getNivelesAcceso);
router.get("/niveles-acceso/:id", controller.getNivelAccesoById);
router.post("/niveles-acceso", controller.createNivelAcceso);
router.put("/niveles-acceso/:id", controller.updateNivelAcceso);
router.delete("/niveles-acceso/:id", controller.deleteNivelAcceso);

// Rutas para tbl_departamentos
router.get("/departamentos", controller.getDepartamentos);
router.get("/departamentos/:id", controller.getDepartamentoById);
router.post("/departamentos", controller.createDepartamento);
router.put("/departamentos/:id", controller.updateDepartamento);
router.delete("/departamentos/:id", controller.deleteDepartamento);

export default router;
