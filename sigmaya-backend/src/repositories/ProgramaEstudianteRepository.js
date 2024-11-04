import {
  ProgramaEstudiante
} from "../models/ProgramaEstudiante.js";

// Repositorio para tbl_programas_estudiantes

export class ProgramaEstudianteRepository {
  constructor() {
    this.model = ProgramaEstudiante;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createProgramaEstudiante(programaEstudianteData) {
    return await this.model.create(programaEstudianteData);
  }

  async updateProgramaEstudiante(id, programaEstudianteData) {
    const programaEstudiante = await this.findById(id);
    if (!programaEstudiante) {
      return null;
    }
    return await programaEstudiante.update(programaEstudianteData);
  }

  async deleteProgramaEstudiante(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
