// src/services/AdministrativosService.ts
import {
    AdministrativoRepository,
    CargoAdministrativoRepository,
    NivelAccesoRepository,
    DepartamentoRepository,
  } from "../repositories/allRepositories";
  
  export class AdministrativosService {
    private administrativoRepo: AdministrativoRepository;
    private cargoAdministrativoRepo: CargoAdministrativoRepository;
    private nivelAccesoRepo: NivelAccesoRepository;
    private departamentoRepo: DepartamentoRepository;
  
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
  
    async getAdministrativoById(id: number) {
      return await this.administrativoRepo.findById(id);
    }
  
    async createAdministrativo(data: any) {
      return await this.administrativoRepo.createAdministrativo(data);
    }
  
    async updateAdministrativo(id: number, data: any) {
      return await this.administrativoRepo.updateAdministrativo(id, data);
    }
  
    async deleteAdministrativo(id: number) {
      return await this.administrativoRepo.deleteAdministrativo(id);
    }
  
    // Métodos para tbl_cargos_administrativos
    async getCargosAdministrativos() {
      return await this.cargoAdministrativoRepo.findAll();
    }
  
    async getCargoAdministrativoById(id: number) {
      return await this.cargoAdministrativoRepo.findById(id);
    }
  
    async createCargoAdministrativo(data: any) {
      return await this.cargoAdministrativoRepo.createCargoAdministrativo(data);
    }
  
    async updateCargoAdministrativo(id: number, data: any) {
      return await this.cargoAdministrativoRepo.updateCargoAdministrativo(id, data);
    }
  
    async deleteCargoAdministrativo(id: number) {
      return await this.cargoAdministrativoRepo.deleteCargoAdministrativo(id);
    }
  
    // Métodos para tbl_niveles_acceso
    async getNivelesAcceso() {
      return await this.nivelAccesoRepo.findAll();
    }
  
    async getNivelAccesoById(id: number) {
      return await this.nivelAccesoRepo.findById(id);
    }
  
    async createNivelAcceso(data: any) {
      return await this.nivelAccesoRepo.createNivelAcceso(data);
    }
  
    async updateNivelAcceso(id: number, data: any) {
      return await this.nivelAccesoRepo.updateNivelAcceso(id, data);
    }
  
    async deleteNivelAcceso(id: number) {
      return await this.nivelAccesoRepo.deleteNivelAcceso(id);
    }
  
    // Métodos para tbl_departamentos
    async getDepartamentos() {
      return await this.departamentoRepo.findAll();
    }
  
    async getDepartamentoById(id: number) {
      return await this.departamentoRepo.findById(id);
    }
  
    async createDepartamento(data: any) {
      return await this.departamentoRepo.createDepartamento(data);
    }
  
    async updateDepartamento(id: number, data: any) {
      return await this.departamentoRepo.updateDepartamento(id, data);
    }
  
    async deleteDepartamento(id: number) {
      return await this.departamentoRepo.deleteDepartamento(id);
    }
  }