import { SedeRepository } from "../repositories/SedeRepository.js";
import { PaisRepository } from "../repositories/PaisRepository.js";
import { RegionRepository } from "../repositories/RegionRepository.js";
import { CiudadRepository } from "../repositories/CiudadRepository.js";

export class SedesLocalizacionService {
  constructor() {
    this.sedeRepo = new SedeRepository();
    this.paisRepo = new PaisRepository();
    this.regionRepo = new RegionRepository();
    this.ciudadRepo = new CiudadRepository();
  }

  // Métodos para sedes
  async getSedes() {
    return await this.sedeRepo.findAll();
  }

  async getSedeById(id) {
    return await this.sedeRepo.findById(id);
  }

  async createSede(data) {
    return await this.sedeRepo.createSede(data);
  }

  async updateSede(id, data) {
    return await this.sedeRepo.updateSede(id, data);
  }

  async deleteSede(id) {
    return await this.sedeRepo.deleteSede(id);
  }

  // Métodos para países
  async getPaises() {
    return await this.paisRepo.findAll();
  }

  async getPaisById(id) {
    return await this.paisRepo.findById(id);
  }

  async createPais(data) {
    return await this.paisRepo.createPais(data);
  }

  async updatePais(id, data) {
    return await this.paisRepo.updatePais(id, data);
  }

  async deletePais(id) {
    return await this.paisRepo.deletePais(id);
  }

  // Métodos para regiones
  async getRegiones() {
    return await this.regionRepo.findAll();
  }

  async getRegionById(id) {
    return await this.regionRepo.findById(id);
  }

  async createRegion(data) {
    return await this.regionRepo.createRegion(data);
  }

  async updateRegion(id, data) {
    return await this.regionRepo.updateRegion(id, data);
  }

  async deleteRegion(id) {
    return await this.regionRepo.deleteRegion(id);
  }

  // Métodos para ciudades
  async getCiudades() {
    return await this.ciudadRepo.findAll();
  }

  async getCiudadById(id) {
    return await this.ciudadRepo.findById(id);
  }

  async createCiudad(data) {
    return await this.ciudadRepo.createCiudad(data);
  }

  async updateCiudad(id, data) {
    return await this.ciudadRepo.updateCiudad(id, data);
  }

  async deleteCiudad(id) {
    return await this.ciudadRepo.deleteCiudad(id);
  }
}
