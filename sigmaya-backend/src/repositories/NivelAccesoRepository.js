import {
  NivelAcceso
} from "../models/NivelAcceso.js";

// Repositorio para tbl_niveles_acceso

export class NivelAccesoRepository {
  constructor() {
    this.model = NivelAcceso;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createNivelAcceso(nivelAccesoData) {
    return await this.model.create(nivelAccesoData);
  }

  async updateNivelAcceso(id, nivelAccesoData) {
    const nivelAcceso = await this.findById(id);
    if (!nivelAcceso) {
      return null;
    }
    return await nivelAcceso.update(nivelAccesoData);
  }

  async deleteNivelAcceso(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
