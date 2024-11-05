import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// tbl_cargos_administrativos

export const CargoAdministrativo = sequelize.define(
  "CargoAdministrativo",
  {
    cargo_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    nivel_jerarquico: {
      type: DataTypes.INTEGER,
    },
  },
  { tableName: "tbl_cargos_administrativos" }
);