// src/controllers/UsuariosRolesController.ts
import { Request, Response } from "express";
import { UsuarioRepository } from "../repositories/allRepositories";
import { TipoDocumentoRepository } from "../repositories/allRepositories";
import { IdentidadGeneroRepository } from "../repositories/allRepositories";
import { GrupoEtnicoRepository } from "../repositories/allRepositories";
import { EstadoCivilRepository } from "../repositories/allRepositories";
import { EstadoRepository } from "../repositories/allRepositories";

export class UsuariosRolesController {
  private usuarioRepo = new UsuarioRepository();
  private tipoDocumentoRepo = new TipoDocumentoRepository();
  private identidadGeneroRepo = new IdentidadGeneroRepository();
  private grupoEtnicoRepo = new GrupoEtnicoRepository();
  private estadoCivilRepo = new EstadoCivilRepository();
  private estadoRepo = new EstadoRepository();

  // Usuarios
  async getUsuarios(req: Request, res: Response) {
    const usuarios = await this.usuarioRepo.findAll();
    res.json(usuarios);
  }

  async getUsuarioById(req: Request, res: Response) {
    const usuario = await this.usuarioRepo.findById(Number(req.params.id));
    res.json(usuario);
  }

  async createUsuario(req: Request, res: Response) {
    const nuevoUsuario = await this.usuarioRepo.createUsuario(req.body);
    res.json(nuevoUsuario);
  }

  async updateUsuario(req: Request, res: Response) {
    const usuario = await this.usuarioRepo.updateUsuario(
      Number(req.params.id),
      req.body
    );
    res.json(usuario);
  }

  async deleteUsuario(req: Request, res: Response) {
    const success = await this.usuarioRepo.deleteUsuario(Number(req.params.id));
    res.json({ success });
  }

  // Tipos de documento
  async getTiposDocumento(req: Request, res: Response) {
    const tiposDocumento = await this.tipoDocumentoRepo.findAll();
    res.json(tiposDocumento);
  }

  async getTipoDocumentoById(req: Request, res: Response) {
    const tipoDocumento = await this.tipoDocumentoRepo.findById(
      Number(req.params.id)
    );
    res.json(tipoDocumento);
  }

  async createTipoDocumento(req: Request, res: Response) {
    const nuevoTipoDocumento = await this.tipoDocumentoRepo.createTipoDocumento(
      req.body
    );
    res.json(nuevoTipoDocumento);
  }

  async updateTipoDocumento(req: Request, res: Response) {
    const tipoDocumento = await this.tipoDocumentoRepo.updateTipoDocumento(
      Number(req.params.id),
      req.body
    );
    res.json(tipoDocumento);
  }

  async deleteTipoDocumento(req: Request, res: Response) {
    const success = await this.tipoDocumentoRepo.deleteTipoDocumento(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // Identidades de género

  async getIdentidadesGenero(req: Request, res: Response) {
    const identidadesGenero = await this.identidadGeneroRepo.findAll();
    res.json(identidadesGenero);
  }

  async getIdentidadGeneroById(req: Request, res: Response) {
    const identidadGenero = await this.identidadGeneroRepo.findById(
      Number(req.params.id)
    );
    res.json(identidadGenero);
  }

  async createIdentidadGenero(req: Request, res: Response) {
    const nuevaIdentidadGenero =
      await this.identidadGeneroRepo.createIdentidadGenero(req.body);
    res.json(nuevaIdentidadGenero);
  }

  async updateIdentidadGenero(req: Request, res: Response) {
    const identidadGenero =
      await this.identidadGeneroRepo.updateIdentidadGenero(
        Number(req.params.id),
        req.body
      );
    res.json(identidadGenero);
  }

  async deleteIdentidadGenero(req: Request, res: Response) {
    const success = await this.identidadGeneroRepo.deleteIdentidadGenero(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // Grupos étnicos

  async getGruposEtnico(req: Request, res: Response) {
    const gruposEtnico = await this.grupoEtnicoRepo.findAll();
    res.json(gruposEtnico);
  }

  async getGrupoEtnicoById(req: Request, res: Response) {
    const grupoEtnico = await this.grupoEtnicoRepo.findById(
      Number(req.params.id)
    );
    res.json(grupoEtnico);
  }

  async createGrupoEtnico(req: Request, res: Response) {
    const nuevoGrupoEtnico = await this.grupoEtnicoRepo.createGrupoEtnico(
      req.body
    );
    res.json(nuevoGrupoEtnico);
  }

  async updateGrupoEtnico(req: Request, res: Response) {
    const grupoEtnico = await this.grupoEtnicoRepo.updateGrupoEtnico(
      Number(req.params.id),
      req.body
    );
    res.json(grupoEtnico);
  }

  async deleteGrupoEtnico(req: Request, res: Response) {
    const success = await this.grupoEtnicoRepo.deleteGrupoEtnico(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // Estados civiles

  async getEstadosCivil(req: Request, res: Response) {
    const estadosCivil = await this.estadoCivilRepo.findAll();
    res.json(estadosCivil);
  }

  async getEstadoCivilById(req: Request, res: Response) {
    const estadoCivil = await this.estadoCivilRepo.findById(
      Number(req.params.id)
    );
    res.json(estadoCivil);
  }

  async createEstadoCivil(req: Request, res: Response) {
    const nuevoEstadoCivil = await this.estadoCivilRepo.createEstadoCivil(
      req.body
    );
    res.json(nuevoEstadoCivil);
  }

  async updateEstadoCivil(req: Request, res: Response) {
    const estadoCivil = await this.estadoCivilRepo.updateEstadoCivil(
      Number(req.params.id),
      req.body
    );
    res.json(estadoCivil);
  }

  async deleteEstadoCivil(req: Request, res: Response) {
    const success = await this.estadoCivilRepo.deleteEstadoCivil(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // Estados

  async getEstados(req: Request, res: Response) {
    const estados = await this.estadoRepo.findAll();
    res.json(estados);
  }

  async getEstadoById(req: Request, res: Response) {
    const estado = await this.estadoRepo.findById(Number(req.params.id));
    res.json(estado);
  }

  async createEstado(req: Request, res: Response) {
    const nuevoEstado = await this.estadoRepo.createEstado(req.body);
    res.json(nuevoEstado);
  }

  async updateEstado(req: Request, res: Response) {
    const estado = await this.estadoRepo.updateEstado(
      Number(req.params.id),
      req.body
    );
    res.json(estado);
  }

  async deleteEstado(req: Request, res: Response) {
    const success = await this.estadoRepo.deleteEstado(Number(req.params.id));
    res.json({ success });
  }
}
