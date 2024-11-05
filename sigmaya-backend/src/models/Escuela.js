import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Administrativo } from "./Administrativo.js";
import { Estado } from "./Estado.js";
import { Sede } from "./Sede.js";

// tbl_escuelas

export const Escuela = sequelize.define("Escuela", {
  escuela_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  sede_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Sede,
      key: 'sede_id'
    }
  },
  area_conocimiento: {
    type: DataTypes.STRING,
  },
  decano_id: {
    type: DataTypes.CHAR(9),
    references: {
      model: Administrativo,
      key: 'administrativo_id'
    }
  },
  estado_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Estado,
      key: 'estado_id'
    }
  }
}, { tableName: "tbl_escuelas" });

Escuela.belongsTo(Sede, { foreignKey: 'sede_id' });
Escuela.belongsTo(Administrativo, { foreignKey: 'decano_id' });
Escuela.belongsTo(Estado, { foreignKey: 'estado_id' });