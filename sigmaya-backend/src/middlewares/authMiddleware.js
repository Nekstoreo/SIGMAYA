import jwt from "jsonwebtoken";

export function authMiddleware(requiredRole) {
  return (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ message: "Acceso denegado. No se encontró el token." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = decoded;

      if (requiredRole && req.usuario.role !== requiredRole) {
        return res.status(403).json({ message: "Acceso denegado. Rol no autorizado." });
      }

      next();
    } catch (error) {
      res.status(400).json({ message: "Token no válido." });
    }
  };
}