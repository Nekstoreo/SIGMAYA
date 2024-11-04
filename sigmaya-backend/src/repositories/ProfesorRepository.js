import {
  Profesor
} from "../models/Profesor.js";

// Repositorio para tbl_profesores

export class ProfesorRepository {
  constructor() {
    this.model = Profesor;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createProfesor(profesorData) {
    return await this.model.create(profesorData);
  }

  async updateProfesor(id, profesorData) {
    const profesor = await this.findById(id);
    if (!profesor) {
      return null;
    }
    return await profesor.update(profesorData);
  }

  async deleteProfesor(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
