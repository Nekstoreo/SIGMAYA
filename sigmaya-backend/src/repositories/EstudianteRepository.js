import {
  Estudiante
} from "../models/Estudiante.js";

// Repositorio para tbl_estudiantes

export class EstudianteRepository {
  constructor() {
    this.model = Estudiante;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createEstudiante(estudianteData) {
    return await this.model.create(estudianteData);
  }

  async updateEstudiante(id, estudianteData) {
    const estudiante = await this.findById(id);
    if (!estudiante) {
      return null;
    }
    return await estudiante.update(estudianteData);
  }

  async deleteEstudiante(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
