import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_estados_estudiante

export const EstadoEstudiante = sequelize.define("EstadoEstudiante", {
  estado_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
}, { tableName: "tbl_estados_estudiante" });