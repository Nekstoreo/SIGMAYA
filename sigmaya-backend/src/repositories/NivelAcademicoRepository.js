import {
  NivelAcademico
} from "../models/NivelAcademico.js";

// Repositorio para tbl_niveles_academicos

export class NivelAcademicoRepository {
  constructor() {
    this.model = NivelAcademico;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createNivelAcademico(nivelAcademicoData) {
    return await this.model.create(nivelAcademicoData);
  }

  async updateNivelAcademico(id, nivelAcademicoData) {
    const nivelAcademico = await this.findById(id);
    if (!nivelAcademico) {
      return null;
    }
    return await nivelAcademico.update(nivelAcademicoData);
  }

  async deleteNivelAcademico(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
