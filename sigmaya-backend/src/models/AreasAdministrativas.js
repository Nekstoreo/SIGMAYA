import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Sede } from "./Sede.js";

export const AreasAdministrativas = sequelize.define("AreasAdministrativas", {
  area_id: {
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
  sede_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Sede,
      key: 'sede_id'
    }
  }
}, { tableName: "tbl_areas_administrativas" });

AreasAdministrativas.belongsTo(Sede, { foreignKey: 'sede_id' });