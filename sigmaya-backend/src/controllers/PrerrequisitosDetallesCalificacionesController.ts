// src/controllers/PrerrequisitosYDetallesCalificacionesController.ts
import { Request, Response } from 'express';
import {
  DetalleCalificacionRepository,
  PrerrequisitoRepository,
} from '../repositories/allRepositories';

export class PrerrequisitosYDetallesCalificacionesController {
  private detalleCalificacionRepo = new DetalleCalificacionRepository();
  private prerrequisitoRepo = new PrerrequisitoRepository();

  // tbl_detalles_calificaciones
  async getDetallesCalificaciones(req: Request, res: Response) {
    const detalles = await this.detalleCalificacionRepo.findAll();
    res.json(detalles);
  }

  async getDetalleCalificacionById(req: Request, res: Response) {
    const detalle = await this.detalleCalificacionRepo.findById(Number(req.params.id));
    res.json(detalle);
  }

  async createDetalleCalificacion(req: Request, res: Response) {
    const nuevoDetalle = await this.detalleCalificacionRepo.createDetalleCalificacion(req.body);
    res.json(nuevoDetalle);
  }

  async updateDetalleCalificacion(req: Request, res: Response) {
    const detalle = await this.detalleCalificacionRepo.updateDetalleCalificacion(
      Number(req.params.id),
      req.body
    );
    res.json(detalle);
  }

  async deleteDetalleCalificacion(req: Request, res: Response) {
    const success = await this.detalleCalificacionRepo.deleteDetalleCalificacion(Number(req.params.id));
    res.json({ success });
  }

  // tbl_prerrequisitos
  async getPrerrequisitos(req: Request, res: Response) {
    const prerrequisitos = await this.prerrequisitoRepo.findAll();
    res.json(prerrequisitos);
  }

  async getPrerrequisitoById(req: Request, res: Response) {
    const prerrequisito = await this.prerrequisitoRepo.findById(Number(req.params.id));
    res.json(prerrequisito);
  }

  async createPrerrequisito(req: Request, res: Response) {
    const nuevoPrerrequisito = await this.prerrequisitoRepo.createPrerrequisito(req.body);
    res.json(nuevoPrerrequisito);
  }

  async updatePrerrequisito(req: Request, res: Response) {
    const prerrequisito = await this.prerrequisitoRepo.updatePrerrequisito(
      Number(req.params.id),
      req.body
    );
    res.json(prerrequisito);
  }

  async deletePrerrequisito(req: Request, res: Response) {
    const success = await this.prerrequisitoRepo.deletePrerrequisito(Number(req.params.id));
    res.json({ success });
  }
}