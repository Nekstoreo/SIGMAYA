import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { DetalleCalificacion } from "./DetalleCalificacion.js";
import { Estado } from "./Estado.js";
import { Estudiante } from "./Estudiante.js";

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
    },
    fecha_calificacion: {
      type: DataTypes.DATE,
    },
  },
  { tableName: "tbl_calificaciones_parciales" }
);
CalificacionParcial.belongsTo(Estudiante, { foreignKey: "estudiante_id" });
CalificacionParcial.belongsTo(DetalleCalificacion, {
  foreignKey: "detalle_calificacion_id",
});
CalificacionParcial.belongsTo(Estado, { foreignKey: "estado_id" });
