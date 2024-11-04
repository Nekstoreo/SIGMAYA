import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_materias

export const Materia = sequelize.define("Materia", {
  materia_id: {
    type: DataTypes.CHAR(4),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
  tipo_programa: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, { tableName: "tbl_materias" });