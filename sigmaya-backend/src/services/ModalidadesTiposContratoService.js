import { ModalidadRepository } from "../repositories/ModalidadRepository.js";
import { TipoContratoRepository } from "../repositories/TipoContratoRepository.js";

export class ModalidadesTiposContratoService {
  constructor() {
    this.modalidadRepo = new ModalidadRepository();
    this.tipoContratoRepo = new TipoContratoRepository();
  }

  // tbl_modalidades
  async getModalidades() {
    return await this.modalidadRepo.findAll();
  }

  async getModalidadById(id) {
    return await this.modalidadRepo.findById(id);
  }

  async createModalidad(data) {
    return await this.modalidadRepo.createModalidad(data);
  }

  async updateModalidad(id, data) {
    return await this.modalidadRepo.updateModalidad(id, data);
  }

  async deleteModalidad(id) {
    return await this.modalidadRepo.deleteModalidad(id);
  }

  // tbl_tipos_contrato

  async getTiposContrato() {
    return await this.tipoContratoRepo.findAll();
  }

  async getTipoContratoById(id) {
    return await this.tipoContratoRepo.findById(id);
  }

  async createTipoContrato(data) {
    return await this.tipoContratoRepo.createTipoContrato(data);
  }

  async updateTipoContrato(id, data) {
    return await this.tipoContratoRepo.updateTipoContrato(id, data);
  }

  async deleteTipoContrato(id) {
    return await this.tipoContratoRepo.deleteTipoContrato(id);
  }
}
