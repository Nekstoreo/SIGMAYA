import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Estado } from "./Estado.js";
import { Estudiante } from "./Estudiante.js";
import { PeriodoAcademico } from "./PeriodoAcademico.js";
import { ProgramaAcademico } from "./ProgramaAcademico.js";
import { Sede } from "./Sede.js";

// tbl_programas_estudiantes

export const ProgramaEstudiante = sequelize.define("ProgramaEstudiante", {
  programa_estudiante_id: {
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
  programa_id: {
    type: DataTypes.INTEGER,
    references: {
      model: ProgramaAcademico,
      key: 'programa_id'
    }
  },
  sede_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Sede,
      key: 'sede_id'
    }
  },
  periodo_ingreso_id: {
    type: DataTypes.INTEGER,
    references: {
      model: PeriodoAcademico,
      key: 'periodo_id'
    }
  },
  estado_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Estado,
      key: 'estado_id'
    }
  }
}, { tableName: "tbl_programas_estudiantes" });

ProgramaEstudiante.belongsTo(Estudiante, { foreignKey: 'estudiante_id' });
ProgramaEstudiante.belongsTo(ProgramaAcademico, { foreignKey: 'programa_id' });
ProgramaEstudiante.belongsTo(Sede, { foreignKey: 'sede_id' });
ProgramaEstudiante.belongsTo(PeriodoAcademico, { foreignKey: 'periodo_ingreso_id' });
ProgramaEstudiante.belongsTo(Estado, { foreignKey: 'estado_id' });
