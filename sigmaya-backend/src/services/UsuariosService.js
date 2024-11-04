import { UsuarioRepository } from "../repositories/UsuarioRepository.js";
import { TipoDocumentoRepository } from "../repositories/TipoDocumentoRepository.js";
import { IdentidadGeneroRepository } from "../repositories/IdentidadGeneroRepository.js";
import { GrupoEtnicoRepository } from "../repositories/GrupoEtnicoRepository.js";
import { EstadoCivilRepository } from "../repositories/EstadoCivilRepository.js";
import { EstadoRepository } from "../repositories/EstadoRepository.js";

export class UsuariosService {
  constructor() {
    this.usuarioRepo = new UsuarioRepository();
    this.tipoDocumentoRepo = new TipoDocumentoRepository();
    this.identidadGeneroRepo = new IdentidadGeneroRepository();
    this.grupoEtnicoRepo = new GrupoEtnicoRepository();
    this.estadoCivilRepo = new EstadoCivilRepository();
    this.estadoRepo = new EstadoRepository();
  }

  // Usuarios
  async getUsuarios() {
    return await this.usuarioRepo.findAll();
  }

  async getUsuarioById(id) {
    return await this.usuarioRepo.findById(id);
  }

  async createUsuario(data) {
    return await this.usuarioRepo.createUsuario(data);
  }

  async updateUsuario(id, data) {
    return await this.usuarioRepo.updateUsuario(id, data);
  }

  async deleteUsuario(id) {
    return await this.usuarioRepo.deleteUsuario(id);
  }

  // Tipos de documento
  async getTiposDocumento() {
    return await this.tipoDocumentoRepo.findAll();
  }

  async getTipoDocumentoById(id) {
    return await this.tipoDocumentoRepo.findById(id);
  }

  async createTipoDocumento(data) {
    return await this.tipoDocumentoRepo.createTipoDocumento(data);
  }

  async updateTipoDocumento(id, data) {
    return await this.tipoDocumentoRepo.updateTipoDocumento(id, data);
  }

  async deleteTipoDocumento(id) {
    return await this.tipoDocumentoRepo.deleteTipoDocumento(id);
  }

  // Identidades de género
  async getIdentidadesGenero() {
    return await this.identidadGeneroRepo.findAll();
  }

  async getIdentidadGeneroById(id) {
    return await this.identidadGeneroRepo.findById(id);
  }

  async createIdentidadGenero(data) {
    return await this.identidadGeneroRepo.createIdentidadGenero(data);
  }

  async updateIdentidadGenero(id, data) {
    return await this.identidadGeneroRepo.updateIdentidadGenero(id, data);
  }

  async deleteIdentidadGenero(id) {
    return await this.identidadGeneroRepo.deleteIdentidadGenero(id);
  }

  // Grupos étnicos
  async getGruposEtnico() {
    return await this.grupoEtnicoRepo.findAll();
  }

  async getGrupoEtnicoById(id) {
    return await this.grupoEtnicoRepo.findById(id);
  }

  async createGrupoEtnico(data) {
    return await this.grupoEtnicoRepo.createGrupoEtnico(data);
  }

  async updateGrupoEtnico(id, data) {
    return await this.grupoEtnicoRepo.updateGrupoEtnico(id, data);
  }

  async deleteGrupoEtnico(id) {
    return await this.grupoEtnicoRepo.deleteGrupoEtnico(id);
  }

  // Estados civiles
  async getEstadosCivil() {
    return await this.estadoCivilRepo.findAll();
  }

  async getEstadoCivilById(id) {
    return await this.estadoCivilRepo.findById(id);
  }

  async createEstadoCivil(data) {
    return await this.estadoCivilRepo.createEstadoCivil(data);
  }

  async updateEstadoCivil(id, data) {
    return await this.estadoCivilRepo.updateEstadoCivil(id, data);
  }

  async deleteEstadoCivil(id) {
    return await this.estadoCivilRepo.deleteEstadoCivil(id);
  }

  // Estados
  async getEstados() {
    return await this.estadoRepo.findAll();
  }

  async getEstadoById(id) {
    return await this.estadoRepo.findById(id);
  }

  async createEstado(data) {
    return await this.estadoRepo.createEstado(data);
  }

  async updateEstado(id, data) {
    return await this.estadoRepo.updateEstado(id, data);
  }

  async deleteEstado(id) {
    return await this.estadoRepo.deleteEstado(id);
  }
}
