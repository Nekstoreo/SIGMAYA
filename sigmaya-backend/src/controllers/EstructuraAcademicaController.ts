// src/controllers/EstructuraAcademicaController.ts
import { Request, Response } from "express";
import { 
  ProgramaAcademicoRepository,
  NivelAcademicoRepository,
  MateriaRepository,
  CursoRepository,
  SeccionRepository,
  PeriodoAcademicoRepository,
  TipoAdmisionRepository,
  EstadoEstudianteRepository
} from "../repositories/allRepositories";

export class EstructuraAcademicaController {
  private programaAcademicoRepo = new ProgramaAcademicoRepository();
  private nivelAcademicoRepo = new NivelAcademicoRepository();
  private materiaRepo = new MateriaRepository();
  private cursoRepo = new CursoRepository();
  private seccionRepo = new SeccionRepository();
  private periodoAcademicoRepo = new PeriodoAcademicoRepository();
  private tipoAdmisionRepo = new TipoAdmisionRepository();
  private estadoEstudianteRepo = new EstadoEstudianteRepository();

  // Programas Académicos
  async getProgramasAcademicos(req: Request, res: Response) {
    const programas = await this.programaAcademicoRepo.findAll();
    res.json(programas);
  }

  async getProgramaAcademicoById(req: Request, res: Response) {
    const programa = await this.programaAcademicoRepo.findById(Number(req.params.id));
    res.json(programa);
  }

  async createProgramaAcademico(req: Request, res: Response) {
    const nuevoPrograma = await this.programaAcademicoRepo.createProgramaAcademico(req.body);
    res.json(nuevoPrograma);
  }

  async updateProgramaAcademico(req: Request, res: Response) {
    const programa = await this.programaAcademicoRepo.updateProgramaAcademico(Number(req.params.id), req.body);
    res.json(programa);
  }

  async deleteProgramaAcademico(req: Request, res: Response) {
    const success = await this.programaAcademicoRepo.deleteProgramaAcademico(Number(req.params.id));
    res.json({ success });
  }

  // Niveles Académicos
  async getNivelesAcademicos(req: Request, res: Response) {
    const niveles = await this.nivelAcademicoRepo.findAll();
    res.json(niveles);
  }

  async getNivelAcademicoById(req: Request, res: Response) {
    const nivel = await this.nivelAcademicoRepo.findById(Number(req.params.id));
    res.json(nivel);
  }

  async createNivelAcademico(req: Request, res: Response) {
    const nuevoNivel = await this.nivelAcademicoRepo.createNivelAcademico(req.body);
    res.json(nuevoNivel);
  }

  async updateNivelAcademico(req: Request, res: Response) {
    const nivel = await this.nivelAcademicoRepo.updateNivelAcademico(Number(req.params.id), req.body);
    res.json(nivel);
  }

  async deleteNivelAcademico(req: Request, res: Response) {
    const success = await this.nivelAcademicoRepo.deleteNivelAcademico(Number(req.params.id));
    res.json({ success });
  }

  // Materias
  async getMaterias(req: Request, res: Response) {
    const materias = await this.materiaRepo.findAll();
    res.json(materias);
  }

  async getMateriaById(req: Request, res: Response) {
    const materia = await this.materiaRepo.findById(req.params.id);
    res.json(materia);
  }

  async createMateria(req: Request, res: Response) {
    const nuevaMateria = await this.materiaRepo.createMateria(req.body);
    res.json(nuevaMateria);
  }

  async updateMateria(req: Request, res: Response) {
    const materia = await this.materiaRepo.updateMateria(req.params.id, req.body);
    res.json(materia);
  }

  async deleteMateria(req: Request, res: Response) {
    const success = await this.materiaRepo.deleteMateria(Number(req.params.id));
    res.json({ success });
  }

  // Cursos
  async getCursos(req: Request, res: Response) {
    const cursos = await this.cursoRepo.findAll();
    res.json(cursos);
  }

  async getCursoById(req: Request, res: Response) {
    const curso = await this.cursoRepo.findById(req.params.id);
    res.json(curso);
  }

  async createCurso(req: Request, res: Response) {
    const nuevoCurso = await this.cursoRepo.createCurso(req.body);
    res.json(nuevoCurso);
  }

