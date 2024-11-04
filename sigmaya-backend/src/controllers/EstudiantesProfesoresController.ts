// src/controllers/EstudiantesProfesoresController.ts
import { Request, Response } from 'express';
import {
  EstudianteRepository,
  ProfesorRepository,
  CalificacionParcialRepository,
  CalificacionFinalRepository,
  InscripcionCursoRepository,
  ProgramaEstudianteRepository,
} from '../repositories/allRepositories';

export class EstudiantesProfesoresController {
  private estudianteRepo = new EstudianteRepository();
  private profesorRepo = new ProfesorRepository();
  private calificacionParcialRepo = new CalificacionParcialRepository();
  private calificacionFinalRepo = new CalificacionFinalRepository();
  private inscripcionCursoRepo = new InscripcionCursoRepository();
  private programaEstudianteRepo = new ProgramaEstudianteRepository();

  // tbl_estudiantes
  async getEstudiantes(req: Request, res: Response) {
    const estudiantes = await this.estudianteRepo.findAll();
    res.json(estudiantes);
  }

  async getEstudianteById(req: Request, res: Response) {
    const estudiante = await this.estudianteRepo.findById(Number(req.params.id));
    res.json(estudiante);
  }

  async createEstudiante(req: Request, res: Response) {
    const nuevoEstudiante = await this.estudianteRepo.createEstudiante(req.body);
    res.json(nuevoEstudiante);
  }

  async updateEstudiante(req: Request, res: Response) {
    const estudiante = await this.estudianteRepo.updateEstudiante(
      Number(req.params.id),
      req.body
    );
    res.json(estudiante);
  }

  async deleteEstudiante(req: Request, res: Response) {
    const success = await this.estudianteRepo.deleteEstudiante(Number(req.params.id));
    res.json({ success });
  }

  // tbl_profesores
  async getProfesores(req: Request, res: Response) {
    const profesores = await this.profesorRepo.findAll();
    res.json(profesores);
  }

  async getProfesorById(req: Request, res: Response) {
    const profesor = await this.profesorRepo.findById(Number(req.params.id));
    res.json(profesor);
  }

  async createProfesor(req: Request, res: Response) {
    const nuevoProfesor = await this.profesorRepo.createProfesor(req.body);
    res.json(nuevoProfesor);
  }

  async updateProfesor(req: Request, res: Response) {
    const profesor = await this.profesorRepo.updateProfesor(
      Number(req.params.id),
      req.body
    );
    res.json(profesor);
  }

  async deleteProfesor(req: Request, res: Response) {
    const success = await this.profesorRepo.deleteProfesor(Number(req.params.id));
    res.json({ success });
  }

  // tbl_calificaciones_parciales
  async getCalificacionesParciales(req: Request, res: Response) {
    const calificaciones = await this.calificacionParcialRepo.findAll();
    res.json(calificaciones);
  }

  async getCalificacionParcialById(req: Request, res: Response) {
    const calificacion = await this.calificacionParcialRepo.findById(Number(req.params.id));
    res.json(calificacion);
  }

  async createCalificacionParcial(req: Request, res: Response) {
    const nuevaCalificacion = await this.calificacionParcialRepo.createCalificacionParcial(
      req.body
    );
    res.json(nuevaCalificacion);
  }

  async updateCalificacionParcial(req: Request, res: Response) {
    const calificacion = await this.calificacionParcialRepo.updateCalificacionParcial(
      Number(req.params.id),
      req.body
    );
    res.json(calificacion);
  }

  async deleteCalificacionParcial(req: Request, res: Response) {
    const success = await this.calificacionParcialRepo.deleteCalificacionParcial(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_calificaciones_finales
  async getCalificacionesFinales(req: Request, res: Response) {
    const calificaciones = await this.calificacionFinalRepo.findAll();
    res.json(calificaciones);
  }

  async getCalificacionFinalById(req: Request, res: Response) {
    const calificacion = await this.calificacionFinalRepo.findById(Number(req.params.id));
    res.json(calificacion);
  }

  async createCalificacionFinal(req: Request, res: Response) {
    const nuevaCalificacion = await this.calificacionFinalRepo.createCalificacionFinal(
      req.body
    );
    res.json(nuevaCalificacion);
  }

  async updateCalificacionFinal(req: Request, res: Response) {
    const calificacion = await this.calificacionFinalRepo.updateCalificacionFinal(
      Number(req.params.id),
      req.body
    );
    res.json(calificacion);
  }

  async deleteCalificacionFinal(req: Request, res: Response) {
    const success = await this.calificacionFinalRepo.deleteCalificacionFinal(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_inscripciones_curso
  async getInscripcionesCurso(req: Request, res: Response) {
    const inscripciones = await this.inscripcionCursoRepo.findAll();
    res.json(inscripciones);
  }

  async getInscripcionCursoById(req: Request, res: Response) {
    const inscripcion = await this.inscripcionCursoRepo.findById(Number(req.params.id));
    res.json(inscripcion);
  }

  async createInscripcionCurso(req: Request, res: Response) {
    const nuevaInscripcion = await this.inscripcionCursoRepo.createInscripcionCurso(
      req.body
    );
    res.json(nuevaInscripcion);
  }

  async updateInscripcionCurso(req: Request, res: Response) {
    const inscripcion = await this.inscripcionCursoRepo.updateInscripcionCurso(
      Number(req.params.id),
      req.body
    );
    res.json(inscripcion);
  }

  async deleteInscripcionCurso(req: Request, res: Response) {
    const success = await this.inscripcionCursoRepo.deleteInscripcionCurso(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_programas_estudiantes
  async getProgramasEstudiantes(req: Request, res: Response) {
    const programas = await this.programaEstudianteRepo.findAll();
    res.json(programas);
  }

  async getProgramaEstudianteById(req: Request, res: Response) {
    const programa = await this.programaEstudianteRepo.findById(Number(req.params.id));
    res.json(programa);
  }

  async createProgramaEstudiante(req: Request, res: Response) {
    const nuevoPrograma = await this.programaEstudianteRepo.createProgramaEstudiante(
      req.body
    );
    res.json(nuevoPrograma);
  }

  async updateProgramaEstudiante(req: Request, res: Response) {
    const programa = await this.programaEstudianteRepo.updateProgramaEstudiante(
      Number(req.params.id),
      req.body
    );
    res.json(programa);
  }

  async deleteProgramaEstudiante(req: Request, res: Response) {
    const success = await this.programaEstudianteRepo.deleteProgramaEstudiante(
      Number(req.params.id)
    );
    res.json({ success });
  }
}