import { CredencialRepository } from "../repositories/CredencialRepository.js";

export class CredencialesService {
  constructor() {
    this.credencialRepo = new CredencialRepository();
  }

  async getCredenciales() {
    return await this.credencialRepo.findAll();
  }

  async getCredencialById(id) {
    return await this.credencialRepo.findById(id);
  }

  async createCredencial(data) {
    return await this.credencialRepo.createCredencial(data);
  }

  async updateCredencial(id, data) {
    return await this.credencialRepo.updateCredencial(id, data);
  }

  async deleteCredencial(id) {
    return await this.credencialRepo.deleteCredencial(id);
  }
}
