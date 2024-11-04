import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { CargoAdministrativo } from "./CargoAdministrativo.js";
import { Departamento } from "./Departamento.js";
import { NivelAcceso } from "./NivelAcceso.js";
import { Usuario } from "./Usuario.js";

// tbl_administrativos

export const Administrativo = sequelize.define(
  "Administrativo",
  {
    administrativo_id: {
      type: DataTypes.CHAR(9),
      primaryKey: true,
    },
    cargo_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: CargoAdministrativo,
        key: 'cargo_id'
      }
    },
    departamento_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: Departamento,
        key: 'departamento_id'
      }
    },
    nivel_acceso_id: {
      type: DataTypes.SMALLINT,
      references: {
        model: NivelAcceso,
        key: 'nivel_acceso_id'
      }
    },
    fecha_vinculacion: {
      type: DataTypes.DATE,
    }
  },
  { tableName: "tbl_administrativos" }
);

Administrativo.belongsTo(Usuario, { foreignKey: "administrativo_id" });
Administrativo.belongsTo(CargoAdministrativo, { foreignKey: "cargo_id" });
Administrativo.belongsTo(Departamento, { foreignKey: "departamento_id" });
Administrativo.belongsTo(NivelAcceso, { foreignKey: "nivel_acceso_id" });