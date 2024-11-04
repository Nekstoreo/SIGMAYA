import {
  Escuela
} from "../models/Escuela.js";

// Repositorio para tbl_escuelas

export class EscuelaRepository {
  constructor() {
    this.model = Escuela;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createEscuela(escuelaData) {
    return await this.model.create(escuelaData);
  }

  async updateEscuela(id, escuelaData) {
    const escuela = await this.findById(id);
    if (!escuela) {
      return null;
    }
    return await escuela.update(escuelaData);
  }

  async deleteEscuela(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
