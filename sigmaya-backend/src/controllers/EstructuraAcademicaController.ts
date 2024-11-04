// src/controllers/EstructuraAcademicaController.ts
import { Request, Response } from "express";
import { EstructuraAcademicaService } from "../services/EstructuraAcademicaService";

export class EstructuraAcademicaController {
  private estructuraAcademicaService = new EstructuraAcademicaService();

  // Programas Académicos
  async getProgramasAcademicos(req: Request, res: Response) {
    const programas = await this.estructuraAcademicaService.getProgramasAcademicos();
    res.json(programas);
  }

  async getProgramaAcademicoById(req: Request, res: Response) {
    const programa = await this.estructuraAcademicaService.getProgramaAcademicoById(Number(req.params.id));
    res.json(programa);
  }

  async createProgramaAcademico(req: Request, res: Response) {
    const nuevoPrograma = await this.estructuraAcademicaService.createProgramaAcademico(req.body);
    res.json(nuevoPrograma);
  }

  async updateProgramaAcademico(req: Request, res: Response) {
    const programa = await this.estructuraAcademicaService.updateProgramaAcademico(Number(req.params.id), req.body);
    res.json(programa);
  }

  async deleteProgramaAcademico(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deleteProgramaAcademico(Number(req.params.id));
    res.json({ success });
  }

  // Niveles Académicos
  async getNivelesAcademicos(req: Request, res: Response) {
    const niveles = await this.estructuraAcademicaService.getNivelesAcademicos();
    res.json(niveles);
  }

  async getNivelAcademicoById(req: Request, res: Response) {
    const nivel = await this.estructuraAcademicaService.getNivelAcademicoById(Number(req.params.id));
    res.json(nivel);
  }

  async createNivelAcademico(req: Request, res: Response) {
    const nuevoNivel = await this.estructuraAcademicaService.createNivelAcademico(req.body);
    res.json(nuevoNivel);
  }

  async updateNivelAcademico(req: Request, res: Response) {
    const nivel = await this.estructuraAcademicaService.updateNivelAcademico(Number(req.params.id), req.body);
    res.json(nivel);
  }

  async deleteNivelAcademico(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deleteNivelAcademico(Number(req.params.id));
    res.json({ success });
  }

  // Materias
  async getMaterias(req: Request, res: Response) {
    const materias = await this.estructuraAcademicaService.getMaterias();
    res.json(materias);
  }

  async getMateriaById(req: Request, res: Response) {
    const materia = await this.estructuraAcademicaService.getMateriaById(req.params.id);
    res.json(materia);
  }

  async createMateria(req: Request, res: Response) {
    const nuevaMateria = await this.estructuraAcademicaService.createMateria(req.body);
    res.json(nuevaMateria);
  }

  async updateMateria(req: Request, res: Response) {
    const materia = await this.estructuraAcademicaService.updateMateria(req.params.id, req.body);
    res.json(materia);
  }

  async deleteMateria(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deleteMateria(Number(req.params.id));
    res.json({ success });
  }

  // Cursos
  async getCursos(req: Request, res: Response) {
    const cursos = await this.estructuraAcademicaService.getCursos();
    res.json(cursos);
  }

  async getCursoById(req: Request, res: Response) {
    const curso = await this.estructuraAcademicaService.getCursoById(req.params.id);
    res.json(curso);
  }

  async createCurso(req: Request, res: Response) {
    const nuevoCurso = await this.estructuraAcademicaService.createCurso(req.body);
    res.json(nuevoCurso);
  }

  async updateCurso(req: Request, res: Response) {
    const curso = await this.estructuraAcademicaService.updateCurso(req.params.id, req.body);
    res.json(curso);
  }

  async deleteCurso(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deleteCurso(Number(req.params.id));
    res.json({ success });
  }

  // Secciones
  async getSecciones(req: Request, res: Response) {
    const secciones = await this.estructuraAcademicaService.getSecciones();
    res.json(secciones);
  }

  async getSeccionById(req: Request, res: Response) {
    const seccion = await this.estructuraAcademicaService.getSeccionById(req.params.id);
    res.json(seccion);
  }

  async createSeccion(req: Request, res: Response) {
    const nuevaSeccion = await this.estructuraAcademicaService.createSeccion(req.body);
    res.json(nuevaSeccion);
  }

  async updateSeccion(req: Request, res: Response) {
    const seccion = await this.estructuraAcademicaService.updateSeccion(req.params.id, req.body);
    res.json(seccion);
  }

  async deleteSeccion(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deleteSeccion(Number(req.params.id));
    res.json({ success });
  }

  // Periodos Académicos
  async getPeriodosAcademicos(req: Request, res: Response) {
    const periodos = await this.estructuraAcademicaService.getPeriodosAcademicos();
    res.json(periodos);
  }

  async getPeriodoAcademicoById(req: Request, res: Response) {
    const periodo = await this.estructuraAcademicaService.getPeriodoAcademicoById(Number(req.params.id));
    res.json(periodo);
  }

  async createPeriodoAcademico(req: Request, res: Response) {
    const nuevoPeriodo = await this.estructuraAcademicaService.createPeriodoAcademico(req.body);
    res.json(nuevoPeriodo);
  }

  async updatePeriodoAcademico(req: Request, res: Response) {
    const periodo = await this.estructuraAcademicaService.updatePeriodoAcademico(Number(req.params.id), req.body);
    res.json(periodo);
  }

  async deletePeriodoAcademico(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deletePeriodoAcademico(Number(req.params.id));
    res.json({ success });
  }

  // Tipos de Admisión
  async getTiposAdmision(req: Request, res: Response) {
    const tipos = await this.estructuraAcademicaService.getTiposAdmision();
    res.json(tipos);
  }

  async getTipoAdmisionById(req: Request, res: Response) {
    const tipo = await this.estructuraAcademicaService.getTipoAdmisionById(Number(req.params.id));
    res.json(tipo);
  }

  async createTipoAdmision(req: Request, res: Response) {
    const nuevoTipo = await this.estructuraAcademicaService.createTipoAdmision(req.body);
    res.json(nuevoTipo);
  }

  async updateTipoAdmision(req: Request, res: Response) {
    const tipo = await this.estructuraAcademicaService.updateTipoAdmision(Number(req.params.id), req.body);
    res.json(tipo);
  }

  async deleteTipoAdmision(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deleteTipoAdmision(Number(req.params.id));
    res.json({ success });
  }

  // Estados de Estudiante
  async getEstadosEstudiante(req: Request, res: Response) {
    const estados = await this.estructuraAcademicaService.getEstadosEstudiante();
    res.json(estados);
  }

  async getEstadoEstudianteById(req: Request, res: Response) {
    const estado = await this.estructuraAcademicaService.getEstadoEstudianteById(Number(req.params.id));
    res.json(estado);
  }

  async createEstadoEstudiante(req: Request, res: Response) {
    const nuevoEstado = await this.estructuraAcademicaService.createEstadoEstudiante(req.body);
    res.json(nuevoEstado);
  }

  async updateEstadoEstudiante(req: Request, res: Response) {
    const estado = await this.estructuraAcademicaService.updateEstadoEstudiante(Number(req.params.id), req.body);
    res.json(estado);
  }

  async deleteEstadoEstudiante(req: Request, res: Response) {
    const success = await this.estructuraAcademicaService.deleteEstadoEstudiante(Number(req.params.id));
    res.json({ success });
  }
}