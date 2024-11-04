import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_modalidades

export const Modalidad = sequelize.define("Modalidad", {
  modalidad_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
}, { tableName: "tbl_modalidades" });