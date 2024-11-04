// src/controllers/PrerrequisitosYDetallesCalificacionesController.js
import { PrerrequisitosDetallesCalificacionesService } from "../services/PrerrequisitosDetallesCalificacionesService.js";

export class PrerrequisitosYDetallesCalificacionesController {
  constructor() {
    this.service = new PrerrequisitosDetallesCalificacionesService();
  }

  // tbl_detalles_calificaciones
  async getDetallesCalificaciones(req, res) {
    try {
      const detalles = await this.service.getDetallesCalificaciones();
      res.json(detalles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getDetalleCalificacionById(req, res) {
    try {
      const detalle = await this.service.getDetalleCalificacionById(
        Number(req.params.id)
      );
      res.json(detalle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createDetalleCalificacion(req, res) {
    try {
      const nuevoDetalle = await this.service.createDetalleCalificacion(req.body);
      res.json(nuevoDetalle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateDetalleCalificacion(req, res) {
    try {
      const detalle = await this.service.updateDetalleCalificacion(
        Number(req.params.id),
        req.body
      );
      res.json(detalle);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteDetalleCalificacion(req, res) {
    try {
      const success = await this.service.deleteDetalleCalificacion(
        Number(req.params.id)
      );
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_prerrequisitos
  async getPrerrequisitos(req, res) {
    try {
      const prerrequisitos = await this.service.getPrerrequisitos();
      res.json(prerrequisitos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPrerrequisitoById(req, res) {
    try {
      const prerrequisito = await this.service.getPrerrequisitoById(
        Number(req.params.id)
      );
      res.json(prerrequisito);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPrerrequisito(req, res) {
    try {
      const nuevoPrerrequisito = await this.service.createPrerrequisito(req.body);
      res.json(nuevoPrerrequisito);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePrerrequisito(req, res) {
    try {
      const prerrequisito = await this.service.updatePrerrequisito(
        Number(req.params.id),
        req.body
      );
      res.json(prerrequisito);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePrerrequisito(req, res) {
    try {
      const success = await this.service.deletePrerrequisito(
        Number(req.params.id)
      );
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}