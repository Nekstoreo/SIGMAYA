import { Router } from 'express';
import { EstudiantesProfesoresController } from '../controllers/EstudiantesProfesoresController.js';

const router = Router();
const controller = new EstudiantesProfesoresController();

// tbl_estudiantes
router.get('/estudiantes', controller.getEstudiantes);
router.get('/estudiantes/:id', controller.getEstudianteById);
router.post('/estudiantes', controller.createEstudiante);
router.put('/estudiantes/:id', controller.updateEstudiante);
router.delete('/estudiantes/:id', controller.deleteEstudiante);

// tbl_profesores
router.get('/profesores', controller.getProfesores);
router.get('/profesores/:id', controller.getProfesorById);
router.post('/profesores', controller.createProfesor);
router.put('/profesores/:id', controller.updateProfesor);
router.delete('/profesores/:id', controller.deleteProfesor);

// tbl_calificaciones_parciales
router.get('/calificaciones-parciales', controller.getCalificacionesParciales);
router.get('/calificaciones-parciales/:id', controller.getCalificacionParcialById);
router.post('/calificaciones-parciales', controller.createCalificacionParcial);
router.put('/calificaciones-parciales/:id', controller.updateCalificacionParcial);
router.delete('/calificaciones-parciales/:id', controller.deleteCalificacionParcial);

// tbl_calificaciones_finales
router.get('/calificaciones-finales', controller.getCalificacionesFinales);
router.get('/calificaciones-finales/:id', controller.getCalificacionFinalById);
router.post('/calificaciones-finales', controller.createCalificacionFinal);
router.put('/calificaciones-finales/:id', controller.updateCalificacionFinal);
router.delete('/calificaciones-finales/:id', controller.deleteCalificacionFinal);

// tbl_inscripciones_curso
router.get('/inscripciones-curso', controller.getInscripcionesCurso);
router.get('/inscripciones-curso/:id', controller.getInscripcionCursoById);
router.post('/inscripciones-curso', controller.createInscripcionCurso);
router.put('/inscripciones-curso/:id', controller.updateInscripcionCurso);
router.delete('/inscripciones-curso/:id', controller.deleteInscripcionCurso);

// tbl_programas_estudiantes
router.get('/programas-estudiantes', controller.getProgramasEstudiantes);
router.get('/programas-estudiantes/:id', controller.getProgramaEstudianteById);
router.post('/programas-estudiantes', controller.createProgramaEstudiante);
router.put('/programas-estudiantes/:id', controller.updateProgramaEstudiante);
router.delete('/programas-estudiantes/:id', controller.deleteProgramaEstudiante);

// ...existing code...

export default router;
