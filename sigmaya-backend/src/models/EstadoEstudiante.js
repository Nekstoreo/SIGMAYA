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
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
}, { tableName: "tbl_estados_estudiante" });