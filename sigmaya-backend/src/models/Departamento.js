import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Pais } from "./Pais.js";

// tbl_departamentos

export const Departamento = sequelize.define(
  "Departamento",
  {
    departamento_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pais_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pais,
        key: "pais_id",
      },
    },
    nombre: {
      type: DataTypes.STRING(100),
      unique: true,
    },
  },
  { tableName: "tbl_departamentos" }
);

Departamento.belongsTo(Pais, { foreignKey: "pais_id" });
