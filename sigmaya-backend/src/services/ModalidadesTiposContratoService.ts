import {
  ModalidadRepository,
  TipoContratoRepository,
} from "../repositories/allRepositories";

export class ModalidadesTiposContratoService {
  private modalidadRepo: ModalidadRepository;
  private tipoContratoRepo: TipoContratoRepository;

  constructor() {
    this.modalidadRepo = new ModalidadRepository();
    this.tipoContratoRepo = new TipoContratoRepository();
  }

  // tbl_modalidades
  async getModalidades() {
    return await this.modalidadRepo.findAll();
  }

  async getModalidadById(id: number) {
    return await this.modalidadRepo.findById(id);
  }

  async createModalidad(data: any) {
    return await this.modalidadRepo.createModalidad(data);
  }

  async updateModalidad(id: number, data: any) {
    return await this.modalidadRepo.updateModalidad(id, data);
  }

  async deleteModalidad(id: number) {
    return await this.modalidadRepo.deleteModalidad(id);
  }

  // tbl_tipos_contrato

  async getTiposContrato() {
    return await this.tipoContratoRepo.findAll();
  }

  async getTipoContratoById(id: number) {
    return await this.tipoContratoRepo.findById(id);
  }

  async createTipoContrato(data: any) {
    return await this.tipoContratoRepo.createTipoContrato(data);
  }

  async updateTipoContrato(id: number, data: any) {
    return await this.tipoContratoRepo.updateTipoContrato(id, data);
  }

  async deleteTipoContrato(id: number) {
    return await this.tipoContratoRepo.deleteTipoContrato(id);
  }
}
