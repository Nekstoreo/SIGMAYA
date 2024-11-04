// src/controllers/SedesLocalizaciónController.js
import { SedesLocalizacionService } from "../services/SedesLocalizacionService.js";

class SedesLocalizacionController {
  constructor() {
    this.service = new SedesLocalizacionService();
  }

  // Métodos para sedes
  async getSedes(req, res) {
    try {
      const sedes = await this.service.getSedes();
      res.json(sedes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSedeById(req, res) {
    try {
      const sede = await this.service.getSedeById(Number(req.params.id));
      res.json(sede);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSede(req, res) {
    try {
      console.log(this.service);
      const nuevaSede = await this.service.createSede(req.body);
      res.json(nuevaSede);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateSede(req, res) {
    try {
      const sede = await this.service.updateSede(Number(req.params.id), req.body);
      res.json(sede);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteSede(req, res) {
    try {
      const success = await this.service.deleteSede(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Métodos para países
  async getPaises(req, res) {
    try {
      const paises = await this.service.getPaises();
      res.json(paises);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPaisById(req, res) {
    try {
      const pais = await this.service.getPaisById(Number(req.params.id));
      res.json(pais);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPais(req, res) {
    try {
      const nuevoPais = await this.service.createPais(req.body);
      res.json(nuevoPais);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePais(req, res) {
    try {
      const pais = await this.service.updatePais(Number(req.params.id), req.body);
      res.json(pais);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePais(req, res) {
    try {
      const success = await this.service.deletePais(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Métodos para regiones
  async getRegiones(req, res) {
    try {
      const regiones = await this.service.getRegiones();
      res.json(regiones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getRegionById(req, res) {
    try {
      const region = await this.service.getRegionById(Number(req.params.id));
      res.json(region);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createRegion(req, res) {
    try {
      const nuevaRegion = await this.service.createRegion(req.body);
      res.json(nuevaRegion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateRegion(req, res) {
    try {
      const region = await this.service.updateRegion(Number(req.params.id), req.body);
      res.json(region);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteRegion(req, res) {
    try {
      const success = await this.service.deleteRegion(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Métodos para ciudades
  async getCiudades(req, res) {
    try {
      const ciudades = await this.service.getCiudades();
      res.json(ciudades);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCiudadById(req, res) {
    try {
      const ciudad = await this.service.getCiudadById(Number(req.params.id));
      res.json(ciudad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCiudad(req, res) {
    try {
      const nuevaCiudad = await this.service.createCiudad(req.body);
      res.json(nuevaCiudad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCiudad(req, res) {
    try {
      const ciudad = await this.service.updateCiudad(Number(req.params.id), req.body);
      res.json(ciudad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCiudad(req, res) {
    try {
      const success = await this.service.deleteCiudad(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export { SedesLocalizacionController };