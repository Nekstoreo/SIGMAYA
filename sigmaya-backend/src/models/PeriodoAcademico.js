import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Estado } from "./Estado.js";

// tbl_periodos_academicos

export const PeriodoAcademico = sequelize.define("PeriodoAcademico", {
  periodo_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  anio: {
    type: DataTypes.INTEGER,
  },
  semestre: {
    type: DataTypes.STRING,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
  },
  fecha_fin: {
    type: DataTypes.DATE,
  },
  estado_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Estado,
      key: 'estado_id'
    }
  }
}, { tableName: "tbl_periodos_academicos" });

PeriodoAcademico.belongsTo(Estado, { foreignKey: 'estado_id' });