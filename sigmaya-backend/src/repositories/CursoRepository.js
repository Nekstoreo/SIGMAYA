import {
  Curso
} from "../models/Curso.js";

// Repositorio para tbl_cursos

export class CursoRepository {
  constructor() {
    this.model = Curso;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createCurso(cursoData) {
    return await this.model.create(cursoData);
  }

  async updateCurso(id, cursoData) {
    const curso = await this.findById(id);
    if (!curso) {
      return null;
    }
    return await curso.update(cursoData);
  }

  async deleteCurso(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
