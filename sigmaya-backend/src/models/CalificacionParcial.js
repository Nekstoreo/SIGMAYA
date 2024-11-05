import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
// tbl_calificaciones_parciales

export const CalificacionParcial = sequelize.define(
  "CalificacionParcial",
  {
    calificacion_parcial_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nota: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false,
    },
    fecha_calificacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    observaciones: {
      type: DataTypes.TEXT,
    },
  },
  { tableName: "tbl_calificaciones_parciales" }
);
