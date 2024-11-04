import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_grupos_etnicos

export const GrupoEtnico = sequelize.define("GrupoEtnico", {
  etnia_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, { tableName: "tbl_grupos_etnicos" });