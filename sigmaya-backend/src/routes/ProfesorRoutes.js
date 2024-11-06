// src/routes/ProfesorRoutes.js

import { Router } from "express";
import ProfesorController from "../controllers/ProfesorController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const profesorController = new ProfesorController();

const router = Router();
// Ruta para obtener las secciones de un profesor
router.get(
  "/secciones",
  authMiddleware(),
  profesorController.getSections.bind(profesorController)
);

// Ruta para obtener los estudiantes de una sección
router.get(
  "/secciones/:nrc/estudiantes",
  authMiddleware(),
  profesorController.getStudents.bind(profesorController)
);

// Ruta para actualizar la calificación de un estudiante
router.put(
  "/secciones/:nrc/estudiantes/:estudianteId/calificacion",
  authMiddleware(),
  profesorController.updateGrade.bind(profesorController)
);

export default router;
