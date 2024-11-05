import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_materias

export const Materia = sequelize.define("Materia", {
  materia_id: {
    type: DataTypes.CHAR(4),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  nivel_academico_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tbl_niveles_academicos',
      key: 'nivel_id'
    }
  },
  descripcion: {
    type: DataTypes.TEXT,
  }
}, { tableName: "tbl_materias" });
