// src/controllers/PrerrequisitosYDetallesCalificacionesController.ts
import { Request, Response } from 'express';
import { PrerrequisitosDetallesCalificacionesService } from '../services/PrerrequisitosDetallesCalificacionesService';

export class PrerrequisitosYDetallesCalificacionesController {
  private service = new PrerrequisitosDetallesCalificacionesService();

  // tbl_detalles_calificaciones
  async getDetallesCalificaciones(req: Request, res: Response) {
    const detalles = await this.service.getDetallesCalificaciones();
    res.json(detalles);
  }

  async getDetalleCalificacionById(req: Request, res: Response) {
    const detalle = await this.service.getDetalleCalificacionById(Number(req.params.id));
    res.json(detalle);
  }

  async createDetalleCalificacion(req: Request, res: Response) {
    const nuevoDetalle = await this.service.createDetalleCalificacion(req.body);
    res.json(nuevoDetalle);
  }

  async updateDetalleCalificacion(req: Request, res: Response) {
    const detalle = await this.service.updateDetalleCalificacion(
      Number(req.params.id),
      req.body
    );
    res.json(detalle);
  }

  async deleteDetalleCalificacion(req: Request, res: Response) {
    const success = await this.service.deleteDetalleCalificacion(Number(req.params.id));
    res.json({ success });
  }

  // tbl_prerrequisitos
  async getPrerrequisitos(req: Request, res: Response) {
    const prerrequisitos = await this.service.getPrerrequisitos();
    res.json(prerrequisitos);
  }

  async getPrerrequisitoById(req: Request, res: Response) {
    const prerrequisito = await this.service.getPrerrequisitoById(Number(req.params.id));
    res.json(prerrequisito);
  }

  async createPrerrequisito(req: Request, res: Response) {
    const nuevoPrerrequisito = await this.service.createPrerrequisito(req.body);
    res.json(nuevoPrerrequisito);
  }

  async updatePrerrequisito(req: Request, res: Response) {
    const prerrequisito = await this.service.updatePrerrequisito(
      Number(req.params.id),
      req.body
    );
    res.json(prerrequisito);
  }

  async deletePrerrequisito(req: Request, res: Response) {
    const success = await this.service.deletePrerrequisito(Number(req.params.id));
    res.json({ success });
  }
}