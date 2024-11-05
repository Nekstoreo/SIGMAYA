import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_tipos_documento

export const TipoDocumento = sequelize.define("TipoDocumento", {
  tipo_documento_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
}, { tableName: "tbl_tipos_documento", timestamps: false });