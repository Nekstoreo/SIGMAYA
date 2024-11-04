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
  },
  fecha_vinculacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  especialidad: {
    type: DataTypes.STRING,
  },
}, { tableName: "tbl_profesores" });

Profesor.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Profesor.belongsTo(NivelAcademico, { foreignKey: 'nivel_academico_id' });
Profesor.belongsTo(TipoContrato, { foreignKey: 'tipo_contrato_id' });