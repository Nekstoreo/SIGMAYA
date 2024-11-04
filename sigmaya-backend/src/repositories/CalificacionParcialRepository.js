import {
  CalificacionParcial
} from "../models/CalificacionParcial.js";

// Repositorio para tbl_calificaciones_parciales

export class CalificacionParcialRepository {
  constructor() {
    this.model = CalificacionParcial;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createCalificacionParcial(calificacionParcialData) {
    return await this.model.create(calificacionParcialData);
  }

  async updateCalificacionParcial(id, calificacionParcialData) {
    const calificacionParcial = await this.findById(id);
    if (!calificacionParcial) {
      return null;
    }
    return await calificacionParcial.update(calificacionParcialData);
  }

  async deleteCalificacionParcial(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
