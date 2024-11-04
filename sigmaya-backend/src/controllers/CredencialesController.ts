import { Request, Response } from "express";
import { CredencialRepository } from "../repositories/allRepositories";

export class CredencialesController {
  private credencialRepo = new CredencialRepository();

  async getCredenciales(req: Request, res: Response) {
    const credenciales = await this.credencialRepo.findAll();
    res.json(credenciales);
  }

  async getCredencialById(req: Request, res: Response) {
    const credencial = await this.credencialRepo.findById(Number(req.params.id));
    res.json(credencial);
  }

  async createCredencial(req: Request, res: Response) {
    const nuevaCredencial = await this.credencialRepo.createCredencial(req.body);
    res.json(nuevaCredencial);
  }

  async updateCredencial(req: Request, res: Response) {
    const credencial = await this.credencialRepo.updateCredencial(Number(req.params.id), req.body);
    res.json(credencial);
  }

  async deleteCredencial(req: Request, res: Response) {
    const success = await this.credencialRepo.deleteCredencial(Number(req.params.id));
    res.json({ success });
  }
}