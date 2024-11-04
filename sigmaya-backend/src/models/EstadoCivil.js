import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_estado_civil

export const EstadoCivil = sequelize.define("EstadoCivil", {
  estado_civil_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
}, { tableName: "tbl_estado_civil" });