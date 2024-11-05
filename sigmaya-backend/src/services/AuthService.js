import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Usuario } from "../models/Usuario.js";
import { Credencial } from "../models/Credencial.js";

export class AuthService {
  async authenticate(usuario_id, password) {
    const credencial = await Credencial.findOne({ where: { usuario_id } });
    if (!credencial) {
      throw new Error("Credenciales incorrectas");
    }

    const isMatch = await bcrypt.compare(password, credencial.password_hash);
    if (!isMatch) {
      throw new Error("Credenciales incorrectas");
    }

    const usuario = await Usuario.findByPk(usuario_id);
    const token = jwt.sign(
      { usuario_id: usuario.usuario_id, role: usuario.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { token, usuario };
  }

  async updatePassword(usuario_id, newPassword) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    await Credencial.update({ password_hash: hashedPassword }, { where: { usuario_id } });
  }
}