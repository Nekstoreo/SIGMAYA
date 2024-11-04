import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Region } from "./Region.js";

// tbl_ciudades

export const Ciudad = sequelize.define(
  "Ciudad",
  {
    ciudad_id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    region_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Region,
        key: 'region_id'
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

Ciudad.belongsTo(Region, { foreignKey: "region_id" });