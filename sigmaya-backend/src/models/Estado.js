import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_estados

export const Estado = sequelize.define(
  "Estado",
  {
    estado_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      unique: true,
    },
  },
  { tableName: "tbl_estados", timestamps: false }
);