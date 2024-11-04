import { Router } from "express";
import { CredencialesController } from "../controllers/CredencialesController.js";

const router = Router();
const credencialesController = new CredencialesController();

router.get("/credenciales", credencialesController.getCredenciales.bind(credencialesController));
router.get("/credenciales/:id", credencialesController.getCredencialById.bind(credencialesController));
router.post("/credenciales", credencialesController.createCredencial.bind(credencialesController));
router.put("/credenciales/:id", credencialesController.updateCredencial.bind(credencialesController));
router.delete("/credenciales/:id", credencialesController.deleteCredencial.bind(credencialesController));

export default router;
