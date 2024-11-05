// DetalleCalificacion.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const DetalleCalificacion = sequelize.define(
  "DetalleCalificacion",
  {
    detalle_calificacion_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nrc: {
      type: DataTypes.CHAR(5),
      references: {
        model: "tbl_secciones",
        key: "nrc",
      },
    },
    actividad: {
      type: DataTypes.STRING(100),
    },
    porcentaje: {
      type: DataTypes.DECIMAL(3, 2),
    },
  },
  { tableName: "tbl_detalles_calificaciones" }
);

