// src/controllers/UsuariosRolesController.ts
import { Request, Response } from "express";
import { UsuariosService } from "../services/UsuariosService";

export class UsuariosController {
  private usuariosService = new UsuariosService();

  // Usuarios
  async getUsuarios(req: Request, res: Response) {
    const usuarios = await this.usuariosService.getUsuarios();
    res.json(usuarios);
  }

  async getUsuarioById(req: Request, res: Response) {
    const usuario = await this.usuariosService.getUsuarioById(Number(req.params.id));
    res.json(usuario);
  }

  async createUsuario(req: Request, res: Response) {
    const nuevoUsuario = await this.usuariosService.createUsuario(req.body);
    res.json(nuevoUsuario);
  }

  async updateUsuario(req: Request, res: Response) {
    const usuario = await this.usuariosService.updateUsuario(Number(req.params.id), req.body);
    res.json(usuario);
  }

  async deleteUsuario(req: Request, res: Response) {
    const success = await this.usuariosService.deleteUsuario(Number(req.params.id));
    res.json({ success });
  }

  // Tipos de documento
  async getTiposDocumento(req: Request, res: Response) {
    const tiposDocumento = await this.usuariosService.getTiposDocumento();
    res.json(tiposDocumento);
  }

  async getTipoDocumentoById(req: Request, res: Response) {
    const tipoDocumento = await this.usuariosService.getTipoDocumentoById(Number(req.params.id));
    res.json(tipoDocumento);
  }

  async createTipoDocumento(req: Request, res: Response) {
    const nuevoTipoDocumento = await this.usuariosService.createTipoDocumento(req.body);
    res.json(nuevoTipoDocumento);
  }

  async updateTipoDocumento(req: Request, res: Response) {
    const tipoDocumento = await this.usuariosService.updateTipoDocumento(Number(req.params.id), req.body);
    res.json(tipoDocumento);
  }

  async deleteTipoDocumento(req: Request, res: Response) {
    const success = await this.usuariosService.deleteTipoDocumento(Number(req.params.id));
    res.json({ success });
  }

  // Identidades de género
  async getIdentidadesGenero(req: Request, res: Response) {
    const identidadesGenero = await this.usuariosService.getIdentidadesGenero();
    res.json(identidadesGenero);
  }

  async getIdentidadGeneroById(req: Request, res: Response) {
    const identidadGenero = await this.usuariosService.getIdentidadGeneroById(Number(req.params.id));
    res.json(identidadGenero);
  }

  async createIdentidadGenero(req: Request, res: Response) {
    const nuevaIdentidadGenero = await this.usuariosService.createIdentidadGenero(req.body);
    res.json(nuevaIdentidadGenero);
  }

  async updateIdentidadGenero(req: Request, res: Response) {
    const identidadGenero = await this.usuariosService.updateIdentidadGenero(Number(req.params.id), req.body);
    res.json(identidadGenero);
  }

  async deleteIdentidadGenero(req: Request, res: Response) {
    const success = await this.usuariosService.deleteIdentidadGenero(Number(req.params.id));
    res.json({ success });
  }

  // Grupos étnicos
  async getGruposEtnico(req: Request, res: Response) {
    const gruposEtnico = await this.usuariosService.getGruposEtnico();
    res.json(gruposEtnico);
  }

  async getGrupoEtnicoById(req: Request, res: Response) {
    const grupoEtnico = await this.usuariosService.getGrupoEtnicoById(Number(req.params.id));
    res.json(grupoEtnico);
  }

  async createGrupoEtnico(req: Request, res: Response) {
    const nuevoGrupoEtnico = await this.usuariosService.createGrupoEtnico(req.body);
    res.json(nuevoGrupoEtnico);
  }

  async updateGrupoEtnico(req: Request, res: Response) {
    const grupoEtnico = await this.usuariosService.updateGrupoEtnico(Number(req.params.id), req.body);
    res.json(grupoEtnico);
  }

  async deleteGrupoEtnico(req: Request, res: Response) {
    const success = await this.usuariosService.deleteGrupoEtnico(Number(req.params.id));
    res.json({ success });
  }

  // Estados civiles
  async getEstadosCivil(req: Request, res: Response) {
    const estadosCivil = await this.usuariosService.getEstadosCivil();
    res.json(estadosCivil);
  }

  async getEstadoCivilById(req: Request, res: Response) {
    const estadoCivil = await this.usuariosService.getEstadoCivilById(Number(req.params.id));
    res.json(estadoCivil);
  }

  async createEstadoCivil(req: Request, res: Response) {
    const nuevoEstadoCivil = await this.usuariosService.createEstadoCivil(req.body);
    res.json(nuevoEstadoCivil);
  }

  async updateEstadoCivil(req: Request, res: Response) {
    const estadoCivil = await this.usuariosService.updateEstadoCivil(Number(req.params.id), req.body);
    res.json(estadoCivil);
  }

  async deleteEstadoCivil(req: Request, res: Response) {
    const success = await this.usuariosService.deleteEstadoCivil(Number(req.params.id));
    res.json({ success });
  }

  // Estados
  async getEstados(req: Request, res: Response) {
    const estados = await this.usuariosService.getEstados();
    res.json(estados);
  }

  async getEstadoById(req: Request, res: Response) {
    const estado = await this.usuariosService.getEstadoById(Number(req.params.id));
    res.json(estado);
  }

  async createEstado(req: Request, res: Response) {
    const nuevoEstado = await this.usuariosService.createEstado(req.body);
    res.json(nuevoEstado);
  }

  async updateEstado(req: Request, res: Response) {
    const estado = await this.usuariosService.updateEstado(Number(req.params.id), req.body);
    res.json(estado);
  }

  async deleteEstado(req: Request, res: Response) {
    const success = await this.usuariosService.deleteEstado(Number(req.params.id));
    res.json({ success });
  }
}
