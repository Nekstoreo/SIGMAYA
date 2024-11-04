import {
  Modalidad
} from "../models/Modalidad.js";

// Repositorio para tbl_modalidades

export class ModalidadRepository {
  constructor() {
    this.model = Modalidad;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createModalidad(modalidadData) {
    return await this.model.create(modalidadData);
  }

  async updateModalidad(id, modalidadData) {
    const modalidad = await this.findById(id);
    if (!modalidad) {
      return null;
    }
    return await modalidad.update(modalidadData);
  }

  async deleteModalidad(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
