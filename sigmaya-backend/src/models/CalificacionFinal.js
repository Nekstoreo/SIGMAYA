import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Estado } from "./Estado.js";
import { Estudiante } from "./Estudiante.js";
import { Seccion } from "./Seccion.js";

// tbl_calificaciones_finales

export const CalificacionFinal = sequelize.define(
  "CalificacionFinal",
  {
    calificacion_final_id: {
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
    estudiante_id: {
      type: DataTypes.CHAR(9),
      references: {
        model: Estudiante,
        key: 'estudiante_id'
      }
    },
    nota_final: {
      type: DataTypes.DECIMAL(3, 2),
    },
    estado_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: Estado,
        key: 'estado_id'
      }
    }
  },
  { tableName: "tbl_calificaciones_finales" }
);

CalificacionFinal.belongsTo(Seccion, { foreignKey: "nrc" });
CalificacionFinal.belongsTo(Estudiante, { foreignKey: "estudiante_id" });
CalificacionFinal.belongsTo(Estado, { foreignKey: "estado_id" });