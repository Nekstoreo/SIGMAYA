import {
  Ciudad
} from "../models/Ciudad.js";

// Repositorio para tbl_ciudades

export class CiudadRepository {
  constructor() {
    this.model = Ciudad;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createCiudad(ciudadData) {
    return await this.model.create(ciudadData);
  }

  async updateCiudad(id, ciudadData) {
    const ciudad = await this.findById(id);
    if (!ciudad) {
      return null;
    }
    return await ciudad.update(ciudadData);
  }

  async deleteCiudad(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
