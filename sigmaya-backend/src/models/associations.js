import { CalificacionParcial } from "./CalificacionParcial.js";
import { DetalleCalificacion } from "./DetalleCalificacion.js";
import { Seccion } from "./Seccion.js";
import { Estado } from "./Estado.js";
import { Estudiante } from "./Estudiante.js";
import { Curso } from "./Curso.js";
import { Modalidad } from "./Modalidad.js";
import { PeriodoAcademico } from "./PeriodoAcademico.js";
import { Profesor } from "./Profesor.js";
import { Sede } from "./Sede.js";

export function setupAssociations() {
  DetalleCalificacion.belongsTo(Seccion, { foreignKey: "nrc" });
  DetalleCalificacion.hasMany(CalificacionParcial, {
    foreignKey: "detalle_calificacion_id",
  }); // Add this line
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
}
