import {
  Region
} from "../models/Region.js";

// Repositorio para tbl_regiones

export class RegionRepository {
  constructor() {
    this.model = Region;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createRegion(regionData) {
    return await this.model.create(regionData);
  }

  async updateRegion(id, regionData) {
    const region = await this.findById(id);
    if (!region) {
      return null;
    }
    return await region.update(regionData);
  }

  async deleteRegion(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
