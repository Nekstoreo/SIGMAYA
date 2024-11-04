import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Curso } from "./Curso.js";
import { Modalidad } from "./Modalidad.js";
import { PeriodoAcademico } from "./PeriodoAcademico.js";
import { Profesor } from "./Profesor.js";
import { Sede } from "./Sede.js";

// tbl_secciones

export const Seccion = sequelize.define("Seccion", {
  nrc: {
    type: DataTypes.CHAR(5),
    primaryKey: true,
  },
  curso_id: {
    type: DataTypes.CHAR(4),
    references: {
      model: Curso,
      key: 'curso_id'
    }
  },
  periodo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: PeriodoAcademico,
      key: 'periodo_id'
    }
  },
  profesor_id: {
    type: DataTypes.CHAR(9),
    references: {
      model: Profesor,
      key: 'profesor_id'
    }
  },
  sede_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Sede,
      key: 'sede_id'
    }
  },
  cupo_maximo: {
    type: DataTypes.INTEGER,
  },
  horario: {
    type: DataTypes.TEXT,
  },
  aula: {
    type: DataTypes.STRING,
  },
  modalidad_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Modalidad,
      key: 'modalidad_id'
    }
  }
}, { tableName: "tbl_secciones" });

Seccion.belongsTo(Curso, { foreignKey: 'curso_id' });
Seccion.belongsTo(PeriodoAcademico, { foreignKey: 'periodo_id' });
Seccion.belongsTo(Profesor, { foreignKey: 'profesor_id' });
Seccion.belongsTo(Sede, { foreignKey: 'sede_id' });
Seccion.belongsTo(Modalidad, { foreignKey: 'modalidad_id' });