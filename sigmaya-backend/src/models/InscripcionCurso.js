import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Estado } from "./Estado.js";
import { Estudiante } from "./Estudiante.js";
import { Seccion } from "./Seccion.js";

// tbl_inscripciones_curso

export const InscripcionCurso = sequelize.define("InscripcionCurso", {
  inscripcion_id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  estudiante_id: {
    type: DataTypes.CHAR(9),
    references: {
      model: Estudiante,
      key: 'estudiante_id'
    }
  },
  nrc: {
    type: DataTypes.CHAR(5),
    references: {
      model: Seccion,
      key: 'nrc'
    }
  },
  fecha_inscripcion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  estado_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Estado,
      key: 'estado_id'
    }
  },
  nota_final: {
    type: DataTypes.DECIMAL(3, 2),
  },
}, { tableName: "tbl_inscripciones_curso" });

InscripcionCurso.belongsTo(Estudiante, { foreignKey: 'estudiante_id' });
InscripcionCurso.belongsTo(Seccion, { foreignKey: 'nrc' });
InscripcionCurso.belongsTo(Estado, { foreignKey: 'estado_id' });