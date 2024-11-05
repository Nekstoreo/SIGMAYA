import EstudianteService from "../services/EstudianteService.js";

class EstudianteController {
  async getStudentInfo(req, res) {
    try {
      console.log(req.usuario);
      const studentId = req.usuario.usuario_id;
      if (!studentId) {
        return res.status(400).json({ message: "ID del estudiante es requerido." });
      }
      const studentInfo = await EstudianteService.getStudentInfo(studentId);
      res.json(studentInfo);
    } catch (error) {
      res.status(500).json({ message: `Error al obtener la información del estudiante: ${error.message}` });
    }
  }

  async getStudentPeriods(req, res) {
    try {
      const studentId = req.usuario.usuario_id;
      if (!studentId) {
        return res.status(400).json({ message: "ID del estudiante es requerido." });
      }
      const periods = await EstudianteService.getStudentPeriods(studentId);
      res.json(periods);
    } catch (error) {
      res.status(500).json({ message: `Error al obtener los periodos del estudiante: ${error.message}` });
    }
  }

  async getCourseDetails(req, res) {
    try {
      const { nrc } = req.params;
      const studentId = req.usuario.usuario_id;
      if (!studentId) {
        return res.status(400).json({ message: "ID del estudiante es requerido." });
      }
      if (!nrc) {
        return res.status(400).json({ message: "NRC del curso es requerido." });
      }
      const courseDetails = await EstudianteService.getCourseDetails(nrc, studentId);
      res.json(courseDetails);
    } catch (error) {
      res.status(500).json({ message: `Error al obtener los detalles del curso: ${error.message}` });
    }
  }
}

export default new EstudianteController();