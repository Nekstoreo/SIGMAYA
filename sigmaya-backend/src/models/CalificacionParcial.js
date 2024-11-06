// src/models/CalificacionParcial.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { InscripcionCurso } from "./InscripcionCurso.js";
import { Estudiante } from "./Estudiante.js";

export const CalificacionParcial = sequelize.define(
  "CalificacionParcial",
  {
    calificacion_parcial_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estudiante_id: {
      type: DataTypes.CHAR(9),
      references: {
        model: Estudiante,
        key: "estudiante_id",
      },
    },
    nota: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false,
    },
    fecha_calificacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    detalle_calificacion_id: {
      type: DataTypes.INTEGER,
    },
    estado_id: {
      type: DataTypes.INTEGER,
    },
    observaciones: {
      type: DataTypes.TEXT,
    },
    inscripcion_id: {
      type: DataTypes.INTEGER,
      references: {
        model: InscripcionCurso,
        key: "inscripcion_id",
      },
    },
  },
  { tableName: "tbl_calificaciones_parciales" }
);
