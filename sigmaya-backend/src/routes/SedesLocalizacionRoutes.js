import { Router } from "express";
import { SedesLocalizacionController } from "../controllers/SedesLocalizacionController.js";

const router = Router();
const controller = new SedesLocalizacionController();

// Rutas para sedes
router.get("/sedes", controller.getSedes.bind(controller));
router.get("/sedes/:id", controller.getSedeById.bind(controller));
router.post("/sedes", controller.createSede.bind(controller));
router.put("/sedes/:id", controller.updateSede.bind(controller));
router.delete("/sedes/:id", controller.deleteSede.bind(controller));

// Rutas para países
router.get("/paises", controller.getPaises.bind(controller));
router.get("/paises/:id", controller.getPaisById.bind(controller));
router.post("/paises", controller.createPais.bind(controller));
router.put("/paises/:id", controller.updatePais.bind(controller));
router.delete("/paises/:id", controller.deletePais.bind(controller));

// Rutas para regiones
router.get("/regiones", controller.getRegiones.bind(controller));
router.get("/regiones/:id", controller.getRegionById.bind(controller));
router.post("/regiones", controller.createRegion.bind(controller));
router.put("/regiones/:id", controller.updateRegion.bind(controller));
router.delete("/regiones/:id", controller.deleteRegion.bind(controller));

// Rutas para ciudades
router.get("/ciudades", controller.getCiudades.bind(controller));
router.get("/ciudades/:id", controller.getCiudadById.bind(controller));
router.post("/ciudades", controller.createCiudad.bind(controller));
router.put("/ciudades/:id", controller.updateCiudad.bind(controller));
router.delete("/ciudades/:id", controller.deleteCiudad.bind(controller));

export default router;
