// src/controllers/AdministrativosController.ts
import { Request, Response } from "express";
import {
  AdministrativoRepository,
  CargoAdministrativoRepository,
  NivelAccesoRepository,
  DepartamentoRepository,
} from "../repositories/allRepositories";

export class AdministrativosController {
  private administrativoRepo = new AdministrativoRepository();
  private cargoAdministrativoRepo = new CargoAdministrativoRepository();
  private nivelAccesoRepo = new NivelAccesoRepository();
  private departamentoRepo = new DepartamentoRepository();

  // tbl_administrativos
  async getAdministrativos(req: Request, res: Response) {
    const administrativos = await this.administrativoRepo.findAll();
    res.json(administrativos);
  }

  async getAdministrativoById(req: Request, res: Response) {
    const administrativo = await this.administrativoRepo.findById(Number(req.params.id));
    res.json(administrativo);
  }

  async createAdministrativo(req: Request, res: Response) {
    const nuevoAdministrativo = await this.administrativoRepo.createAdministrativo(req.body);
    res.json(nuevoAdministrativo);
  }

  async updateAdministrativo(req: Request, res: Response) {
    const administrativo = await this.administrativoRepo.updateAdministrativo(
      Number(req.params.id),
      req.body
    );
    res.json(administrativo);
  }

  async deleteAdministrativo(req: Request, res: Response) {
    const success = await this.administrativoRepo.deleteAdministrativo(Number(req.params.id));
    res.json({ success });
  }

  // tbl_cargos_administrativos
  async getCargosAdministrativos(req: Request, res: Response) {
    const cargos = await this.cargoAdministrativoRepo.findAll();
    res.json(cargos);
  }

  async getCargoAdministrativoById(req: Request, res: Response) {
    const cargo = await this.cargoAdministrativoRepo.findById(Number(req.params.id));
    res.json(cargo);
  }

  async createCargoAdministrativo(req: Request, res: Response) {
    const nuevoCargo = await this.cargoAdministrativoRepo.createCargoAdministrativo(req.body);
    res.json(nuevoCargo);
  }

  async updateCargoAdministrativo(req: Request, res: Response) {
    const cargo = await this.cargoAdministrativoRepo.updateCargoAdministrativo(
      Number(req.params.id),
      req.body
    );
    res.json(cargo);
  }

  async deleteCargoAdministrativo(req: Request, res: Response) {
    const success = await this.cargoAdministrativoRepo.deleteCargoAdministrativo(
      Number(req.params.id)
    );
    res.json({ success });
  }

  // tbl_niveles_acceso
  async getNivelesAcceso(req: Request, res: Response) {
    const niveles = await this.nivelAccesoRepo.findAll();
    res.json(niveles);
  }

  async getNivelAccesoById(req: Request, res: Response) {
    const nivel = await this.nivelAccesoRepo.findById(Number(req.params.id));
    res.json(nivel);
  }

  async createNivelAcceso(req: Request, res: Response) {
    const nuevoNivel = await this.nivelAccesoRepo.createNivelAcceso(req.body);
    res.json(nuevoNivel);
  }

  async updateNivelAcceso(req: Request, res: Response) {
    const nivel = await this.nivelAccesoRepo.updateNivelAcceso(Number(req.params.id), req.body);
    res.json(nivel);
  }

  async deleteNivelAcceso(req: Request, res: Response) {
    const success = await this.nivelAccesoRepo.deleteNivelAcceso(Number(req.params.id));
    res.json({ success });
  }

  // tbl_departamentos
  async getDepartamentos(req: Request, res: Response) {
    const departamentos = await this.departamentoRepo.findAll();
    res.json(departamentos);
  }

  async getDepartamentoById(req: Request, res: Response) {
    const departamento = await this.departamentoRepo.findById(Number(req.params.id));
    res.json(departamento);
  }

  async createDepartamento(req: Request, res: Response) {
    const nuevoDepartamento = await this.departamentoRepo.createDepartamento(req.body);
    res.json(nuevoDepartamento);
  }

  async updateDepartamento(req: Request, res: Response) {
    const departamento = await this.departamentoRepo.updateDepartamento(
      Number(req.params.id),
      req.body
    );
    res.json(departamento);
  }

  async deleteDepartamento(req: Request, res: Response) {
    const success = await this.departamentoRepo.deleteDepartamento(Number(req.params.id));
    res.json({ success });
  }
}