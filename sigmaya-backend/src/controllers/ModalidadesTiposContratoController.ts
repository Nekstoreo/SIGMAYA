// src/controllers/ModalidadesYTiposContratoController.ts
import { Request, Response } from "express";
import {
  ModalidadRepository,
  TipoContratoRepository,
} from "../repositories/allRepositories";

export class ModalidadesYTiposContratoController {
  private modalidadRepo = new ModalidadRepository();
  private tipoContratoRepo = new TipoContratoRepository();

  // tbl_modalidades
  async getModalidades(req: Request, res: Response) {
    const modalidades = await this.modalidadRepo.findAll();
    res.json(modalidades);
  }

  async getModalidadById(req: Request, res: Response) {
    const modalidad = await this.modalidadRepo.findById(Number(req.params.id));
    res.json(modalidad);
  }

  async createModalidad(req: Request, res: Response) {
    const nuevaModalidad = await this.modalidadRepo.createModalidad(req.body);
    res.json(nuevaModalidad);
  }

  async updateModalidad(req: Request, res: Response) {
    const modalidad = await this.modalidadRepo.updateModalidad(
      Number(req.params.id),
      req.body
    );
    res.json(modalidad);
  }

  async deleteModalidad(req: Request, res: Response) {
    const success = await this.modalidadRepo.deleteModalidad(Number(req.params.id));
    res.json({ success });
  }

  // tbl_tipos_contrato
  async getTiposContrato(req: Request, res: Response) {
    const tipos = await this.tipoContratoRepo.findAll();
    res.json(tipos);
  }

  async getTipoContratoById(req: Request, res: Response) {
    const tipo = await this.tipoContratoRepo.findById(Number(req.params.id));
    res.json(tipo);
  }

  async createTipoContrato(req: Request, res: Response) {
    const nuevoTipo = await this.tipoContratoRepo.createTipoContrato(req.body);
    res.json(nuevoTipo);
  }

  async updateTipoContrato(req: Request, res: Response) {
    const tipo = await this.tipoContratoRepo.updateTipoContrato(
      Number(req.params.id),
      req.body
    );
    res.json(tipo);
  }

  async deleteTipoContrato(req: Request, res: Response) {
    const success = await this.tipoContratoRepo.deleteTipoContrato(Number(req.params.id));
    res.json({ success });
  }
}