import {
  CargoAdministrativo
} from "../models/CargoAdministrativo.js";

// Repositorio para tbl_cargos_administrativos

export class CargoAdministrativoRepository {
  constructor() {
    this.model = CargoAdministrativo;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createCargoAdministrativo(cargoAdministrativoData) {
    return await this.model.create(cargoAdministrativoData);
  }

  async updateCargoAdministrativo(id, cargoAdministrativoData) {
    const cargoAdministrativo = await this.findById(id);
    if (!cargoAdministrativo) {
      return null;
    }
    return await cargoAdministrativo.update(cargoAdministrativoData);
  }

  async deleteCargoAdministrativo(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
