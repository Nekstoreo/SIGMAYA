// src/controllers/EstudiantesProfesoresController.js
import { EstudiantesProfesoresService } from "../services/EstudiantesProfesoresService.js";

export class EstudiantesProfesoresController {
  constructor() {
    this.service = new EstudiantesProfesoresService();
  }

  // tbl_estudiantes
  async getEstudiantes(res) {
    try {
      const estudiantes = await this.service.getEstudiantes();
      res.json(estudiantes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEstudianteById(req, res) {
    try {
      const estudiante = await this.service.getEstudianteById(Number(req.params.id));
      res.json(estudiante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createEstudiante(req, res) {
    try {
      const nuevoEstudiante = await this.service.createEstudiante(req.body);
      res.json(nuevoEstudiante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateEstudiante(req, res) {
    try {
      const estudiante = await this.service.updateEstudiante(Number(req.params.id), req.body);
      res.json(estudiante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteEstudiante(req, res) {
    try {
      const success = await this.service.deleteEstudiante(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_profesores
  async getProfesores(res) {
    try {
      const profesores = await this.service.getProfesores();
      res.json(profesores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProfesorById(req, res) {
    try {
      const profesor = await this.service.getProfesorById(Number(req.params.id));
      res.json(profesor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProfesor(req, res) {
    try {
      const nuevoProfesor = await this.service.createProfesor(req.body);
      res.json(nuevoProfesor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProfesor(req, res) {
    try {
      const profesor = await this.service.updateProfesor(Number(req.params.id), req.body);
      res.json(profesor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProfesor(req, res) {
    try {
      const success = await this.service.deleteProfesor(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_calificaciones_parciales
  async getCalificacionesParciales(res) {
    try {
      const calificaciones = await this.service.getCalificacionesParciales();
      res.json(calificaciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCalificacionParcialById(req, res) {
    try {
      const calificacion = await this.service.getCalificacionParcialById(Number(req.params.id));
      res.json(calificacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCalificacionParcial(req, res) {
    try {
      const nuevaCalificacion = await this.service.createCalificacionParcial(req.body);
      res.json(nuevaCalificacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCalificacionParcial(req, res) {
    try {
      const calificacion = await this.service.updateCalificacionParcial(Number(req.params.id), req.body);
      res.json(calificacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCalificacionParcial(req, res) {
    try {
      const success = await this.service.deleteCalificacionParcial(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_calificaciones_finales
  async getCalificacionesFinales(res) {
    try {
      const calificaciones = await this.service.getCalificacionesFinales();
      res.json(calificaciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCalificacionFinalById(req, res) {
    try {
      const calificacion = await this.service.getCalificacionFinalById(Number(req.params.id));
      res.json(calificacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCalificacionFinal(req, res) {
    try {
      const nuevaCalificacion = await this.service.createCalificacionFinal(req.body);
      res.json(nuevaCalificacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCalificacionFinal(req, res) {
    try {
      const calificacion = await this.service.updateCalificacionFinal(Number(req.params.id), req.body);
      res.json(calificacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCalificacionFinal(req, res) {
    try {
      const success = await this.service.deleteCalificacionFinal(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_inscripciones_curso
  async getInscripcionesCurso(res) {
    try {
      const inscripciones = await this.service.getInscripcionesCursos();
      res.json(inscripciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getInscripcionCursoById(req, res) {
    try {
      const inscripcion = await this.service.getInscripcionCursoById(Number(req.params.id));
      res.json(inscripcion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createInscripcionCurso(req, res) {
    try {
      const nuevaInscripcion = await this.service.createInscripcionCurso(req.body);
      res.json(nuevaInscripcion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateInscripcionCurso(req, res) {
    try {
      const inscripcion = await this.service.updateInscripcionCurso(Number(req.params.id), req.body);
      res.json(inscripcion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteInscripcionCurso(req, res) {
    try {
      const success = await this.service.deleteInscripcionCurso(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // tbl_programas_estudiantes
  async getProgramasEstudiantes(res) {
    try {
      const programas = await this.service.getProgramasEstudiantes();
      res.json(programas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProgramaEstudianteById(req, res) {
    try {
      const programa = await this.service.getProgramaEstudianteById(Number(req.params.id));
      res.json(programa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProgramaEstudiante(req, res) {
    try {
      const nuevoPrograma = await this.service.createProgramaEstudiante(req.body);
      res.json(nuevoPrograma);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProgramaEstudiante(req, res) {
    try {
      const programa = await this.service.updateProgramaEstudiante(Number(req.params.id), req.body);
      res.json(programa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProgramaEstudiante(req, res) {
    try {
      const success = await this.service.deleteProgramaEstudiante(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
