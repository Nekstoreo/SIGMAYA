import {
  Credencial
} from "../models/Credencial.js";

// Repositorio para tbl_credenciales

export class CredencialRepository {
  constructor() {
    this.model = Credencial;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createCredencial(credencialData) {
    return await this.model.create(credencialData);
  }

  async updateCredencial(id, credencialData) {
    const credencial = await this.findById(id);
    if (!credencial) {
      return null;
    }
    return await credencial.update(credencialData);
  }

  async deleteCredencial(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
