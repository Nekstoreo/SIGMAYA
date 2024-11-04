import { Pais } from "../models/Pais.js";

// Repositorio para tbl_paises

export class PaisRepository {
  constructor() {
    this.model = Pais;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createPais(paisData) {
    return await this.model.create(paisData);
  }

  async updatePais(id, paisData) {
    const pais = await this.findById(id);
    if (!pais) {
      return null;
    }
    return await pais.update(paisData);
  }

  async deletePais(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
