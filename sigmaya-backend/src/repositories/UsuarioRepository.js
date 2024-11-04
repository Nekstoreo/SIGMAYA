import {
  Usuario
} from "../models/Usuario.js";

// Repositorio para tbl_usuarios

export class UsuarioRepository {
  constructor() {
    this.model = Usuario;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async createUsuario(usuarioData) {
    return await this.model.create(usuarioData);
  }

  async updateUsuario(id, usuarioData) {
    const usuario = await this.findById(id);
    if (!usuario) {
      return null;
    }
    return await usuario.update(usuarioData);
  }

  async deleteUsuario(id) {
    const result = await this.model.destroy({ where: { id } });
    return result !== 0;
  }
}
