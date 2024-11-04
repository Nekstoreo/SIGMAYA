import { CredencialesService } from "../services/CredencialesService.js";

export class CredencialesController {
  constructor() {
    this.service = new CredencialesService();
  }

  async getCredenciales(req, res) {
    try {
      const credenciales = await this.service.getCredenciales();
      res.json(credenciales);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCredencialById(req, res) {
    try {
      const credencial = await this.service.getCredencialById(req.params.id);
      if (!credencial) {
        return res.status(404).json({ message: 'Credencial no encontrada' });
      }
      res.json(credencial);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createCredencial(req, res) {
    try {
      const nuevaCredencial = await this.service.createCredencial(req.body);
      res.status(201).json(nuevaCredencial);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateCredencial(req, res) {
    try {
      const credencial = await this.service.updateCredencial(req.params.id, req.body);
      if (!credencial) {
        return res.status(404).json({ message: 'Credencial no encontrada' });
      }
      res.json(credencial);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteCredencial(req, res) {
    try {
      const deleted = await this.service.deleteCredencial(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: 'Credencial no encontrada' });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}