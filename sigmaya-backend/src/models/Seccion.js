import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { Curso } from "./Curso.js";
import { Modalidad } from "./Modalidad.js";
import { PeriodoAcademico } from "./PeriodoAcademico.js";
import { Profesor } from "./Profesor.js";
import { Sede } from "./Sede.js";
import { DetalleCalificacion } from "./DetalleCalificacion.js";


// Definir el modelo Seccion sin las asociaciones
export const Seccion = sequelize.define(
  "Seccion",
  {
    nrc: {
      type: DataTypes.CHAR(5),
      primaryKey: true,
    },
    curso_id: {
      type: DataTypes.CHAR(4),
    },
    periodo_id: {
      type: DataTypes.INTEGER,
    },
    profesor_id: {
      type: DataTypes.CHAR(9),
    },
    sede_id: {
      type: DataTypes.INTEGER,
    },
    cupo_maximo: {
      type: DataTypes.INTEGER,
    },
    horario: {
      type: DataTypes.TEXT,
    },
    aula: {
      type: DataTypes.STRING(50),
    },
    modalidad_id: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: "tbl_secciones" }
);

Seccion.belongsTo(Curso, { foreignKey: "curso_id" });
Seccion.belongsTo(PeriodoAcademico, { foreignKey: "periodo_id" });
Seccion.belongsTo(Profesor, { foreignKey: "profesor_id" });
Seccion.belongsTo(Sede, { foreignKey: "sede_id" });
Seccion.belongsTo(Modalidad, { foreignKey: "modalidad_id" });
