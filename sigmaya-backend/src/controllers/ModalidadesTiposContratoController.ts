// src/controllers/ModalidadesYTiposContratoController.ts
import { Request, Response } from "express";
import { ModalidadesTiposContratoService } from "../services/ModalidadesTiposContratoService";

export class ModalidadesYTiposContratoController {
  private modalidadesTiposContratoService =
    new ModalidadesTiposContratoService();

  // tbl_modalidades
  async getModalidades(req: Request, res: Response) {
    const modalidades =
      await this.modalidadesTiposContratoService.getModalidades();
    res.json(modalidades);
  }

  async getModalidadById(req: Request, res: Response) {
    const modalidad =
      await this.modalidadesTiposContratoService.getModalidadById(
        Number(req.params.id)
      );
    res.json(modalidad);
  }

  async createModalidad(req: Request, res: Response) {
    const nuevaModalidad =
      await this.modalidadesTiposContratoService.createModalidad(req.body);
    res.json(nuevaModalidad);
  }

  async updateModalidad(req: Request, res: Response) {
    const modalidad =
      await this.modalidadesTiposContratoService.updateModalidad(
        Number(req.params.id),
        req.body
      );
    res.json(modalidad);
  }

  async deleteModalidad(req: Request, res: Response) {
    const success = await this.modalidadesTiposContratoService.deleteModalidad(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_tipos_contrato
  async getTiposContrato(req: Request, res: Response) {
    const tipos = await this.modalidadesTiposContratoService.getTiposContrato();
    res.json(tipos);
  }

  async getTipoContratoById(req: Request, res: Response) {
    const tipo = await this.modalidadesTiposContratoService.getTipoContratoById(
      Number(req.params.id)
    );
    res.json(tipo);
  }

  async createTipoContrato(req: Request, res: Response) {
    const nuevoTipo =
      await this.modalidadesTiposContratoService.createTipoContrato(req.body);
    res.json(nuevoTipo);
  }

  async updateTipoContrato(req: Request, res: Response) {
    const tipo = await this.modalidadesTiposContratoService.updateTipoContrato(
      Number(req.params.id),
      req.body
    );
    res.json(tipo);
  }

  async deleteTipoContrato(req: Request, res: Response) {
    const success =
      await this.modalidadesTiposContratoService.deleteTipoContrato(
        Number(req.params.id)
      );
    res.json({ success });
  }
}
