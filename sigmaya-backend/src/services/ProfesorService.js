// src/services/ProfesorService.js
import { Seccion } from "../models/Seccion.js";
import { Curso } from "../models/Curso.js";
import { InscripcionCurso } from "../models/InscripcionCurso.js";
import { Estudiante } from "../models/Estudiante.js";
import { Usuario } from "../models/Usuario.js";
import { CalificacionParcial } from "../models/CalificacionParcial.js";
import { CalificacionFinal } from "../models/CalificacionFinal.js";

class ProfesorService {
  async getTeachingSections(profesorId) {
    try {
      const secciones = await Seccion.findAll({
        where: { profesor_id: profesorId },
        include: [
          {
            model: Curso,
            attributes: ["titulo"],
          },
        ],
      });

      if (!secciones || secciones.length === 0) {
        throw new Error("No se encontraron secciones asignadas al profesor");
      }

      const seccionesFormateadas = secciones.map((seccion) => ({
        nrc: seccion.nrc,
        nombreClase: seccion.Curso.titulo,
        aula: seccion.aula,
        horario: this.parseHorario(seccion.horario), // Asegurarse de que el horario es un JSON válido
      }));

      return seccionesFormateadas;
    } catch (error) {
      console.error("Error al obtener las secciones del profesor:", error);
      throw error;
    }
  }

  async getStudentsBySection(nrc) {
    try {
      const inscripciones = await InscripcionCurso.findAll({
        where: { nrc },
        include: [
          {
            model: Estudiante,
            include: [
              {
                model: Usuario,
                as: "usuario",
                attributes: ["nombres", "apellidos"],
              },
              {
                model: CalificacionFinal,
                attributes: ["nota_final"],
              },
            ],
          },
          {
            model: CalificacionParcial,
            attributes: ["nota", "detalle_calificacion_id"],
          },
        ],
      });

      if (!inscripciones || inscripciones.length === 0) {
        throw new Error("No se encontraron estudiantes para la sección");
      }

      const estudiantes = inscripciones.map((inscripcion) => ({
        id: inscripcion.estudiante_id,
        nombre: `${inscripcion.Estudiante.usuario.nombres} ${inscripcion.Estudiante.usuario.apellidos}`,
        calificaciones: inscripcion.CalificacionParcials.map(
          (calificacion) => ({
            nota: calificacion.nota,
            detalleCalificacionId: calificacion.detalle_calificacion_id,
          })
        ),
      }));

      return estudiantes;
    } catch (error) {
      console.error("Error al obtener los estudiantes de la sección:", error);
      throw error;
    }
  }
  async updateStudentGrade(
    nrc,
    estudianteId,
    nuevaNota,
    detalleCalificacionId
  ) {
    try {
      // buscar todas las inscripciones del estudiante
      const inscripciones = await InscripcionCurso.findAll({
        where: { estudiante_id: estudianteId },
      });

      // retornar la inscripcion que coincida con el nrc
      const inscripcion = inscripciones.find(
        (inscripcion) => inscripcion.nrc === nrc
      );

      console.log("Inscripcion encontrada:", inscripcion); // Debug log
      const calificacion = await CalificacionParcial.findOne({
        where: {
          inscripcion_id: inscripcion.inscripcion_id,
          detalle_calificacion_id: detalleCalificacionId,
        },
        attributes: [
          "calificacion_parcial_id",
          "estudiante_id",
          "nota",
          "fecha_calificacion",
          "detalle_calificacion_id",
          "estado_id",
          "observaciones",
          "inscripcion_id",
        ],
      });

      if (!calificacion) {
        throw new Error(
          "No se encontró la calificación para el estudiante en la sección con el detalle especificado"
        );
      }

      calificacion.nota = nuevaNota;
      await calificacion.save();

      return calificacion;
    } catch (error) {
      console.error(
        "Error al actualizar la calificación del estudiante:",
        error
      );
      throw error;
    }
  }

  parseHorario(horario) {
    try {
      return JSON.parse(`[${horario}]`);
    } catch (error) {
      console.error("Error al parsear el horario:", error);
      return null; // O manejar el error de otra manera
    }
  }
}

export default ProfesorService;
