import {
  Estado
} from "../models/Estado.js";

// Repositorio para tbl_estados

export class EstadoRepository {
  constructor() {
    this.model = Estado;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createEstado(estadoData) {
    return await this.model.create(estadoData);
  }

  async updateEstado(id, estadoData) {
    const estado = await this.findById(id);
    if (!estado) {
      return null;
    }
    return await estado.update(estadoData);
  }

  async deleteEstado(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
