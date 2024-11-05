import { DECIMAL } from "sequelize";
import {
  DetalleCalificacion,
  setupAssociations
} from "../models/DetalleCalificacion.js";

// Repositorio para tbl_detalles_calificaciones

export class DetalleCalificacionRepository {
  constructor() {
    this.model = DetalleCalificacion;
    setupAssociations();
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createDetalleCalificacion(detalleCalificacionData) {
    return await this.model.create(detalleCalificacionData);
  }

  async updateDetalleCalificacion(id, detalleCalificacionData) {
    const detalleCalificacion = await this.findById(id);
    if (!detalleCalificacion) {
      return null;
    }
    return await detalleCalificacion.update(detalleCalificacionData);
  }

  async deleteDetalleCalificacion(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
