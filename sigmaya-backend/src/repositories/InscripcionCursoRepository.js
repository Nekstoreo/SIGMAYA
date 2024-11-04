import {
  InscripcionCurso
} from "../models/InscripcionCurso.js";

// Repositorio para tbl_inscripciones_curso

export class InscripcionCursoRepository {
  constructor() {
    this.model = InscripcionCurso;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createInscripcionCurso(inscripcionCursoData) {
    return await this.model.create(inscripcionCursoData);
  }

  async updateInscripcionCurso(id, inscripcionCursoData) {
    const inscripcionCurso = await this.findById(id);
    if (!inscripcionCurso) {
      return null;
    }
    return await inscripcionCurso.update(inscripcionCursoData);
  }

  async deleteInscripcionCurso(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
