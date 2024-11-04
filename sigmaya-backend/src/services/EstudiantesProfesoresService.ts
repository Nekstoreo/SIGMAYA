import {
  EstudianteRepository,
  ProfesorRepository,
  CalificacionParcialRepository,
  CalificacionFinalRepository,
  InscripcionCursoRepository,
  ProgramaEstudianteRepository,
} from "../repositories/allRepositories";

export class EstudiantesProfesoresService {
  private estudianteRepo = new EstudianteRepository();
  private profesorRepo = new ProfesorRepository();
  private calificacionParcialRepo = new CalificacionParcialRepository();
  private calificacionFinalRepo = new CalificacionFinalRepository();
  private inscripcionCursoRepo = new InscripcionCursoRepository();
  private programaEstudianteRepo = new ProgramaEstudianteRepository();

  // Métodos para tbl_estudiantes
  async getEstudiantes() {
    return await this.estudianteRepo.findAll();
  }

  async getEstudianteById(id: number) {
    return await this.estudianteRepo.findById(id);
  }

  async createEstudiante(data: any) {
    return await this.estudianteRepo.createEstudiante(data);
  }

  async updateEstudiante(id: number, data: any) {
    return await this.estudianteRepo.updateEstudiante(id, data);
  }

  async deleteEstudiante(id: number) {
    return await this.estudianteRepo.deleteEstudiante(id);
  }

  // Métodos para tbl_profesores
  async getProfesores() {
    return await this.profesorRepo.findAll();
  }

  async getProfesorById(id: number) {
    return await this.profesorRepo.findById(id);
  }

  async createProfesor(data: any) {
    return await this.profesorRepo.createProfesor(data);
  }

  async updateProfesor(id: number, data: any) {
    return await this.profesorRepo.updateProfesor(id, data);
  }

  async deleteProfesor(id: number) {
    return await this.profesorRepo.deleteProfesor(id);
  }

  // Métodos para tbl_calificaciones_parciales

  async getCalificacionesParciales() {
    return await this.calificacionParcialRepo.findAll();
  }

  async getCalificacionParcialById(id: number) {
    return await this.calificacionParcialRepo.findById(id);
  }

  async createCalificacionParcial(data: any) {
    return await this.calificacionParcialRepo.createCalificacionParcial(data);
  }

  async updateCalificacionParcial(id: number, data: any) {
    return await this.calificacionParcialRepo.updateCalificacionParcial(
      id,
      data
    );
  }

  async deleteCalificacionParcial(id: number) {
    return await this.calificacionParcialRepo.deleteCalificacionParcial(id);
  }

  // Métodos para tbl_calificaciones_finales

  async getCalificacionesFinales() {
    return await this.calificacionFinalRepo.findAll();
  }

  async getCalificacionFinalById(id: number) {
    return await this.calificacionFinalRepo.findById(id);
  }

  async createCalificacionFinal(data: any) {
    return await this.calificacionFinalRepo.createCalificacionFinal(data);
  }

  async updateCalificacionFinal(id: number, data: any) {
    return await this.calificacionFinalRepo.updateCalificacionFinal(id, data);
  }

  async deleteCalificacionFinal(id: number) {
    return await this.calificacionFinalRepo.deleteCalificacionFinal(id);
  }

  // Métodos para tbl_inscripciones_cursos

  async getInscripcionesCursos() {
    return await this.inscripcionCursoRepo.findAll();
  }

  async getInscripcionCursoById(id: number) {
    return await this.inscripcionCursoRepo.findById(id);
  }

  async createInscripcionCurso(data: any) {
    return await this.inscripcionCursoRepo.createInscripcionCurso(data);
  }

  async updateInscripcionCurso(id: number, data: any) {
    return await this.inscripcionCursoRepo.updateInscripcionCurso(id, data);
  }

  async deleteInscripcionCurso(id: number) {
    return await this.inscripcionCursoRepo.deleteInscripcionCurso(id);
  }

  // Métodos para tbl_programas_estudiantes

  async getProgramasEstudiantes() {
    return await this.programaEstudianteRepo.findAll();
  }

  async getProgramaEstudianteById(id: number) {
    return await this.programaEstudianteRepo.findById(id);
  }

  async createProgramaEstudiante(data: any) {
    return await this.programaEstudianteRepo.createProgramaEstudiante(data);
  }

  async updateProgramaEstudiante(id: number, data: any) {
    return await this.programaEstudianteRepo.updateProgramaEstudiante(id, data);
  }

  async deleteProgramaEstudiante(id: number) {
    return await this.programaEstudianteRepo.deleteProgramaEstudiante(id);
  }
}
