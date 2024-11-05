import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_niveles_acceso

export const NivelAcceso = sequelize.define("NivelAcceso", {
  nivel_acceso_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  permisos: {
    type: DataTypes.TEXT,
  },
}, { tableName: "tbl_niveles_acceso" });