import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { Administrativo } from "./Administrativo.js";
import { Escuela } from "./Escuela.js";
import { Estado } from "./Estado.js";

// tbl_facultades

export const Facultad = sequelize.define("Facultad", {
  facultad_id: {
    type: DataTypes.SMALLINT,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  escuela_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Escuela,
      key: 'escuela_id'
    }
  },
  director_id: {
    type: DataTypes.CHAR(9),
    references: {
      model: Administrativo,
      key: 'administrativo_id'
    }
  },
  fecha_creacion: {
    type: DataTypes.DATE,
  },
  estado_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: Estado,
      key: 'estado_id'
    }
  }
}, { tableName: "tbl_facultades" });

Facultad.belongsTo(Escuela, { foreignKey: 'escuela_id' });
Facultad.belongsTo(Administrativo, { foreignKey: 'director_id' });
Facultad.belongsTo(Estado, { foreignKey: 'estado_id' });