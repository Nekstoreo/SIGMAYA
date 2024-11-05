import { EstudianteRepository } from "../repositories/EstudianteRepository.js";
import { UsuarioRepository } from "../repositories/UsuarioRepository.js";
import { EstadoEstudiante } from "../models/EstadoEstudiante.js";
import { PeriodoAcademico } from "../models/PeriodoAcademico.js";
import { Curso } from "../models/Curso.js";
import { InscripcionCurso } from "../models/InscripcionCurso.js";
import { Seccion } from "../models/Seccion.js";
import { Profesor } from "../models/Profesor.js";
import { DetalleCalificacion } from "../models/DetalleCalificacion.js";
import { CalificacionParcial } from "../models/CalificacionParcial.js";

class EstudianteService {
  constructor() {
    this.estudianteRepository = new EstudianteRepository();
    this.usuarioRepository = new UsuarioRepository();
  }

  async getStudentInfo(estudianteId) {
    try {
      const studentInfo = await this.estudianteRepository.findOne({
        where: { estudiante_id: estudianteId },
        include: [
          {
            model: this.usuarioRepository.model,
            as: "usuario",
          },
          {
            model: EstadoEstudiante,
            as: "estadoEstudiante",
          },
          {
            model: PeriodoAcademico,
            as: "periodoAcademico",
          },
        ],
      });

      if (!studentInfo) {
        throw new Error("Estudiante no encontrado");
      }

      return studentInfo;
    } catch (error) {
      console.error("Error al obtener la información del estudiante:", error);
      throw error;
    }
  }

  async getStudentPeriods(estudianteId) {
    try {
      // Obtener las inscripciones del estudiante
      const inscripciones = await InscripcionCurso.findAll({
        where: { estudiante_id: estudianteId },
        include: [
          {
            model: Seccion,
            attributes: ["nrc", "curso_id", "periodo_id"],
            include: [
              {
                model: PeriodoAcademico,
                attributes: ["periodo_id", "anio", "semestre"],
              },
              {
                model: Curso,
                attributes: ["curso_id", "materia_id", "titulo", "creditos"],
              },
            ],
          },
        ],
      });

      if (!inscripciones || inscripciones.length === 0) {
        throw new Error("No se encontraron inscripciones para el estudiante");
      }

      // Extraer los periodos únicos y agregar los cursos/secciones
      const periodosMap = new Map();
      inscripciones.forEach((inscripcion) => {
        const periodo = inscripcion.Seccion.PeriodoAcademico;
        const curso = inscripcion.Seccion.Curso;
        const seccion = {
          nrc: inscripcion.Seccion.nrc,
          materia_id: curso.materia_id,
          titulo: curso.titulo,
          creditos: curso.creditos,
        };

        if (!periodosMap.has(periodo.periodo_id)) {
          periodosMap.set(periodo.periodo_id, {
            ...periodo.get({ plain: true }),
            secciones: [seccion],
          });
        } else {
          periodosMap.get(periodo.periodo_id).secciones.push(seccion);
        }
      });

      // Convertir el mapa a una lista
      const periodos = Array.from(periodosMap.values());

      return periodos;
    } catch (error) {
      console.error("Error al obtener los periodos del estudiante:", error);
      throw error;
    }
  }

  async getCourseDetails(nrc, estudianteId) {
    try {
      const seccion = await Seccion.findOne({
        where: { nrc },
        include: [
          {
            model: Curso,
            attributes: [
              "curso_id",
              "titulo",
              "creditos",
              "contenido_tematico",
            ],
          },
          {
            model: Profesor,
            attributes: ["nombres", "apellidos"],
          },
          {
            model: DetalleCalificacion,
            attributes: ["detalle_calificacion_id", "actividad", "porcentaje"],
            include: [
              {
                model: CalificacionParcial,
                attributes: ["nota"],
                where: { estudiante_id: estudianteId },
                required: false,
              },
            ],
          },
        ],
      });

      if (!seccion) {
        throw new Error("No se encontró la sección con el NRC proporcionado");
      }

      const courseDetails = {
        curso: seccion.Curso,
        profesor: `${seccion.Profesor.nombres} ${seccion.Profesor.apellidos}`,
        detallesCalificacion: seccion.DetalleCalificacions.map((detalle) => ({
          actividad: detalle.actividad,
          porcentaje: detalle.porcentaje,
          nota:
            detalle.CalificacionParcials.length > 0
              ? detalle.CalificacionParcials[0].nota
              : null,
        })),
      };

      return courseDetails;
    } catch (error) {
      console.error("Error al obtener los detalles del curso:", error);
      throw error;
    }
  }
}

export default new EstudianteService();
