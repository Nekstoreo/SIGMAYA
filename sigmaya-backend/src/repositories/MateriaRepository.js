import {
  Materia
} from "../models/Materia.js";

// Repositorio para tbl_materias

export class MateriaRepository {
  constructor() {
    this.model = Materia;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createMateria(materiaData) {
    return await this.model.create(materiaData);
  }

  async updateMateria(id, materiaData) {
    const materia = await this.findById(id);
    if (!materia) {
      return null;
    }
    return await materia.update(materiaData);
  }

  async deleteMateria(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
