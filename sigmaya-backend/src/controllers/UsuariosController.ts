// src/controllers/UsuariosRolesController.ts
import { Request, Response } from "express";
import { UsuariosService } from "../services/UsuariosService";

export class UsuariosController {
  private usuariosRolesService = new UsuariosService();

  // Usuarios
  async getUsuarios(req: Request, res: Response) {
    const usuarios = await this.usuariosRolesService.getUsuarios();
    res.json(usuarios);
  }

  async getUsuarioById(req: Request, res: Response) {
    const usuario = await this.usuariosRolesService.getUsuarioById(Number(req.params.id));
    res.json(usuario);
  }

  async createUsuario(req: Request, res: Response) {
    const nuevoUsuario = await this.usuariosRolesService.createUsuario(req.body);
    res.json(nuevoUsuario);
  }

  async updateUsuario(req: Request, res: Response) {
    const usuario = await this.usuariosRolesService.updateUsuario(Number(req.params.id), req.body);
    res.json(usuario);
  }

  async deleteUsuario(req: Request, res: Response) {
    const success = await this.usuariosRolesService.deleteUsuario(Number(req.params.id));
    res.json({ success });
  }

  // Tipos de documento
  async getTiposDocumento(req: Request, res: Response) {
    const tiposDocumento = await this.usuariosRolesService.getTiposDocumento();
    res.json(tiposDocumento);
  }

  async getTipoDocumentoById(req: Request, res: Response) {
    const tipoDocumento = await this.usuariosRolesService.getTipoDocumentoById(Number(req.params.id));
    res.json(tipoDocumento);
  }

  async createTipoDocumento(req: Request, res: Response) {
    const nuevoTipoDocumento = await this.usuariosRolesService.createTipoDocumento(req.body);
    res.json(nuevoTipoDocumento);
  }

  async updateTipoDocumento(req: Request, res: Response) {
    const tipoDocumento = await this.usuariosRolesService.updateTipoDocumento(Number(req.params.id), req.body);
    res.json(tipoDocumento);
  }

  async deleteTipoDocumento(req: Request, res: Response) {
    const success = await this.usuariosRolesService.deleteTipoDocumento(Number(req.params.id));
    res.json({ success });
  }

  // Identidades de género
  async getIdentidadesGenero(req: Request, res: Response) {
    const identidadesGenero = await this.usuariosRolesService.getIdentidadesGenero();
    res.json(identidadesGenero);
  }

  async getIdentidadGeneroById(req: Request, res: Response) {
    const identidadGenero = await this.usuariosRolesService.getIdentidadGeneroById(Number(req.params.id));
    res.json(identidadGenero);
  }

  async createIdentidadGenero(req: Request, res: Response) {
    const nuevaIdentidadGenero = await this.usuariosRolesService.createIdentidadGenero(req.body);
    res.json(nuevaIdentidadGenero);
  }

  async updateIdentidadGenero(req: Request, res: Response) {
    const identidadGenero = await this.usuariosRolesService.updateIdentidadGenero(Number(req.params.id), req.body);
    res.json(identidadGenero);
  }

  async deleteIdentidadGenero(req: Request, res: Response) {
    const success = await this.usuariosRolesService.deleteIdentidadGenero(Number(req.params.id));
    res.json({ success });
  }

  // Grupos étnicos
  async getGruposEtnico(req: Request, res: Response) {
    const gruposEtnico = await this.usuariosRolesService.getGruposEtnico();
    res.json(gruposEtnico);
  }

  async getGrupoEtnicoById(req: Request, res: Response) {
    const grupoEtnico = await this.usuariosRolesService.getGrupoEtnicoById(Number(req.params.id));
    res.json(grupoEtnico);
  }

  async createGrupoEtnico(req: Request, res: Response) {
    const nuevoGrupoEtnico = await this.usuariosRolesService.createGrupoEtnico(req.body);
    res.json(nuevoGrupoEtnico);
  }

  async updateGrupoEtnico(req: Request, res: Response) {
    const grupoEtnico = await this.usuariosRolesService.updateGrupoEtnico(Number(req.params.id), req.body);
    res.json(grupoEtnico);
  }

  async deleteGrupoEtnico(req: Request, res: Response) {
    const success = await this.usuariosRolesService.deleteGrupoEtnico(Number(req.params.id));
    res.json({ success });
  }

  // Estados civiles
  async getEstadosCivil(req: Request, res: Response) {
    const estadosCivil = await this.usuariosRolesService.getEstadosCivil();
    res.json(estadosCivil);
  }

  async getEstadoCivilById(req: Request, res: Response) {
    const estadoCivil = await this.usuariosRolesService.getEstadoCivilById(Number(req.params.id));
    res.json(estadoCivil);
  }

  async createEstadoCivil(req: Request, res: Response) {
    const nuevoEstadoCivil = await this.usuariosRolesService.createEstadoCivil(req.body);
    res.json(nuevoEstadoCivil);
  }

  async updateEstadoCivil(req: Request, res: Response) {
    const estadoCivil = await this.usuariosRolesService.updateEstadoCivil(Number(req.params.id), req.body);
    res.json(estadoCivil);
  }

  async deleteEstadoCivil(req: Request, res: Response) {
    const success = await this.usuariosRolesService.deleteEstadoCivil(Number(req.params.id));
    res.json({ success });
  }

  // Estados
  async getEstados(req: Request, res: Response) {
    const estados = await this.usuariosRolesService.getEstados();
    res.json(estados);
  }

  async getEstadoById(req: Request, res: Response) {
    const estado = await this.usuariosRolesService.getEstadoById(Number(req.params.id));
    res.json(estado);
  }

  async createEstado(req: Request, res: Response) {
    const nuevoEstado = await this.usuariosRolesService.createEstado(req.body);
    res.json(nuevoEstado);
  }

  async updateEstado(req: Request, res: Response) {
    const estado = await this.usuariosRolesService.updateEstado(Number(req.params.id), req.body);
    res.json(estado);
  }

  async deleteEstado(req: Request, res: Response) {
    const success = await this.usuariosRolesService.deleteEstado(Number(req.params.id));
    res.json({ success });
  }
}
