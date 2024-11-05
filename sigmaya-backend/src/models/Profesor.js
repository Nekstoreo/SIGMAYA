import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { NivelAcademico } from "./NivelAcademico.js";
import { TipoContrato } from "./TipoContrato.js";
import { Usuario } from "./Usuario.js";

// tbl_profesores

export const Profesor = sequelize.define("Profesor", {
  profesor_id: {
    type: DataTypes.CHAR(9),
    primaryKey: true,
    references: {
      model: Usuario,
      key: 'usuario_id'
    }
  },
  nivel_academico_id: {
    type: DataTypes.INTEGER,
    references: {
      model: NivelAcademico,
      key: 'nivel_id'
    }
  },
  tipo_contrato_id: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoContrato,
      key: 'tipo_contrato_id'
    }
  },
  fecha_vinculacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  especialidad: {
    type: DataTypes.STRING,
  },
}, { tableName: "tbl_profesores" });

Profesor.belongsTo(Usuario, { foreignKey: 'profesor_id' });
Profesor.belongsTo(NivelAcademico, { foreignKey: 'nivel_academico_id' });
Profesor.belongsTo(TipoContrato, { foreignKey: 'tipo_contrato_id' });