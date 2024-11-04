import {
  Departamento
} from "../models/Departamento.js";

// Repositorio para tbl_departamentos

export class DepartamentoRepository {
  constructor() {
    this.model = Departamento;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createDepartamento(departamentoData) {
    return await this.model.create(departamentoData);
  }

  async updateDepartamento(id, departamentoData) {
    const departamento = await this.findById(id);
    if (!departamento) {
      return null;
    }
    return await departamento.update(departamentoData);
  }

  async deleteDepartamento(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
