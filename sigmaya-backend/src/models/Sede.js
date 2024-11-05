import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_sedes

export const Sede = sequelize.define("Sede", {
  sede_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING(200),
  },
  telefono: {
    type: DataTypes.STRING(20),
  },
  email: {
    type: DataTypes.STRING(100),
  },
}, { tableName: "tbl_sedes" });