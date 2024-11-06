// src/controllers/ProfesorController.js
import ProfesorService from "../services/ProfesorService.js";

class ProfesorController {
  constructor() {
    this.profesorService = new ProfesorService();
  }

  async getSections(req, res) {
    try {
      console.log("Auth middleware user:", req.usuario); // Debug log
      const profesorId = req.usuario?.usuario_id;

      if (!profesorId) {
        console.log("No se encontró ID de profesor"); // Debug log
        return res.status(400).json({
          success: false,
          message: "Se requiere el ID del profesor",
        });
      }

      console.log("Buscando secciones para profesor:", profesorId); // Debug log
      const secciones = await this.profesorService.getTeachingSections(
        profesorId
      );
      console.log("Secciones encontradas:", secciones?.length); // Debug log

      return res.status(200).json({
        success: true,
        data: secciones,
      });
    } catch (error) {
      console.error("Error completo en ProfesorController:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Error interno del servidor",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      });
    }
  }

  async getStudents(req, res) {
    try {
      const { nrc } = req.params;
      const estudiantes = await this.profesorService.getStudentsBySection(nrc);
      return res.status(200).json({
        success: true,
        data: estudiantes,
      });
    } catch (error) {
      console.error("Error al obtener los estudiantes de la sección:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Error interno del servidor",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      });
    }
  }

  async updateGrade(req, res) {
    try {
      const { nrc, estudianteId } = req.params;
      const { nuevaNota, detalle_calificacion_id } = req.body;

      const calificacion = await this.profesorService.updateStudentGrade(
        nrc,
        estudianteId,
        nuevaNota,
        detalle_calificacion_id
      );
      return res.status(200).json({
        success: true,
        data: calificacion,
      });
    } catch (error) {
      console.error(
        "Error al actualizar la calificación del estudiante:",
        error
      );
      return res.status(500).json({
        success: false,
        message: error.message || "Error interno del servidor",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      });
    }
  }
}

export default ProfesorController;
