import { CredencialRepository } from "../repositories/allRepositories";

export class CredencialesService {
  private credencialRepo = new CredencialRepository();

  async getCredenciales() {
    return await this.credencialRepo.findAll();
  }

  async getCredencialById(id: number) {
    return await this.credencialRepo.findById(id);
  }

  async createCredencial(data: any) {
    return await this.credencialRepo.createCredencial(data);
  }

  async updateCredencial(id: number, data: any) {
    return await this.credencialRepo.updateCredencial(id, data);
  }

  async deleteCredencial(id: number) {
    return await this.credencialRepo.deleteCredencial(id);
  }
}
