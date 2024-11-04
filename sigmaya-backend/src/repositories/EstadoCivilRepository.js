import {
  EstadoCivil
} from "../models/EstadoCivil.js";

// Repositorio para tbl_estado_civil

export class EstadoCivilRepository {
  constructor() {
    this.model = EstadoCivil;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createEstadoCivil(estadoCivilData) {
    return await this.model.create(estadoCivilData);
  }

  async updateEstadoCivil(id, estadoCivilData) {
    const estadoCivil = await this.findById(id);
    if (!estadoCivil) {
      return null;
    }
    return await estadoCivil.update(estadoCivilData);
  }

  async deleteEstadoCivil(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
