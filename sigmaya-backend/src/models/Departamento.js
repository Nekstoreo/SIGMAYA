import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Pais } from "./Pais.js";

// tbl_departamentos

export const Departamento = sequelize.define(
  "Departamento",
  {
    departamento_id: {
      type: DataTypes.BIGINT,
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
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { tableName: "tbl_departamentos" }
);

Region.belongsTo(Pais, { foreignKey: "pais_id" });
