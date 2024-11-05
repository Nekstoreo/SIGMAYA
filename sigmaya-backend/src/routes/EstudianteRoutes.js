import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import EstudianteController from "../controllers/EstudianteController.js";

const router = express.Router();

// Ruta para obtener la información del estudiante
router.get("/info", authMiddleware(),EstudianteController.getStudentInfo);

// Ruta para obtener los periodos y cursos inscritos del estudiante
router.get("/periods", authMiddleware(), EstudianteController.getStudentPeriods);

// Ruta para obtener los detalles de un curso específico
router.get("/course/:nrc", authMiddleware(), EstudianteController.getCourseDetails);

export default router;