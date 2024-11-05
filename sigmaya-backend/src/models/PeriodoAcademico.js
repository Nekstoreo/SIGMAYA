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
    allowNull: false,
  },
  semestre: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Estado,
      key: 'estado_id'
    },
    allowNull: false,
  }
}, { tableName: "tbl_periodos_academicos" });

PeriodoAcademico.belongsTo(Estado, { foreignKey: 'estado_id' });