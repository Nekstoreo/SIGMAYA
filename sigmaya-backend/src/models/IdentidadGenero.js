import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_identidades_genero

export const IdentidadGenero = sequelize.define("IdentidadGenero", {
  identidad_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
}, { tableName: "tbl_identidades_genero" });