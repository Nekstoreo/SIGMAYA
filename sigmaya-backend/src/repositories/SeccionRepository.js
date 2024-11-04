import {
  Seccion
} from "../models/Seccion.js";

// Repositorio para tbl_secciones

export class SeccionRepository {
  constructor() {
    this.model = Seccion;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createSeccion(seccionData) {
    return await this.model.create(seccionData);
  }

  async updateSeccion(id, seccionData) {
    const seccion = await this.findById(id);
    if (!seccion) {
      return null;
    }
    return await seccion.update(seccionData);
  }

  async deleteSeccion(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
