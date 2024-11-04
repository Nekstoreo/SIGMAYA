import {
  CalificacionFinal
} from "../models/CalificacionFinal.js";

// Repositorio para tbl_calificaciones_finales

export class CalificacionFinalRepository {
  constructor() {
    this.model = CalificacionFinal;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createCalificacionFinal(calificacionFinalData) {
    return await this.model.create(calificacionFinalData);
  }

  async updateCalificacionFinal(id, calificacionFinalData) {
    const calificacionFinal = await this.findById(id);
    if (!calificacionFinal) {
      return null;
    }
    return await calificacionFinal.update(calificacionFinalData);
  }

  async deleteCalificacionFinal(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
