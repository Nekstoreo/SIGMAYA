import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Materia } from "./Materia.js";

// tbl_prerrequisitos

export const Prerrequisito = sequelize.define("Prerrequisito", {
  prerrequisito_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  materia_id: {
    type: DataTypes.CHAR(4),
    references: {
      model: Materia,
      key: 'materia_id'
    }
  },
  prerrequisito_materia_id: {
    type: DataTypes.CHAR(4),
    references: {
      model: Materia,
      key: 'materia_id'
    }
  }
}, { tableName: "tbl_prerrequisitos" });

Prerrequisito.belongsTo(Materia, { as: 'Materia', foreignKey: 'materia_id' });
Prerrequisito.belongsTo(Materia, { as: 'PrerrequisitoMateria', foreignKey: 'prerrequisito_materia_id' });