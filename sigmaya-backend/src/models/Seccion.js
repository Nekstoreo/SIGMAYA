// Seccion.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

export const Seccion = sequelize.define(
  "Seccion",
  {
    nrc: {
      type: DataTypes.CHAR(5),
      primaryKey: true,
    },
    curso_id: {
      type: DataTypes.CHAR(4),
    },
    periodo_id: {
      type: DataTypes.INTEGER,
    },
    profesor_id: {
      type: DataTypes.CHAR(9),
    },
    sede_id: {
      type: DataTypes.INTEGER,
    },
    cupo_maximo: {
      type: DataTypes.INTEGER,
    },
    horario: {
      type: DataTypes.TEXT,
    },
    aula: {
      type: DataTypes.STRING(50),
    },
    modalidad_id: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: "tbl_secciones" }
);