  async updateCurso(req: Request, res: Response) {
    const curso = await this.cursoRepo.updateCurso(req.params.id, req.body);
    res.json(curso);
  }

  async deleteCurso(req: Request, res: Response) {
    const success = await this.cursoRepo.deleteCurso(Number(req.params.id));
    res.json({ success });
  }

  // Secciones
  async getSecciones(req: Request, res: Response) {
    const secciones = await this.seccionRepo.findAll();
    res.json(secciones);
  }

  async getSeccionById(req: Request, res: Response) {
    const seccion = await this.seccionRepo.findById(req.params.id);
    res.json(seccion);
  }

  async createSeccion(req: Request, res: Response) {
    const nuevaSeccion = await this.seccionRepo.createSeccion(req.body);
    res.json(nuevaSeccion);
  }

  async updateSeccion(req: Request, res: Response) {
    const seccion = await this.seccionRepo.updateSeccion(req.params.id, req.body);
    res.json(seccion);
  }

  async deleteSeccion(req: Request, res: Response) {
    const success = await this.seccionRepo.deleteSeccion(Number(req.params.id));
    res.json({ success });
  }

  // Periodos Académicos
  async getPeriodosAcademicos(req: Request, res: Response) {
    const periodos = await this.periodoAcademicoRepo.findAll();
    res.json(periodos);
  }

  async getPeriodoAcademicoById(req: Request, res: Response) {
    const periodo = await this.periodoAcademicoRepo.findById(Number(req.params.id));
    res.json(periodo);
  }

  async createPeriodoAcademico(req: Request, res: Response) {
    const nuevoPeriodo = await this.periodoAcademicoRepo.createPeriodoAcademico(req.body);
    res.json(nuevoPeriodo);
  }

  async updatePeriodoAcademico(req: Request, res: Response) {
    const periodo = await this.periodoAcademicoRepo.updatePeriodoAcademico(Number(req.params.id), req.body);
    res.json(periodo);
  }

  async deletePeriodoAcademico(req: Request, res: Response) {
    const success = await this.periodoAcademicoRepo.deletePeriodoAcademico(Number(req.params.id));
    res.json({ success });
  }

  // Tipos de Admisión
  async getTiposAdmision(req: Request, res: Response) {
    const tipos = await this.tipoAdmisionRepo.findAll();
    res.json(tipos);
  }

  async getTipoAdmisionById(req: Request, res: Response) {
    const tipo = await this.tipoAdmisionRepo.findById(Number(req.params.id));
    res.json(tipo);
  }

  async createTipoAdmision(req: Request, res: Response) {
    const nuevoTipo = await this.tipoAdmisionRepo.createTipoAdmision(req.body);
    res.json(nuevoTipo);
  }

  async updateTipoAdmision(req: Request, res: Response) {
    const tipo = await this.tipoAdmisionRepo.updateTipoAdmision(Number(req.params.id), req.body);
    res.json(tipo);
  }

  async deleteTipoAdmision(req: Request, res: Response) {
    const success = await this.tipoAdmisionRepo.deleteTipoAdmision(Number(req.params.id));
    res.json({ success });
  }

  // Estados de Estudiante
  async getEstadosEstudiante(req: Request, res: Response) {
    const estados = await this.estadoEstudianteRepo.findAll();
    res.json(estados);
  }

  async getEstadoEstudianteById(req: Request, res: Response) {
    const estado = await this.estadoEstudianteRepo.findById(Number(req.params.id));
    res.json(estado);
  }

  async createEstadoEstudiante(req: Request, res: Response) {
    const nuevoEstado = await this.estadoEstudianteRepo.createEstadoEstudiante(req.body);
    res.json(nuevoEstado);
  }

  async updateEstadoEstudiante(req: Request, res: Response) {
    const estado = await this.estadoEstudianteRepo.updateEstadoEstudiante(Number(req.params.id), req.body);
    res.json(estado);
  }

  async deleteEstadoEstudiante(req: Request, res: Response) {
    const success = await this.estadoEstudianteRepo.deleteEstadoEstudiante(Number(req.params.id));
    res.json({ success });
  }
}