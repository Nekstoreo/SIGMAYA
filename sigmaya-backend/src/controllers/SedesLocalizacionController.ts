// src/controllers/SedesLocalizaciónController.ts
import { Request, Response } from "express";
import {
  SedeRepository,
  PaisRepository,
  RegionRepository,
  CiudadRepository,
} from "../repositories/allRepositories";

export class SedesLocalizaciónController {
  private sedeRepo = new SedeRepository();
  private paisRepo = new PaisRepository();
  private regionRepo = new RegionRepository();
  private ciudadRepo = new CiudadRepository();

  // tbl_sedes
  async getSedes(req: Request, res: Response) {
    const sedes = await this.sedeRepo.findAll();
    res.json(sedes);
  }

  async getSedeById(req: Request, res: Response) {
    const sede = await this.sedeRepo.findById(Number(req.params.id));
    res.json(sede);
  }

  async createSede(req: Request, res: Response) {
    const nuevaSede = await this.sedeRepo.createSede(req.body);
    res.json(nuevaSede);
  }

  async updateSede(req: Request, res: Response) {
    const sede = await this.sedeRepo.updateSede(Number(req.params.id), req.body);
    res.json(sede);
  }

  async deleteSede(req: Request, res: Response) {
    const success = await this.sedeRepo.deleteSede(Number(req.params.id));
    res.json({ success });
  }

  // tbl_paises
  async getPaises(req: Request, res: Response) {
    const paises = await this.paisRepo.findAll();
    res.json(paises);
  }

  async getPaisById(req: Request, res: Response) {
    const pais = await this.paisRepo.findById(Number(req.params.id));
    res.json(pais);
  }

  async createPais(req: Request, res: Response) {
    const nuevoPais = await this.paisRepo.createPais(req.body);
    res.json(nuevoPais);
  }

  async updatePais(req: Request, res: Response) {
    const pais = await this.paisRepo.updatePais(Number(req.params.id), req.body);
    res.json(pais);
  }

  async deletePais(req: Request, res: Response) {
    const success = await this.paisRepo.deletePais(Number(req.params.id));
    res.json({ success });
  }

  // tbl_regiones
  async getRegiones(req: Request, res: Response) {
    const regiones = await this.regionRepo.findAll();
    res.json(regiones);
  }

  async getRegionById(req: Request, res: Response) {
    const region = await this.regionRepo.findById(Number(req.params.id));
    res.json(region);
  }

  async createRegion(req: Request, res: Response) {
    const nuevaRegion = await this.regionRepo.createRegion(req.body);
    res.json(nuevaRegion);
  }

  async updateRegion(req: Request, res: Response) {
    const region = await this.regionRepo.updateRegion(Number(req.params.id), req.body);
    res.json(region);
  }

  async deleteRegion(req: Request, res: Response) {
    const success = await this.regionRepo.deleteRegion(Number(req.params.id));
    res.json({ success });
  }

  // tbl_ciudades
  async getCiudades(req: Request, res: Response) {
    const ciudades = await this.ciudadRepo.findAll();
    res.json(ciudades);
  }

  async getCiudadById(req: Request, res: Response) {
    const ciudad = await this.ciudadRepo.findById(Number(req.params.id));
    res.json(ciudad);
  }

  async createCiudad(req: Request, res: Response) {
    const nuevaCiudad = await this.ciudadRepo.createCiudad(req.body);
    res.json(nuevaCiudad);
  }

  async updateCiudad(req: Request, res: Response) {
    const ciudad = await this.ciudadRepo.updateCiudad(Number(req.params.id), req.body);
    res.json(ciudad);
  }

  async deleteCiudad(req: Request, res: Response) {
    const success = await this.ciudadRepo.deleteCiudad(Number(req.params.id));
    res.json({ success });
  }
}