import {
  TipoDocumento
} from "../models/TipoDocumento.js";

// Repositorio para tbl_tipos_documento

export class TipoDocumentoRepository {
  constructor() {
    this.model = TipoDocumento;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createTipoDocumento(tipoDocumentoData) {
    return await this.model.create(tipoDocumentoData);
  }

  async updateTipoDocumento(id, tipoDocumentoData) {
    const tipoDocumento = await this.findById(id);
    if (!tipoDocumento) {
      return null;
    }
    return await tipoDocumento.update(tipoDocumentoData);
  }

  async deleteTipoDocumento(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
