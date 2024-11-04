import {
  Facultad
} from "../models/Facultad.js";

// Repositorio para tbl_facultades

export class FacultadRepository {
  constructor() {
    this.model = Facultad;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createFacultad(facultadData) {
    return await this.model.create(facultadData);
  }

  async updateFacultad(id, facultadData) {
    const facultad = await this.findById(id);
    if (!facultad) {
      return null;
    }
    return await facultad.update(facultadData);
  }

  async deleteFacultad(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
