import { EstudianteRepository } from "../repositories/EstudianteRepository.js";
import { ProfesorRepository } from "../repositories/ProfesorRepository.js";
import { CalificacionParcialRepository } from "../repositories/CalificacionParcialRepository.js";
import { CalificacionFinalRepository } from "../repositories/CalificacionFinalRepository.js";
import { InscripcionCursoRepository } from "../repositories/InscripcionCursoRepository.js";
import { ProgramaEstudianteRepository } from "../repositories/ProgramaEstudianteRepository.js";

export class EstudiantesProfesoresService {
  constructor() {
    this.estudianteRepo = new EstudianteRepository();
    this.profesorRepo = new ProfesorRepository();
    this.calificacionParcialRepo = new CalificacionParcialRepository();
    this.calificacionFinalRepo = new CalificacionFinalRepository();
    this.inscripcionCursoRepo = new InscripcionCursoRepository();
    this.programaEstudianteRepo = new ProgramaEstudianteRepository();
  }

  // Métodos para tbl_estudiantes
  async getEstudiantes() {
    return await this.estudianteRepo.findAll();
  }

  async getEstudianteById(id) {
    return await this.estudianteRepo.findById(id);
  }

  async createEstudiante(data) {
    return await this.estudianteRepo.createEstudiante(data);
  }

  async updateEstudiante(id, data) {
    return await this.estudianteRepo.updateEstudiante(id, data);
  }

  async deleteEstudiante(id) {
    return await this.estudianteRepo.deleteEstudiante(id);
  }

  // Métodos para tbl_profesores
  async getProfesores() {
    return await this.profesorRepo.findAll();
  }

  async getProfesorById(id) {
    return await this.profesorRepo.findById(id);
  }

  async createProfesor(data) {
    return await this.profesorRepo.createProfesor(data);
  }

  async updateProfesor(id, data) {
    return await this.profesorRepo.updateProfesor(id, data);
  }

  async deleteProfesor(id) {
    return await this.profesorRepo.deleteProfesor(id);
  }

  // Métodos para tbl_calificaciones_parciales

  async getCalificacionesParciales() {
    return await this.calificacionParcialRepo.findAll();
  }

  async getCalificacionParcialById(id) {
    return await this.calificacionParcialRepo.findById(id);
  }

  async createCalificacionParcial(data) {
    return await this.calificacionParcialRepo.createCalificacionParcial(data);
  }

  async updateCalificacionParcial(id, data) {
    return await this.calificacionParcialRepo.updateCalificacionParcial(
      id,
      data
    );
  }

  async deleteCalificacionParcial(id) {
    return await this.calificacionParcialRepo.deleteCalificacionParcial(id);
  }

  // Métodos para tbl_calificaciones_finales

  async getCalificacionesFinales() {
    return await this.calificacionFinalRepo.findAll();
  }

  async getCalificacionFinalById(id) {
    return await this.calificacionFinalRepo.findById(id);
  }

  async createCalificacionFinal(data) {
    return await this.calificacionFinalRepo.createCalificacionFinal(data);
  }

  async updateCalificacionFinal(id, data) {
    return await this.calificacionFinalRepo.updateCalificacionFinal(id, data);
  }

  async deleteCalificacionFinal(id) {
    return await this.calificacionFinalRepo.deleteCalificacionFinal(id);
  }

  // Métodos para tbl_inscripciones_cursos

  async getInscripcionesCursos() {
    return await this.inscripcionCursoRepo.findAll();
  }

  async getInscripcionCursoById(id) {
    return await this.inscripcionCursoRepo.findById(id);
  }

  async createInscripcionCurso(data) {
    return await this.inscripcionCursoRepo.createInscripcionCurso(data);
  }

  async updateInscripcionCurso(id, data) {
    return await this.inscripcionCursoRepo.updateInscripcionCurso(id, data);
  }

  async deleteInscripcionCurso(id) {
    return await this.inscripcionCursoRepo.deleteInscripcionCurso(id);
  }

  // Métodos para tbl_programas_estudiantes

  async getProgramasEstudiantes() {
    return await this.programaEstudianteRepo.findAll();
  }

  async getProgramaEstudianteById(id) {
    return await this.programaEstudianteRepo.findById(id);
  }

  async createProgramaEstudiante(data) {
    return await this.programaEstudianteRepo.createProgramaEstudiante(data);
  }

  async updateProgramaEstudiante(id, data) {
    return await this.programaEstudianteRepo.updateProgramaEstudiante(id, data);
  }

  async deleteProgramaEstudiante(id) {
    return await this.programaEstudianteRepo.deleteProgramaEstudiante(id);
  }
}
