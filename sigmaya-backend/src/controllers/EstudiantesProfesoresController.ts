// src/controllers/EstudiantesProfesoresController.ts
import { Request, Response } from 'express';
import { EstudiantesProfesoresService } from '../services/EstudiantesProfesoresService';

export class EstudiantesProfesoresController {
  private estudiantesProfesoresService = new EstudiantesProfesoresService();

  // tbl_estudiantes
  async getEstudiantes(req: Request, res: Response) {
    const estudiantes = await this.estudiantesProfesoresService.getEstudiantes();
    res.json(estudiantes);
  }

  async getEstudianteById(req: Request, res: Response) {
    const estudiante = await this.estudiantesProfesoresService.getEstudianteById(Number(req.params.id));
    res.json(estudiante);
  }

  async createEstudiante(req: Request, res: Response) {
    const nuevoEstudiante = await this.estudiantesProfesoresService.createEstudiante(req.body);
    res.json(nuevoEstudiante);
  }

  async updateEstudiante(req: Request, res: Response) {
    const estudiante = await this.estudiantesProfesoresService.updateEstudiante(
      Number(req.params.id),
      req.body
    );
    res.json(estudiante);
  }

  async deleteEstudiante(req: Request, res: Response) {
    const success = await this.estudiantesProfesoresService.deleteEstudiante(Number(req.params.id));
    res.json({ success });
  }

  // tbl_profesores
  async getProfesores(req: Request, res: Response) {
    const profesores = await this.estudiantesProfesoresService.getProfesores();
    res.json(profesores);
  }

  async getProfesorById(req: Request, res: Response) {
    const profesor = await this.estudiantesProfesoresService.getProfesorById(Number(req.params.id));
    res.json(profesor);
  }

  async createProfesor(req: Request, res: Response) {
    const nuevoProfesor = await this.estudiantesProfesoresService.createProfesor(req.body);
    res.json(nuevoProfesor);
  }

  async updateProfesor(req: Request, res: Response) {
    const profesor = await this.estudiantesProfesoresService.updateProfesor(
      Number(req.params.id),
      req.body
    );
    res.json(profesor);
  }

  async deleteProfesor(req: Request, res: Response) {
    const success = await this.estudiantesProfesoresService.deleteProfesor(Number(req.params.id));
    res.json({ success });
  }

  // tbl_calificaciones_parciales
  async getCalificacionesParciales(req: Request, res: Response) {
    const calificaciones = await this.estudiantesProfesoresService.getCalificacionesParciales();
    res.json(calificaciones);
  }

  async getCalificacionParcialById(req: Request, res: Response) {
    const calificacion = await this.estudiantesProfesoresService.getCalificacionParcialById(Number(req.params.id));
    res.json(calificacion);
  }

  async createCalificacionParcial(req: Request, res: Response) {
    const nuevaCalificacion = await this.estudiantesProfesoresService.createCalificacionParcial(
      req.body
    );
    res.json(nuevaCalificacion);
  }

  async updateCalificacionParcial(req: Request, res: Response) {
    const calificacion = await this.estudiantesProfesoresService.updateCalificacionParcial(
      Number(req.params.id),
      req.body
    );
    res.json(calificacion);
  }

  async deleteCalificacionParcial(req: Request, res: Response) {
    const success = await this.estudiantesProfesoresService.deleteCalificacionParcial(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_calificaciones_finales
  async getCalificacionesFinales(req: Request, res: Response) {
    const calificaciones = await this.estudiantesProfesoresService.getCalificacionesFinales();
    res.json(calificaciones);
  }

  async getCalificacionFinalById(req: Request, res: Response) {
    const calificacion = await this.estudiantesProfesoresService.getCalificacionFinalById(Number(req.params.id));
    res.json(calificacion);
  }

  async createCalificacionFinal(req: Request, res: Response) {
    const nuevaCalificacion = await this.estudiantesProfesoresService.createCalificacionFinal(
      req.body
    );
    res.json(nuevaCalificacion);
  }

  async updateCalificacionFinal(req: Request, res: Response) {
    const calificacion = await this.estudiantesProfesoresService.updateCalificacionFinal(
      Number(req.params.id),
      req.body
    );
    res.json(calificacion);
  }

  async deleteCalificacionFinal(req: Request, res: Response) {
    const success = await this.estudiantesProfesoresService.deleteCalificacionFinal(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_inscripciones_curso
  async getInscripcionesCurso(req: Request, res: Response) {
    const inscripciones = await this.estudiantesProfesoresService.getInscripcionesCursos();
    res.json(inscripciones);
  }

  async getInscripcionCursoById(req: Request, res: Response) {
    const inscripcion = await this.estudiantesProfesoresService.getInscripcionCursoById(Number(req.params.id));
    res.json(inscripcion);
  }

  async createInscripcionCurso(req: Request, res: Response) {
    const nuevaInscripcion = await this.estudiantesProfesoresService.createInscripcionCurso(
      req.body
    );
    res.json(nuevaInscripcion);
  }

  async updateInscripcionCurso(req: Request, res: Response) {
    const inscripcion = await this.estudiantesProfesoresService.updateInscripcionCurso(
      Number(req.params.id),
      req.body
    );
    res.json(inscripcion);
  }

  async deleteInscripcionCurso(req: Request, res: Response) {
    const success = await this.estudiantesProfesoresService.deleteInscripcionCurso(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_programas_estudiantes
  async getProgramasEstudiantes(req: Request, res: Response) {
    const programas = await this.estudiantesProfesoresService.getProgramasEstudiantes();
    res.json(programas);
  }

  async getProgramaEstudianteById(req: Request, res: Response) {
    const programa = await this.estudiantesProfesoresService.getProgramaEstudianteById(Number(req.params.id));
    res.json(programa);
  }

  async createProgramaEstudiante(req: Request, res: Response) {
    const nuevoPrograma = await this.estudiantesProfesoresService.createProgramaEstudiante(
      req.body
    );
    res.json(nuevoPrograma);
  }

  async updateProgramaEstudiante(req: Request, res: Response) {
    const programa = await this.estudiantesProfesoresService.updateProgramaEstudiante(
      Number(req.params.id),
      req.body
    );
    res.json(programa);
  }

  async deleteProgramaEstudiante(req: Request, res: Response) {
    const success = await this.estudiantesProfesoresService.deleteProgramaEstudiante(
      Number(req.params.id)
    );
    res.json({ success });
  }
}