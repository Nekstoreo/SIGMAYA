import {
  EstadoEstudiante
} from "../models/EstadoEstudiante.js";

// Repositorio para tbl_estados_estudiante

export class EstadoEstudianteRepository {
  constructor() {
    this.model = EstadoEstudiante;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createEstadoEstudiante(estadoEstudianteData) {
    return await this.model.create(estadoEstudianteData);
  }

  async updateEstadoEstudiante(id, estadoEstudianteData) {
    const estadoEstudiante = await this.findById(id);
    if (!estadoEstudiante) {
      return null;
    }
    return await estadoEstudiante.update(estadoEstudianteData);
  }

  async deleteEstadoEstudiante(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
