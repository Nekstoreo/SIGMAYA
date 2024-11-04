import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Seccion } from "./Seccion.js";

// tbl_detalles_calificaciones

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
        model: Seccion,
        key: 'nrc'
      }
    },
    actividad: {
      type: DataTypes.STRING,
    },
    porcentaje: {
      type: DataTypes.DECIMAL(3, 2),
    },
  },
  { tableName: "tbl_detalles_calificaciones" }
);

DetalleCalificacion.belongsTo(Seccion, { foreignKey: "nrc" });