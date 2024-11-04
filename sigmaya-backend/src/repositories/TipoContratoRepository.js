import {
  TipoContrato
} from "../models/TipoContrato.js";

// Repositorio para tbl_tipos_contrato

export class TipoContratoRepository {
  constructor() {
    this.model = TipoContrato;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createTipoContrato(tipoContratoData) {
    return await this.model.create(tipoContratoData);
  }

  async updateTipoContrato(id, tipoContratoData) {
    const tipoContrato = await this.findById(id);
    if (!tipoContrato) {
      return null;
    }
    return await tipoContrato.update(tipoContratoData);
  }

  async deleteTipoContrato(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
