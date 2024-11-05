import { AuthService } from "../services/AuthService.js";

export class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async login(req, res) {
    try {
      const { usuario_id, password } = req.body;
      const result = await this.authService.authenticate(usuario_id, password);
      res.json(result);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async updatePassword(req, res) {
    try {
      const { usuario_id, newPassword } = req.body;
      await this.authService.updatePassword(usuario_id, newPassword);
      res.json({ message: "Contraseña actualizada" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}