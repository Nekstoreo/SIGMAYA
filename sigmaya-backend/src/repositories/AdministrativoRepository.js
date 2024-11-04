import {
  Administrativo
} from "../models/Administrativo.js";

// Repositorio para tbl_administrativos

export class AdministrativoRepository {
  constructor() {
    this.model = Administrativo;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createAdministrativo(administrativoData) {
    return await this.model.create(administrativoData);
  }

  async updateAdministrativo(id, administrativoData) {
    const administrativo = await this.findById(id);
    if (!administrativo) {
      return null;
    }
    return await administrativo.update(administrativoData);
  }

  async deleteAdministrativo(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
