// src/controllers/AdministrativosController.ts
import { Request, Response } from "express";
import { AdministrativosService } from "../services/AdministrativosService";

export class AdministrativosController {
  private administrativosService: AdministrativosService;

  constructor() {
    this.administrativosService = new AdministrativosService();
  }

  // tbl_administrativos
  async getAdministrativos(req: Request, res: Response) {
    const administrativos = await this.administrativosService.getAdministrativos();
    res.json(administrativos);
  }

  async getAdministrativoById(req: Request, res: Response) {
    const administrativo = await this.administrativosService.getAdministrativoById(Number(req.params.id));
    res.json(administrativo);
  }

  async createAdministrativo(req: Request, res: Response) {
    const nuevoAdministrativo = await this.administrativosService.createAdministrativo(req.body);
    res.json(nuevoAdministrativo);
  }

  async updateAdministrativo(req: Request, res: Response) {
    const administrativo = await this.administrativosService.updateAdministrativo(
      Number(req.params.id),
      req.body
    );
    res.json(administrativo);
  }

  async deleteAdministrativo(req: Request, res: Response) {
    const success = await this.administrativosService.deleteAdministrativo(Number(req.params.id));
    res.json({ success });
  }

  // tbl_cargos_administrativos
  async getCargosAdministrativos(req: Request, res: Response) {
    const cargos = await this.administrativosService.getCargosAdministrativos();
    res.json(cargos);
  }

  async getCargoAdministrativoById(req: Request, res: Response) {
    const cargo = await this.administrativosService.getCargoAdministrativoById(Number(req.params.id));
    res.json(cargo);
  }

  async createCargoAdministrativo(req: Request, res: Response) {
    const nuevoCargo = await this.administrativosService.createCargoAdministrativo(req.body);
    res.json(nuevoCargo);
  }

  async updateCargoAdministrativo(req: Request, res: Response) {
    const cargo = await this.administrativosService.updateCargoAdministrativo(
      Number(req.params.id),
      req.body
    );
    res.json(cargo);
  }

  async deleteCargoAdministrativo(req: Request, res: Response) {
    const success = await this.administrativosService.deleteCargoAdministrativo(Number(req.params.id));
    res.json({ success });
  }

  // tbl_niveles_acceso
  async getNivelesAcceso(req: Request, res: Response) {
    const niveles = await this.administrativosService.getNivelesAcceso();
    res.json(niveles);
  }

  async getNivelAccesoById(req: Request, res: Response) {
    const nivel = await this.administrativosService.getNivelAccesoById(Number(req.params.id));
    res.json(nivel);
  }

  async createNivelAcceso(req: Request, res: Response) {
    const nuevoNivel = await this.administrativosService.createNivelAcceso(req.body);
    res.json(nuevoNivel);
  }

  async updateNivelAcceso(req: Request, res: Response) {
    const nivel = await this.administrativosService.updateNivelAcceso(Number(req.params.id), req.body);
    res.json(nivel);
  }

  async deleteNivelAcceso(req: Request, res: Response) {
    const success = await this.administrativosService.deleteNivelAcceso(Number(req.params.id));
    res.json({ success });
  }

  // tbl_departamentos
  async getDepartamentos(req: Request, res: Response) {
    const departamentos = await this.administrativosService.getDepartamentos();
    res.json(departamentos);
  }

  async getDepartamentoById(req: Request, res: Response) {
    const departamento = await this.administrativosService.getDepartamentoById(Number(req.params.id));
    res.json(departamento);
  }

  async createDepartamento(req: Request, res: Response) {
    const nuevoDepartamento = await this.administrativosService.createDepartamento(req.body);
    res.json(nuevoDepartamento);
  }

  async updateDepartamento(req: Request, res: Response) {
    const departamento = await this.administrativosService.updateDepartamento(
      Number(req.params.id),
      req.body
    );
    res.json(departamento);
  }

  async deleteDepartamento(req: Request, res: Response) {
    const success = await this.administrativosService.deleteDepartamento(Number(req.params.id));
    res.json({ success });
  }
}