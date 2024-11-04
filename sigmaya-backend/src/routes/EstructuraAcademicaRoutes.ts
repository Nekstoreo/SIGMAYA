import { Router } from "express";
import { EstructuraAcademicaController } from "../controllers/EstructuraAcademicaController";

const router = Router();
const controller = new EstructuraAcademicaController();

// Programas Académicos
router.get("/programas", controller.getProgramasAcademicos);
router.get("/programas/:id", controller.getProgramaAcademicoById);
router.post("/programas", controller.createProgramaAcademico);
router.put("/programas/:id", controller.updateProgramaAcademico);
router.delete("/programas/:id", controller.deleteProgramaAcademico);

// Niveles Académicos
router.get("/niveles-academicos", controller.getNivelesAcademicos);
router.get("/niveles-academicos/:id", controller.getNivelAcademicoById);
router.post("/niveles-academicos", controller.createNivelAcademico);
router.put("/niveles-academicos/:id", controller.updateNivelAcademico);
router.delete("/niveles-academicos/:id", controller.deleteNivelAcademico);

// Materias
router.get("/materias", controller.getMaterias);
router.get("/materias/:id", controller.getMateriaById);
router.post("/materias", controller.createMateria);
router.put("/materias/:id", controller.updateMateria);
router.delete("/materias/:id", controller.deleteMateria);

// Cursos
router.get("/cursos", controller.getCursos);
router.get("/cursos/:id", controller.getCursoById);
router.post("/cursos", controller.createCurso);
router.put("/cursos/:id", controller.updateCurso);
router.delete("/cursos/:id", controller.deleteCurso);

// Secciones
router.get("/secciones", controller.getSecciones);
router.get("/secciones/:id", controller.getSeccionById);
router.post("/secciones", controller.createSeccion);
router.put("/secciones/:id", controller.updateSeccion);
router.delete("/secciones/:id", controller.deleteSeccion);

// Periodos Académicos
router.get("/periodos", controller.getPeriodosAcademicos);
router.get("/periodos/:id", controller.getPeriodoAcademicoById);
router.post("/periodos", controller.createPeriodoAcademico);
router.put("/periodos/:id", controller.updatePeriodoAcademico);
router.delete("/periodos/:id", controller.deletePeriodoAcademico);

// Tipos de Admisión
router.get("/tipos-admision", controller.getTiposAdmision);
router.get("/tipos-admision/:id", controller.getTipoAdmisionById);
router.post("/tipos-admision", controller.createTipoAdmision);
router.put("/tipos-admision/:id", controller.updateTipoAdmision);
router.delete("/tipos-admision/:id", controller.deleteTipoAdmision);

// Estados de Estudiante
router.get("/estados-estudiante", controller.getEstadosEstudiante);
router.get("/estados-estudiante/:id", controller.getEstadoEstudianteById);
router.post("/estados-estudiante", controller.createEstadoEstudiante);
router.put("/estados-estudiante/:id", controller.updateEstadoEstudiante);
router.delete("/estados-estudiante/:id", controller.deleteEstadoEstudiante);

export default router;
