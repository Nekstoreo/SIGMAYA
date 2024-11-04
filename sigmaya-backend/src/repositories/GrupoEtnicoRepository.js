import {
  GrupoEtnico
} from "../models/GrupoEtnico.js";

// Repositorio para tbl_grupos_etnicos

export class GrupoEtnicoRepository {
  constructor() {
    this.model = GrupoEtnico;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createGrupoEtnico(grupoEtnicoData) {
    return await this.model.create(grupoEtnicoData);
  }

  async updateGrupoEtnico(id, grupoEtnicoData) {
    const grupoEtnico = await this.findById(id);
    if (!grupoEtnico) {
      return null;
    }
    return await grupoEtnico.update(grupoEtnicoData);
  }

  async deleteGrupoEtnico(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
