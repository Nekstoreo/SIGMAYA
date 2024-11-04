// src/controllers/SedesLocalizaciónController.ts
import { Request, Response } from "express";
import { SedesLocalizacionService } from "../services/SedesLocalizacionService";

export class SedesLocalizacionController {
  private service = new SedesLocalizacionService();

  // Métodos para sedes
  async getSedes(req: Request, res: Response) {
    const sedes = await this.service.getSedes();
    res.json(sedes);
  }

  async getSedeById(req: Request, res: Response) {
    const sede = await this.service.getSedeById(Number(req.params.id));
    res.json(sede);
  }

  async createSede(req: Request, res: Response) {
    const nuevaSede = await this.service.createSede(req.body);
    res.json(nuevaSede);
  }

  async updateSede(req: Request, res: Response) {
    const sede = await this.service.updateSede(Number(req.params.id), req.body);
    res.json(sede);
  }

  async deleteSede(req: Request, res: Response) {
    const success = await this.service.deleteSede(Number(req.params.id));
    res.json({ success });
  }

  // Métodos para países
  async getPaises(req: Request, res: Response) {
    const paises = await this.service.getPaises();
    res.json(paises);
  }

  async getPaisById(req: Request, res: Response) {
    const pais = await this.service.getPaisById(Number(req.params.id));
    res.json(pais);
  }

  async createPais(req: Request, res: Response) {
    const nuevoPais = await this.service.createPais(req.body);
    res.json(nuevoPais);
  }

  async updatePais(req: Request, res: Response) {
    const pais = await this.service.updatePais(Number(req.params.id), req.body);
    res.json(pais);
  }

  async deletePais(req: Request, res: Response) {
    const success = await this.service.deletePais(Number(req.params.id));
    res.json({ success });
  }

  // Métodos para regiones
  async getRegiones(req: Request, res: Response) {
    const regiones = await this.service.getRegiones();
    res.json(regiones);
  }

  async getRegionById(req: Request, res: Response) {
    const region = await this.service.getRegionById(Number(req.params.id));
    res.json(region);
  }

  async createRegion(req: Request, res: Response) {
    const nuevaRegion = await this.service.createRegion(req.body);
    res.json(nuevaRegion);
  }

  async updateRegion(req: Request, res: Response) {
    const region = await this.service.updateRegion(Number(req.params.id), req.body);
    res.json(region);
  }

  async deleteRegion(req: Request, res: Response) {
    const success = await this.service.deleteRegion(Number(req.params.id));
    res.json({ success });
  }

  // Métodos para ciudades
  async getCiudades(req: Request, res: Response) {
    const ciudades = await this.service.getCiudades();
    res.json(ciudades);
  }

  async getCiudadById(req: Request, res: Response) {
    const ciudad = await this.service.getCiudadById(Number(req.params.id));
    res.json(ciudad);
  }

  async createCiudad(req: Request, res: Response) {
    const nuevaCiudad = await this.service.createCiudad(req.body);
    res.json(nuevaCiudad);
  }

  async updateCiudad(req: Request, res: Response) {
    const ciudad = await this.service.updateCiudad(Number(req.params.id), req.body);
    res.json(ciudad);
  }

  async deleteCiudad(req: Request, res: Response) {
    const success = await this.service.deleteCiudad(Number(req.params.id));
    res.json({ success });
  }
}