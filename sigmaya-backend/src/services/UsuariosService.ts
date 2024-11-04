import { UsuarioRepository, TipoDocumentoRepository, IdentidadGeneroRepository, GrupoEtnicoRepository, EstadoCivilRepository, EstadoRepository } from "../repositories/allRepositories";

export class UsuariosService {
  private usuarioRepo = new UsuarioRepository();
  private tipoDocumentoRepo = new TipoDocumentoRepository();
  private identidadGeneroRepo = new IdentidadGeneroRepository();
  private grupoEtnicoRepo = new GrupoEtnicoRepository();
  private estadoCivilRepo = new EstadoCivilRepository();
  private estadoRepo = new EstadoRepository();

  // Usuarios
  async getUsuarios() {
    return await this.usuarioRepo.findAll();
  }

  async getUsuarioById(id: number) {
    return await this.usuarioRepo.findById(id);
  }

  async createUsuario(data: any) {
    return await this.usuarioRepo.createUsuario(data);
  }

  async updateUsuario(id: number, data: any) {
    return await this.usuarioRepo.updateUsuario(id, data);
  }

  async deleteUsuario(id: number) {
    return await this.usuarioRepo.deleteUsuario(id);
  }

  // Tipos de documento
  async getTiposDocumento() {
    return await this.tipoDocumentoRepo.findAll();
  }

  async getTipoDocumentoById(id: number) {
    return await this.tipoDocumentoRepo.findById(id);
  }

  async createTipoDocumento(data: any) {
    return await this.tipoDocumentoRepo.createTipoDocumento(data);
  }

  async updateTipoDocumento(id: number, data: any) {
    return await this.tipoDocumentoRepo.updateTipoDocumento(id, data);
  }

  async deleteTipoDocumento(id: number) {
    return await this.tipoDocumentoRepo.deleteTipoDocumento(id);
  }

  // Identidades de género
  async getIdentidadesGenero() {
    return await this.identidadGeneroRepo.findAll();
  }

  async getIdentidadGeneroById(id: number) {
    return await this.identidadGeneroRepo.findById(id);
  }

  async createIdentidadGenero(data: any) {
    return await this.identidadGeneroRepo.createIdentidadGenero(data);
  }

  async updateIdentidadGenero(id: number, data: any) {
    return await this.identidadGeneroRepo.updateIdentidadGenero(id, data);
  }

  async deleteIdentidadGenero(id: number) {
    return await this.identidadGeneroRepo.deleteIdentidadGenero(id);
  }

  // Grupos étnicos
  async getGruposEtnico() {
    return await this.grupoEtnicoRepo.findAll();
  }

  async getGrupoEtnicoById(id: number) {
    return await this.grupoEtnicoRepo.findById(id);
  }

  async createGrupoEtnico(data: any) {
    return await this.grupoEtnicoRepo.createGrupoEtnico(data);
  }

  async updateGrupoEtnico(id: number, data: any) {
    return await this.grupoEtnicoRepo.updateGrupoEtnico(id, data);
  }

  async deleteGrupoEtnico(id: number) {
    return await this.grupoEtnicoRepo.deleteGrupoEtnico(id);
  }

  // Estados civiles
  async getEstadosCivil() {
    return await this.estadoCivilRepo.findAll();
  }

  async getEstadoCivilById(id: number) {
    return await this.estadoCivilRepo.findById(id);
  }

  async createEstadoCivil(data: any) {
    return await this.estadoCivilRepo.createEstadoCivil(data);
  }

  async updateEstadoCivil(id: number, data: any) {
    return await this.estadoCivilRepo.updateEstadoCivil(id, data);
  }

  async deleteEstadoCivil(id: number) {
    return await this.estadoCivilRepo.deleteEstadoCivil(id);
  }

  // Estados
  async getEstados() {
    return await this.estadoRepo.findAll();
  }

  async getEstadoById(id: number) {
    return await this.estadoRepo.findById(id);
  }

  async createEstado(data: any) {
    return await this.estadoRepo.createEstado(data);
  }

  async updateEstado(id: number, data: any) {
    return await this.estadoRepo.updateEstado(id, data);
  }

  async deleteEstado(id: number) {
    return await this.estadoRepo.deleteEstado(id);
  }
}
