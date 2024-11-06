// src/models/associations.js
import { CalificacionParcial } from "./CalificacionParcial.js";
import { CalificacionFinal } from "./CalificacionFinal.js";
import { DetalleCalificacion } from "./DetalleCalificacion.js";
import { Seccion } from "./Seccion.js";
import { Estado } from "./Estado.js";
import { Estudiante } from "./Estudiante.js";
import { Curso } from "./Curso.js";
import { Modalidad } from "./Modalidad.js";
import { PeriodoAcademico } from "./PeriodoAcademico.js";
import { Profesor } from "./Profesor.js";
import { Sede } from "./Sede.js";
import { Usuario } from "./Usuario.js";
import { TipoDocumento } from "./TipoDocumento.js";
import { Ciudad } from "./Ciudad.js";
import { IdentidadGenero } from "./IdentidadGenero.js";
import { GrupoEtnico } from "./GrupoEtnico.js";
import { EstadoCivil } from "./EstadoCivil.js";
import { Rol } from "./Rol.js";
import { EstadoEstudiante } from "./EstadoEstudiante.js";
import { TipoAdmision } from "./TipoAdmision.js";
import { InscripcionCurso } from "./InscripcionCurso.js";

export function setupAssociations() {
  DetalleCalificacion.belongsTo(Seccion, { foreignKey: "nrc" });
  DetalleCalificacion.hasMany(CalificacionParcial, {
    foreignKey: "detalle_calificacion_id",
  });
  Seccion.belongsTo(Curso, { foreignKey: "curso_id" });
  Seccion.belongsTo(PeriodoAcademico, { foreignKey: "periodo_id" });
  Seccion.belongsTo(Profesor, { foreignKey: "profesor_id" });
  Seccion.belongsTo(Sede, { foreignKey: "sede_id" });
  Seccion.belongsTo(Modalidad, { foreignKey: "modalidad_id" });
  Seccion.hasMany(DetalleCalificacion, { foreignKey: "nrc" });
  CalificacionParcial.belongsTo(Estudiante, { foreignKey: "estudiante_id" });
  CalificacionParcial.belongsTo(DetalleCalificacion, {
    foreignKey: "detalle_calificacion_id",
  });
  CalificacionParcial.belongsTo(Estado, { foreignKey: "estado_id" });
  CalificacionParcial.belongsTo(Seccion, { foreignKey: "nrc" });
  CalificacionParcial.belongsTo(PeriodoAcademico, { foreignKey: "periodo_id" });
  CalificacionParcial.belongsTo(InscripcionCurso, { foreignKey: "inscripcion_id" });
  Usuario.belongsTo(TipoDocumento, { foreignKey: "tipo_documento" });
  Usuario.belongsTo(Ciudad, { foreignKey: "ciudad_origen" });
  Usuario.belongsTo(IdentidadGenero, { foreignKey: "genero" });
  Usuario.belongsTo(GrupoEtnico, { foreignKey: "etnia" });
  Usuario.belongsTo(EstadoCivil, { foreignKey: "estado_civil" });
  Usuario.belongsTo(Estado, { foreignKey: "estado" });
  Usuario.belongsTo(Rol, { foreignKey: "rol_id" });
  Estudiante.belongsTo(Usuario, { foreignKey: "estudiante_id", as: "usuario" });
  Estudiante.belongsTo(EstadoEstudiante, {
    foreignKey: "estado_id",
    as: "estadoEstudiante",
  });
  Estudiante.belongsTo(TipoAdmision, { foreignKey: "tipo_admision_id" });
  Estudiante.belongsTo(PeriodoAcademico, {
    foreignKey: "cohorte_id",
    as: "periodoAcademico",
  });

  InscripcionCurso.belongsTo(Estudiante, { foreignKey: "estudiante_id" });
  InscripcionCurso.belongsTo(Seccion, { foreignKey: "nrc" });
  InscripcionCurso.belongsTo(Estado, { foreignKey: "estado_id" });
  InscripcionCurso.hasMany(CalificacionParcial, { foreignKey: "inscripcion_id" });

  // Agregar la asociación inversa
  Seccion.hasMany(InscripcionCurso, { foreignKey: "nrc" });

  // Asociaciones para CalificacionFinal
  CalificacionFinal.belongsTo(Seccion, { foreignKey: "nrc" });
  CalificacionFinal.belongsTo(Estudiante, { foreignKey: "estudiante_id" });
  CalificacionFinal.belongsTo(Estado, { foreignKey: "estado_id" });
  Estudiante.hasMany(CalificacionFinal, { foreignKey: "estudiante_id" });
}