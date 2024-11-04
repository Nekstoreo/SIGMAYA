import { ProgramaAcademicoRepository } from "../repositories/ProgramaAcademicoRepository.js";
import { NivelAcademicoRepository } from "../repositories/NivelAcademicoRepository.js";
import { MateriaRepository } from "../repositories/MateriaRepository.js";
import { CursoRepository } from "../repositories/CursoRepository.js";
import { SeccionRepository } from "../repositories/SeccionRepository.js";
import { PeriodoAcademicoRepository } from "../repositories/PeriodoAcademicoRepository.js";
import { TipoAdmisionRepository } from "../repositories/TipoAdmisionRepository.js";
import { EstadoEstudianteRepository } from "../repositories/EstadoEstudianteRepository.js";

export class EstructuraAcademicaService {
  constructor() {
    this.programaAcademicoRepo = new ProgramaAcademicoRepository();
    this.nivelAcademicoRepo = new NivelAcademicoRepository();
    this.materiaRepo = new MateriaRepository();
    this.cursoRepo = new CursoRepository();
    this.seccionRepo = new SeccionRepository();
    this.periodoAcademicoRepo = new PeriodoAcademicoRepository();
    this.tipoAdmisionRepo = new TipoAdmisionRepository();
    this.estadoEstudianteRepo = new EstadoEstudianteRepository();
  }

  // Programas Académicos
  async getProgramasAcademicos() {
    return await this.programaAcademicoRepo.findAll();
  }

  async getProgramaAcademicoById(id) {
    return await this.programaAcademicoRepo.findById(id);
  }

  async createProgramaAcademico(data) {
    return await this.programaAcademicoRepo.createProgramaAcademico(data);
  }

  async updateProgramaAcademico(id, data) {
    return await this.programaAcademicoRepo.updateProgramaAcademico(id, data);
  }

  async deleteProgramaAcademico(id) {
    return await this.programaAcademicoRepo.deleteProgramaAcademico(id);
  }

  // Niveles Académicos
  async getNivelesAcademicos() {
    return await this.nivelAcademicoRepo.findAll();
  }

  async getNivelAcademicoById(id) {
    return await this.nivelAcademicoRepo.findById(id);
  }

  async createNivelAcademico(data) {
    return await this.nivelAcademicoRepo.createNivelAcademico(data);
  }

  async updateNivelAcademico(id, data) {
    return await this.nivelAcademicoRepo.updateNivelAcademico(id, data);
  }

  async deleteNivelAcademico(id) {
    return await this.nivelAcademicoRepo.deleteNivelAcademico(id);
  }

  // Materias
  async getMaterias() {
    return await this.materiaRepo.findAll();
  }

  async getMateriaById(id) {
    return await this.materiaRepo.findById(id);
  }

  async createMateria(data) {
    return await this.materiaRepo.createMateria(data);
  }

  async updateMateria(id, data) {
    return await this.materiaRepo.updateMateria(id, data);
  }

  async deleteMateria(id) {
    return await this.materiaRepo.deleteMateria(id);
  }

  // Cursos
  async getCursos() {
    return await this.cursoRepo.findAll();
  }

  async getCursoById(id) {
    return await this.cursoRepo.findById(id);
  }

  async createCurso(data) {
    return await this.cursoRepo.createCurso(data);
  }

  async updateCurso(id, data) {
    return await this.cursoRepo.updateCurso(id, data);
  }

  async deleteCurso(id) {
    return await this.cursoRepo.deleteCurso(id);
  }

  // Secciones
  async getSecciones() {
    return await this.seccionRepo.findAll();
  }

  async getSeccionById(id) {
    return await this.seccionRepo.findById(id);
  }

  async createSeccion(data) {
    return await this.seccionRepo.createSeccion(data);
  }

  async updateSeccion(id, data) {
    return await this.seccionRepo.updateSeccion(id, data);
  }

  async deleteSeccion(id) {
    return await this.seccionRepo.deleteSeccion(id);
  }

  // Periodos Académicos
  async getPeriodosAcademicos() {
    return await this.periodoAcademicoRepo.findAll();
  }

  async getPeriodoAcademicoById(id) {
    return await this.periodoAcademicoRepo.findById(id);
  }

  async createPeriodoAcademico(data) {
    return await this.periodoAcademicoRepo.createPeriodoAcademico(data);
  }

  async updatePeriodoAcademico(id, data) {
    return await this.periodoAcademicoRepo.updatePeriodoAcademico(id, data);
  }

  async deletePeriodoAcademico(id) {
    return await this.periodoAcademicoRepo.deletePeriodoAcademico(id);
  }

  // Tipos de Admisión
  async getTiposAdmision() {
    return await this.tipoAdmisionRepo.findAll();
  }

  async getTipoAdmisionById(id) {
    return await this.tipoAdmisionRepo.findById(id);
  }

  async createTipoAdmision(data) {
    return await this.tipoAdmisionRepo.createTipoAdmision(data);
  }

  async updateTipoAdmision(id, data) {
    return await this.tipoAdmisionRepo.updateTipoAdmision(id, data);
  }

  async deleteTipoAdmision(id) {
    return await this.tipoAdmisionRepo.deleteTipoAdmision(id);
  }

  // Estados de Estudiante
  async getEstadosEstudiante() {
    return await this.estadoEstudianteRepo.findAll();
  }

  async getEstadoEstudianteById(id) {
    return await this.estadoEstudianteRepo.findById(id);
  }

  async createEstadoEstudiante(data) {
    return await this.estadoEstudianteRepo.createEstadoEstudiante(data);
  }

  async updateEstadoEstudiante(id, data) {
    return await this.estadoEstudianteRepo.updateEstadoEstudiante(id, data);
  }

  async deleteEstadoEstudiante(id) {
    return await this.estadoEstudianteRepo.deleteEstadoEstudiante(id);
  }
}
