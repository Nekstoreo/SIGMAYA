import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Sede } from "./Sede.js";

// tbl_departamentos

export const Departamento = sequelize.define("Departamento", {
  departamento_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
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
}, { tableName: "tbl_departamentos" });

Departamento.belongsTo(Sede, { foreignKey: 'sede_id' });