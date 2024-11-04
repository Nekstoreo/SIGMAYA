import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import { EstadoEstudiante } from "./EstadoEstudiante.js";
import { PeriodoAcademico } from "./PeriodoAcademico.js";
import { TipoAdmision } from "./TipoAdmision.js";
import { Usuario } from "./Usuario.js";

// tbl_estudiantes

export const Estudiante = sequelize.define("Estudiante", {
  estudiante_id: {
    type: DataTypes.CHAR(9),
    primaryKey: true,
    references: {
      model: Usuario,
      key: 'usuario_id'
    }
  },
  estado_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: EstadoEstudiante,
      key: 'estado_id'
    }
  },
  condicion_especial: {
    type: DataTypes.STRING,
  },
  tipo_admision_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: TipoAdmision,
      key: 'tipo_admision_id'
    }
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
  },
  cohorte_id: {
    type: DataTypes.SMALLINT,
    references: {
      model: PeriodoAcademico,
      key: 'periodo_id'
    }
  },
  promedio_acumulado: {
    type: DataTypes.DECIMAL(3, 2),
  }
}, { tableName: "tbl_estudiantes" });

Estudiante.belongsTo(Usuario, { foreignKey: 'estudiante_id' });
Estudiante.belongsTo(EstadoEstudiante, { foreignKey: 'estado_id' });
Estudiante.belongsTo(TipoAdmision, { foreignKey: 'tipo_admision_id' });
Estudiante.belongsTo(PeriodoAcademico, { foreignKey: 'cohorte_id' });