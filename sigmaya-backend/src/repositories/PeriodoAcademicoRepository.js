import {
  PeriodoAcademico
} from "../models/PeriodoAcademico.js";

// Repositorio para tbl_periodos_academicos

export class PeriodoAcademicoRepository {
  constructor() {
    this.model = PeriodoAcademico;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createPeriodoAcademico(periodoAcademicoData) {
    return await this.model.create(periodoAcademicoData);
  }

  async updatePeriodoAcademico(id, periodoAcademicoData) {
    const periodoAcademico = await this.findById(id);
    if (!periodoAcademico) {
      return null;
    }
    return await periodoAcademico.update(periodoAcademicoData);
  }

  async deletePeriodoAcademico(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
