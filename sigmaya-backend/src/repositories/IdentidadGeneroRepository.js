import {
  IdentidadGenero
} from "../models/IdentidadGenero.js";

// Repositorio para tbl_identidades_genero

export class IdentidadGeneroRepository {
  constructor() {
    this.model = IdentidadGenero;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createIdentidadGenero(identidadGeneroData) {
    return await this.model.create(identidadGeneroData);
  }

  async updateIdentidadGenero(id, identidadGeneroData) {
    const identidadGenero = await this.findById(id);
    if (!identidadGenero) {
      return null;
    }
    return await identidadGenero.update(identidadGeneroData);
  }

  async deleteIdentidadGenero(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
