import {
  TipoAdmision
} from "../models/TipoAdmision.js";

// Repositorio para tbl_tipos_admision

export class TipoAdmisionRepository {
  constructor() {
    this.model = TipoAdmision;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createTipoAdmision(tipoAdmisionData) {
    return await this.model.create(tipoAdmisionData);
  }

  async updateTipoAdmision(id, tipoAdmisionData) {
    const tipoAdmision = await this.findById(id);
    if (!tipoAdmision) {
      return null;
    }
    return await tipoAdmision.update(tipoAdmisionData);
  }

  async deleteTipoAdmision(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
