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
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
}, { tableName: "tbl_sedes" });