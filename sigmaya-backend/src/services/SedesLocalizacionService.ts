import {
  SedeRepository,
  PaisRepository,
  RegionRepository,
  CiudadRepository,
} from "../repositories/allRepositories";

export class SedesLocalizacionService {
  private sedeRepo = new SedeRepository();
  private paisRepo = new PaisRepository();
  private regionRepo = new RegionRepository();
  private ciudadRepo = new CiudadRepository();

  // Métodos para sedes
  async getSedes() {
    return await this.sedeRepo.findAll();
  }

  async getSedeById(id: number) {
    return await this.sedeRepo.findById(id);
  }

  async createSede(data: any) {
    return await this.sedeRepo.createSede(data);
  }

  async updateSede(id: number, data: any) {
    return await this.sedeRepo.updateSede(id, data);
  }

  async deleteSede(id: number) {
    return await this.sedeRepo.deleteSede(id);
  }

  // Métodos para países
  async getPaises() {
    return await this.paisRepo.findAll();
  }

  async getPaisById(id: number) {
    return await this.paisRepo.findById(id);
  }

  async createPais(data: any) {
    return await this.paisRepo.createPais(data);
  }

  async updatePais(id: number, data: any) {
    return await this.paisRepo.updatePais(id, data);
  }

  async deletePais(id: number) {
    return await this.paisRepo.deletePais(id);
  }

  // Métodos para regiones
  async getRegiones() {
    return await this.regionRepo.findAll();
  }

  async getRegionById(id: number) {
    return await this.regionRepo.findById(id);
  }

  async createRegion(data: any) {
    return await this.regionRepo.createRegion(data);
  }

  async updateRegion(id: number, data: any) {
    return await this.regionRepo.updateRegion(id, data);
  }

  async deleteRegion(id: number) {
    return await this.regionRepo.deleteRegion(id);
  }

  // Métodos para ciudades
  async getCiudades() {
    return await this.ciudadRepo.findAll();
  }

  async getCiudadById(id: number) {
    return await this.ciudadRepo.findById(id);
  }

  async createCiudad(data: any) {
    return await this.ciudadRepo.createCiudad(data);
  }

  async updateCiudad(id: number, data: any) {
    return await this.ciudadRepo.updateCiudad(id, data);
  }

  async deleteCiudad(id: number) {
    return await this.ciudadRepo.deleteCiudad(id);
  }
}
