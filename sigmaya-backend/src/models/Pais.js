import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_paises
export const Pais = sequelize.define("Pais", {
  pais_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
}, { tableName: "tbl_paises" });