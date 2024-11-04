// src/controllers/EstructuraAcademicaController.js
import { EstructuraAcademicaService } from "../services/EstructuraAcademicaService.js";

export class EstructuraAcademicaController {
  // Programas Académicos
  async getProgramasAcademicos(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const programas = await service.getProgramasAcademicos();
      res.json(programas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProgramaAcademicoById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const programa = await service.getProgramaAcademicoById(Number(req.params.id));
      res.json(programa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProgramaAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevoPrograma = await service.createProgramaAcademico(req.body);
      res.json(nuevoPrograma);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProgramaAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const programa = await service.updateProgramaAcademico(Number(req.params.id), req.body);
      res.json(programa);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProgramaAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deleteProgramaAcademico(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Niveles Académicos
  async getNivelesAcademicos(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const niveles = await service.getNivelesAcademicos();
      res.json(niveles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getNivelAcademicoById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nivel = await service.getNivelAcademicoById(Number(req.params.id));
      res.json(nivel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createNivelAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevoNivel = await service.createNivelAcademico(req.body);
      res.json(nuevoNivel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateNivelAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nivel = await service.updateNivelAcademico(Number(req.params.id), req.body);
      res.json(nivel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteNivelAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deleteNivelAcademico(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Materias
  async getMaterias(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const materias = await service.getMaterias();
      res.json(materias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMateriaById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const materia = await service.getMateriaById(req.params.id);
      res.json(materia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createMateria(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevaMateria = await service.createMateria(req.body);
      res.json(nuevaMateria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateMateria(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const materia = await service.updateMateria(req.params.id, req.body);
      res.json(materia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteMateria(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deleteMateria(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Cursos
  async getCursos(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const cursos = await service.getCursos();
      res.json(cursos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCursoById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const curso = await service.getCursoById(req.params.id);
      res.json(curso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCurso(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevoCurso = await service.createCurso(req.body);
      res.json(nuevoCurso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCurso(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const curso = await service.updateCurso(req.params.id, req.body);
      res.json(curso);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCurso(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deleteCurso(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Secciones
  async getSecciones(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const secciones = await service.getSecciones();
      res.json(secciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSeccionById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const seccion = await service.getSeccionById(req.params.id);
      res.json(seccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSeccion(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevaSeccion = await service.createSeccion(req.body);
      res.json(nuevaSeccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateSeccion(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const seccion = await service.updateSeccion(req.params.id, req.body);
      res.json(seccion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteSeccion(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deleteSeccion(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Periodos Académicos
  async getPeriodosAcademicos(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const periodos = await service.getPeriodosAcademicos();
      res.json(periodos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPeriodoAcademicoById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const periodo = await service.getPeriodoAcademicoById(Number(req.params.id));
      res.json(periodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPeriodoAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevoPeriodo = await service.createPeriodoAcademico(req.body);
      res.json(nuevoPeriodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updatePeriodoAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const periodo = await service.updatePeriodoAcademico(Number(req.params.id), req.body);
      res.json(periodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deletePeriodoAcademico(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deletePeriodoAcademico(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Tipos de Admisión
  async getTiposAdmision(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const tipos = await service.getTiposAdmision();
      res.json(tipos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTipoAdmisionById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const tipo = await service.getTipoAdmisionById(Number(req.params.id));
      res.json(tipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createTipoAdmision(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevoTipo = await service.createTipoAdmision(req.body);
      res.json(nuevoTipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTipoAdmision(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const tipo = await service.updateTipoAdmision(Number(req.params.id), req.body);
      res.json(tipo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteTipoAdmision(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deleteTipoAdmision(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Estados de Estudiante
  async getEstadosEstudiante(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const estados = await service.getEstadosEstudiante();
      res.json(estados);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEstadoEstudianteById(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const estado = await service.getEstadoEstudianteById(Number(req.params.id));
      res.json(estado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createEstadoEstudiante(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const nuevoEstado = await service.createEstadoEstudiante(req.body);
      res.json(nuevoEstado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateEstadoEstudiante(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const estado = await service.updateEstadoEstudiante(Number(req.params.id), req.body);
      res.json(estado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteEstadoEstudiante(req, res) {
    const service = new EstructuraAcademicaService();
    try {
      const success = await service.deleteEstadoEstudiante(Number(req.params.id));
      res.json({ success });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
