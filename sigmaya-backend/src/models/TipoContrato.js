import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_tipos_contrato

export const TipoContrato = sequelize.define("TipoContrato", {
  tipo_contrato_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    unique: true,
  },
}, { tableName: "tbl_tipos_contrato" });