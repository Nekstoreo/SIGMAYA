import { Request, Response } from "express";
import { CredencialesService } from "../services/CredencialesService";

export class CredencialesController {
  private credencialesService = new CredencialesService();

  async getCredenciales(req: Request, res: Response) {
    const credenciales = await this.credencialesService.getCredenciales();
    res.json(credenciales);
  }

  async getCredencialById(req: Request, res: Response) {
    const credencial = await this.credencialesService.getCredencialById(Number(req.params.id));
    res.json(credencial);
  }

  async createCredencial(req: Request, res: Response) {
    const nuevaCredencial = await this.credencialesService.createCredencial(req.body);
    res.json(nuevaCredencial);
  }

  async updateCredencial(req: Request, res: Response) {
    const credencial = await this.credencialesService.updateCredencial(Number(req.params.id), req.body);
    res.json(credencial);
  }

  async deleteCredencial(req: Request, res: Response) {
    const success = await this.credencialesService.deleteCredencial(Number(req.params.id));
    res.json({ success });
  }
}