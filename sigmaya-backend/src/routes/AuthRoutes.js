import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";

const router = Router();
const authController = new AuthController();

router.post("/login", authController.login.bind(authController));
router.put("/update-password", authController.updatePassword.bind(authController));

export default router;