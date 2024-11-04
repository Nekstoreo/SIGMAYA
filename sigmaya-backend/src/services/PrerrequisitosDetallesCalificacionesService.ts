import {
  DetalleCalificacionRepository,
  PrerrequisitoRepository,
} from '../repositories/allRepositories';

export class PrerrequisitosDetallesCalificacionesService {
  private detalleCalificacionRepo = new DetalleCalificacionRepository();
  private prerrequisitoRepo = new PrerrequisitoRepository();

  // Métodos para tbl_detalles_calificaciones
  async getDetallesCalificaciones() {
    return await this.detalleCalificacionRepo.findAll();
  }

  async getDetalleCalificacionById(id: number) {
    return await this.detalleCalificacionRepo.findById(id);
  }

  async createDetalleCalificacion(data: any) {
    return await this.detalleCalificacionRepo.createDetalleCalificacion(data);
  }

  async updateDetalleCalificacion(id: number, data: any) {
    return await this.detalleCalificacionRepo.updateDetalleCalificacion(id, data);
  }

  async deleteDetalleCalificacion(id: number) {
    return await this.detalleCalificacionRepo.deleteDetalleCalificacion(id);
  }

  // Métodos para tbl_prerrequisitos
  async getPrerrequisitos() {
    return await this.prerrequisitoRepo.findAll();
  }

  async getPrerrequisitoById(id: number) {
    return await this.prerrequisitoRepo.findById(id);
  }

  async createPrerrequisito(data: any) {
    return await this.prerrequisitoRepo.createPrerrequisito(data);
  }

  async updatePrerrequisito(id: number, data: any) {
    return await this.prerrequisitoRepo.updatePrerrequisito(id, data);
  }

  async deletePrerrequisito(id: number) {
    return await this.prerrequisitoRepo.deletePrerrequisito(id);
  }
}
