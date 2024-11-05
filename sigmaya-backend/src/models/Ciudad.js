import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Departamento } from "./Departamento.js";

// tbl_ciudades

export const Ciudad = sequelize.define(
  "Ciudad",
  {
    ciudad_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    departamento_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Departamento,
        key: 'departamento_id'
      }
    },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
    },
    rural: {
      type: DataTypes.BOOLEAN,
    },
  },
  { tableName: "tbl_ciudades" }
);

Ciudad.belongsTo(Departamento, { foreignKey: "departamento_id" });