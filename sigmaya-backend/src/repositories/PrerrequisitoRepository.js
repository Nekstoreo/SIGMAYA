import {
  Prerrequisito
} from "../models/Prerrequisito.js";

// Repositorio para tbl_prerrequisitos

export class PrerrequisitoRepository {
  constructor() {
    this.model = Prerrequisito;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createPrerrequisito(prerrequisitoData) {
    return await this.model.create(prerrequisitoData);
  }

  async updatePrerrequisito(id, prerrequisitoData) {
    const prerrequisito = await this.findById(id);
    if (!prerrequisito) {
      return null;
    }
    return await prerrequisito.update(prerrequisitoData);
  }

  async deletePrerrequisito(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
