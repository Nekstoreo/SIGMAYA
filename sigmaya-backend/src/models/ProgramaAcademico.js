import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Estado } from "./Estado.js";
import { Facultad } from "./Facultad.js";
import { Modalidad } from "./Modalidad.js";
import { NivelAcademico } from "./NivelAcademico.js";
import { Profesor } from "./Profesor.js";

// tbl_programas_academicos

export const ProgramaAcademico = sequelize.define(
  "ProgramaAcademico",
  {
    programa_id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
    },
    facultad_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: Facultad,
        key: 'facultad_id'
      }
    },
    nivel_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: NivelAcademico,
        key: 'nivel_id'
      }
    },
    duracion_semestres: {
      type: DataTypes.INTEGER,
    },
    director_id: {
      type: DataTypes.CHAR(9),
      references: {
        model: Profesor,
        key: 'profesor_id'
      }
    },
    estado_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: Estado,
        key: 'estado_id'
      }
    },
    modalidad_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: Modalidad,
        key: 'modalidad_id'
      }
    }
  },
  { tableName: "tbl_programas_academicos" }
);

ProgramaAcademico.belongsTo(Facultad, { foreignKey: "facultad_id" });
ProgramaAcademico.belongsTo(NivelAcademico, { foreignKey: "nivel_id" });
ProgramaAcademico.belongsTo(Profesor, { foreignKey: "director_id" });
ProgramaAcademico.belongsTo(Estado, { foreignKey: "estado_id" });
ProgramaAcademico.belongsTo(Modalidad, { foreignKey: "modalidad_id" });