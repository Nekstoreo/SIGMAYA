import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_tipos_admision

export const TipoAdmision = sequelize.define("TipoAdmision", {
  tipo_admision_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    unique: true,
  },
}, { tableName: "tbl_tipos_admision", timestamps: false });