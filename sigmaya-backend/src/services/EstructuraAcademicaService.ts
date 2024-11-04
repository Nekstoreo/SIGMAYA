import { 
  ProgramaAcademicoRepository,
  NivelAcademicoRepository,
  MateriaRepository,
  CursoRepository,
  SeccionRepository,
  PeriodoAcademicoRepository,
  TipoAdmisionRepository,
  EstadoEstudianteRepository
} from "../repositories/allRepositories";

export class EstructuraAcademicaService {
  private programaAcademicoRepo = new ProgramaAcademicoRepository();
  private nivelAcademicoRepo = new NivelAcademicoRepository();
  private materiaRepo = new MateriaRepository();
  private cursoRepo = new CursoRepository();
  private seccionRepo = new SeccionRepository();
  private periodoAcademicoRepo = new PeriodoAcademicoRepository();
  private tipoAdmisionRepo = new TipoAdmisionRepository();
  private estadoEstudianteRepo = new EstadoEstudianteRepository();

  // Programas Académicos
  async getProgramasAcademicos() {
    return await this.programaAcademicoRepo.findAll();
  }

  async getProgramaAcademicoById(id: number) {
    return await this.programaAcademicoRepo.findById(id);
  }

  async createProgramaAcademico(data: any) {
    return await this.programaAcademicoRepo.createProgramaAcademico(data);
  }

  async updateProgramaAcademico(id: number, data: any) {
    return await this.programaAcademicoRepo.updateProgramaAcademico(id, data);
  }

  async deleteProgramaAcademico(id: number) {
    return await this.programaAcademicoRepo.deleteProgramaAcademico(id);
  }

  // Niveles Académicos
  async getNivelesAcademicos() {
    return await this.nivelAcademicoRepo.findAll();
  }

  async getNivelAcademicoById(id: number) {
    return await this.nivelAcademicoRepo.findById(id);
  }

  async createNivelAcademico(data: any) {
    return await this.nivelAcademicoRepo.createNivelAcademico(data);
  }

  async updateNivelAcademico(id: number, data: any) {
    return await this.nivelAcademicoRepo.updateNivelAcademico(id, data);
  }

  async deleteNivelAcademico(id: number) {
    return await this.nivelAcademicoRepo.deleteNivelAcademico(id);
  }

  // Materias
  async getMaterias() {
    return await this.materiaRepo.findAll();
  }

  async getMateriaById(id: string) {
    return await this.materiaRepo.findById(id);
  }

  async createMateria(data: any) {
    return await this.materiaRepo.createMateria(data);
  }

  async updateMateria(id: string, data: any) {
    return await this.materiaRepo.updateMateria(id, data);
  }

  async deleteMateria(id: number) {
    return await this.materiaRepo.deleteMateria(id);
  }

  // Cursos
  async getCursos() {
    return await this.cursoRepo.findAll();
  }

  async getCursoById(id: string) {
    return await this.cursoRepo.findById(id);
  }

  async createCurso(data: any) {
    return await this.cursoRepo.createCurso(data);
  }

  async updateCurso(id: string, data: any) {
    return await this.cursoRepo.updateCurso(id, data);
  }

  async deleteCurso(id: number) {
    return await this.cursoRepo.deleteCurso(id);
  }

  // Secciones
  async getSecciones() {
    return await this.seccionRepo.findAll();
  }

  async getSeccionById(id: string) {
    return await this.seccionRepo.findById(id);
  }

  async createSeccion(data: any) {
    return await this.seccionRepo.createSeccion(data);
  }

  async updateSeccion(id: string, data: any) {
    return await this.seccionRepo.updateSeccion(id, data);
  }

  async deleteSeccion(id: number) {
    return await this.seccionRepo.deleteSeccion(id);
  }

  // Periodos Académicos
  async getPeriodosAcademicos() {
    return await this.periodoAcademicoRepo.findAll();
  }

  async getPeriodoAcademicoById(id: number) {
    return await this.periodoAcademicoRepo.findById(id);
  }

  async createPeriodoAcademico(data: any) {
    return await this.periodoAcademicoRepo.createPeriodoAcademico(data);
  }

  async updatePeriodoAcademico(id: number, data: any) {
    return await this.periodoAcademicoRepo.updatePeriodoAcademico(id, data);
  }

  async deletePeriodoAcademico(id: number) {
    return await this.periodoAcademicoRepo.deletePeriodoAcademico(id);
  }

  // Tipos de Admisión
  async getTiposAdmision() {
    return await this.tipoAdmisionRepo.findAll();
  }

  async getTipoAdmisionById(id: number) {
    return await this.tipoAdmisionRepo.findById(id);
  }

  async createTipoAdmision(data: any) {
    return await this.tipoAdmisionRepo.createTipoAdmision(data);
  }

  async updateTipoAdmision(id: number, data: any) {
    return await this.tipoAdmisionRepo.updateTipoAdmision(id, data);
  }

  async deleteTipoAdmision(id: number) {
    return await this.tipoAdmisionRepo.deleteTipoAdmision(id);
  }

  // Estados de Estudiante
  async getEstadosEstudiante() {
    return await this.estadoEstudianteRepo.findAll();
  }

  async getEstadoEstudianteById(id: number) {
    return await this.estadoEstudianteRepo.findById(id);
  }

  async createEstadoEstudiante(data: any) {
    return await this.estadoEstudianteRepo.createEstadoEstudiante(data);
  }

  async updateEstadoEstudiante(id: number, data: any) {
    return await this.estadoEstudianteRepo.updateEstadoEstudiante(id, data);
  }

  async deleteEstadoEstudiante(id: number) {
    return await this.estadoEstudianteRepo.deleteEstadoEstudiante(id);
  }
}
