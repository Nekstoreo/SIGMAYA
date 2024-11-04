import { ProgramaAcademico } from "../models/ProgramaAcademico.js";

// Repositorio para tbl_programas_academicos

export class ProgramaAcademicoRepository {
  constructor() {
    this.model = ProgramaAcademico;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createProgramaAcademico(programaAcademicoData) {
    return await this.model.create(programaAcademicoData);
  }

  async updateProgramaAcademico(id, programaAcademicoData) {
    const programaAcademico = await this.findById(id);
    if (!programaAcademico) {
      return null;
    }
    return await programaAcademico.update(programaAcademicoData);
  }

  async deleteProgramaAcademico(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
