import { DetalleCalificacionRepository } from "../repositories/DetalleCalificacionRepository.js";
import { PrerrequisitoRepository } from "../repositories/PrerrequisitoRepository.js";

export class PrerrequisitosDetallesCalificacionesService {
  constructor() {
    this.detalleCalificacionRepo = new DetalleCalificacionRepository();
    this.prerrequisitoRepo = new PrerrequisitoRepository();
  }

  // Métodos para tbl_detalles_calificaciones
  async getDetallesCalificaciones() {
    return await this.detalleCalificacionRepo.findAll();
  }

  async getDetalleCalificacionById(id) {
    return await this.detalleCalificacionRepo.findById(id);
  }

  async createDetalleCalificacion(data) {
    return await this.detalleCalificacionRepo.createDetalleCalificacion(data);
  }

  async updateDetalleCalificacion(id, data) {
    return await this.detalleCalificacionRepo.updateDetalleCalificacion(
      id,
      data
    );
  }

  async deleteDetalleCalificacion(id) {
    return await this.detalleCalificacionRepo.deleteDetalleCalificacion(id);
  }

  // Métodos para tbl_prerrequisitos
  async getPrerrequisitos() {
    return await this.prerrequisitoRepo.findAll();
  }

  async getPrerrequisitoById(id) {
    return await this.prerrequisitoRepo.findById(id);
  }

  async createPrerrequisito(data) {
    return await this.prerrequisitoRepo.createPrerrequisito(data);
  }

  async updatePrerrequisito(id, data) {
    return await this.prerrequisitoRepo.updatePrerrequisito(id, data);
  }

  async deletePrerrequisito(id) {
    return await this.prerrequisitoRepo.deletePrerrequisito(id);
  }
}
