// src/services/AdministrativosService.js
import { AdministrativoRepository } from "../repositories/AdministrativoRepository.js";
import { DepartamentoRepository } from "../repositories/DepartamentoRepository.js";
import { NivelAccesoRepository } from "../repositories/NivelAccesoRepository.js";
import { CargoAdministrativoRepository } from "../repositories/CargoAdministrativoRepository.js";
  
  export class AdministrativosService {
  constructor() {
    this.administrativoRepo = new AdministrativoRepository();
    this.cargoAdministrativoRepo = new CargoAdministrativoRepository();
    this.nivelAccesoRepo = new NivelAccesoRepository();
    this.departamentoRepo = new DepartamentoRepository();
  }
  
  // Métodos para tbl_administrativos
  async getAdministrativos() {
    return await this.administrativoRepo.findAll();
  }
  
  async getAdministrativoById(id) {
    return await this.administrativoRepo.findById(id);
  }
  
  async createAdministrativo(data) {
    return await this.administrativoRepo.createAdministrativo(data);
  }
  
  async updateAdministrativo(id, data) {
    return await this.administrativoRepo.updateAdministrativo(id, data);
  }
  
  async deleteAdministrativo(id) {
    return await this.administrativoRepo.deleteAdministrativo(id);
  }
  
  // Métodos para tbl_cargos_administrativos
  async getCargosAdministrativos() {
    return await this.cargoAdministrativoRepo.findAll();
  }
  
  async getCargoAdministrativoById(id) {
    return await this.cargoAdministrativoRepo.findById(id);
  }
  
  async createCargoAdministrativo(data) {
    return await this.cargoAdministrativoRepo.createCargoAdministrativo(data);
  }
  
  async updateCargoAdministrativo(id, data) {
    return await this.cargoAdministrativoRepo.updateCargoAdministrativo(id, data);
  }
  
  async deleteCargoAdministrativo(id) {
    return await this.cargoAdministrativoRepo.deleteCargoAdministrativo(id);
  }
  
  // Métodos para tbl_niveles_acceso
  async getNivelesAcceso() {
    return await this.nivelAccesoRepo.findAll();
  }
  
  async getNivelAccesoById(id) {
    return await this.nivelAccesoRepo.findById(id);
  }
  
  async createNivelAcceso(data) {
    return await this.nivelAccesoRepo.createNivelAcceso(data);
  }
  
  async updateNivelAcceso(id, data) {
    return await this.nivelAccesoRepo.updateNivelAcceso(id, data);
  }
  
  async deleteNivelAcceso(id) {
    return await this.nivelAccesoRepo.deleteNivelAcceso(id);
  }
  
  // Métodos para tbl_departamentos
  async getDepartamentos() {
    return await this.departamentoRepo.findAll();
  }
  
  async getDepartamentoById(id) {
    return await this.departamentoRepo.findById(id);
  }
  
  async createDepartamento(data) {
    return await this.departamentoRepo.createDepartamento(data);
  }
  
  async updateDepartamento(id, data) {
    return await this.departamentoRepo.updateDepartamento(id, data);
  }
  
  async deleteDepartamento(id) {
    return await this.departamentoRepo.deleteDepartamento(id);
  }
  }
