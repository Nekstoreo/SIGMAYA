import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_niveles_academicos

export const NivelAcademico = sequelize.define(
  "NivelAcademico",
  {
    nivel_id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      unique: true,
    },
  },
  { tableName: "tbl_niveles_academicos", timestamps: false }
);