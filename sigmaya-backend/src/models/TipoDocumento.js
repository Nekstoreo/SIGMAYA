import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_tipos_documento

export const TipoDocumento = sequelize.define("TipoDocumento", {
  tipo_documento_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
}, { tableName: "tbl_tipos_documento" });