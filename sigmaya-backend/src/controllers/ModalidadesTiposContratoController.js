// src/controllers/ModalidadesYTiposContratoController.js
import { ModalidadesTiposContratoService } from "../services/ModalidadesTiposContratoService.js";

export class ModalidadesYTiposContratoController {
  // tbl_modalidades
  async getModalidades(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const modalidades = await service.getModalidades();
      res.json(modalidades);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getModalidadById(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const modalidad = await service.getModalidadById(Number(req.params.id));
      res.json(modalidad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createModalidad(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const nuevaModalidad = await service.createModalidad(req.body);
      res.json(nuevaModalidad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateModalidad(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const modalidad = await service.updateModalidad(Number(req.params.id), req.body);
      res.json(modalidad);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteModalidad(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const success = await service.deleteModalidad(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_tipos_contrato
  async getTiposContrato(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const tipos = await service.getTiposContrato();
      res.json(tipos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTipoContratoById(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const tipo = await service.getTipoContratoById(Number(req.params.id));
      res.json(tipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTipoContrato(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const nuevoTipo = await service.createTipoContrato(req.body);
      res.json(nuevoTipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTipoContrato(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const tipo = await service.updateTipoContrato(Number(req.params.id), req.body);
      res.json(tipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTipoContrato(req, res) {
    const service = new ModalidadesTiposContratoService();
    try {
      const success = await service.deleteTipoContrato(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
