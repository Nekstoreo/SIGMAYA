import {
  Sede
} from "../models/Sede.js";

// Repositorio para tbl_sedes

export class SedeRepository {
  constructor() {
    this.model = Sede;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createSede(sedeData) {
    return await this.model.create(sedeData);
  }

  async updateSede(id, sedeData) {
    const sede = await this.findById(id);
    if (!sede) {
      return null;
    }
    return await sede.update(sedeData);
  }

  async deleteSede(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
