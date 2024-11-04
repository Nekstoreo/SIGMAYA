// src/controllers/AdministrativosController.js
import { AdministrativosService } from "../services/AdministrativosService.js";

export class AdministrativosController {
  constructor() {
    this.service = new AdministrativosService();
  }

  // tbl_administrativos
  async getAdministrativos(req, res) {
    try {
      const administrativos = await this.administrativosService.getAdministrativos();
      res.json(administrativos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAdministrativoById(req, res) {
    try {
      const administrativo = await this.administrativosService.getAdministrativoById(Number(req.params.id));
      res.json(administrativo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createAdministrativo(req, res) {
    try {
      const nuevoAdministrativo = await this.administrativosService.createAdministrativo(req.body);
      res.json(nuevoAdministrativo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAdministrativo(req, res) {
    try {
      const administrativo = await this.administrativosService.updateAdministrativo(
        Number(req.params.id),
        req.body
      );
      res.json(administrativo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAdministrativo(req, res) {
    try {
      const success = await this.administrativosService.deleteAdministrativo(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_cargos_administrativos
  async getCargosAdministrativos(req, res) {
    try {
      const cargos = await this.administrativosService.getCargosAdministrativos();
      res.json(cargos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCargoAdministrativoById(req, res) {
    try {
      const cargo = await this.administrativosService.getCargoAdministrativoById(Number(req.params.id));
      res.json(cargo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCargoAdministrativo(req, res) {
    try {
      const nuevoCargo = await this.administrativosService.createCargoAdministrativo(req.body);
      res.json(nuevoCargo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCargoAdministrativo(req, res) {
    try {
      const cargo = await this.administrativosService.updateCargoAdministrativo(
        Number(req.params.id),
        req.body
      );
      res.json(cargo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCargoAdministrativo(req, res) {
    try {
      const success = await this.administrativosService.deleteCargoAdministrativo(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_niveles_acceso
  async getNivelesAcceso(req, res) {
    try {
      const niveles = await this.administrativosService.getNivelesAcceso();
      res.json(niveles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getNivelAccesoById(req, res) {
    try {
      const nivel = await this.administrativosService.getNivelAccesoById(Number(req.params.id));
      res.json(nivel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createNivelAcceso(req, res) {
    try {
      const nuevoNivel = await this.administrativosService.createNivelAcceso(req.body);
      res.json(nuevoNivel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateNivelAcceso(req, res) {
    try {
      const nivel = await this.administrativosService.updateNivelAcceso(Number(req.params.id), req.body);
      res.json(nivel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteNivelAcceso(req, res) {
    try {
      const success = await this.administrativosService.deleteNivelAcceso(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_departamentos
  async getDepartamentos(req, res) {
    try {
      const departamentos = await this.administrativosService.getDepartamentos();
      res.json(departamentos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDepartamentoById(req, res) {
    try {
      const departamento = await this.administrativosService.getDepartamentoById(Number(req.params.id));
      res.json(departamento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createDepartamento(req, res) {
    try {
      const nuevoDepartamento = await this.administrativosService.createDepartamento(req.body);
      res.json(nuevoDepartamento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateDepartamento(req, res) {
    try {
      const departamento = await this.administrativosService.updateDepartamento(
        Number(req.params.id),
        req.body
      );
      res.json(departamento);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteDepartamento(req, res) {
    try {
      const success = await this.administrativosService.deleteDepartamento(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}