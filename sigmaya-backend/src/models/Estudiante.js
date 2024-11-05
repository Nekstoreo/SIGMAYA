import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { EstadoEstudiante } from "./EstadoEstudiante.js";
import { PeriodoAcademico } from "./PeriodoAcademico.js";
import { TipoAdmision } from "./TipoAdmision.js";
import { Usuario } from "./Usuario.js";

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
    type: DataTypes.INTEGER,
    references: {
      model: EstadoEstudiante,
      key: 'estado_id'
    }
  },
  condicion_especial: {
    type: DataTypes.STRING(100),
  },
  tipo_admision_id: {
    type: DataTypes.INTEGER,
    references: {
      model: TipoAdmision,
      key: 'tipo_admision_id'
    }
  },
  fecha_ingreso: {
    type: DataTypes.DATE,
  },
  cohorte_id: {
    type: DataTypes.INTEGER,
    references: {
      model: PeriodoAcademico,
      key: 'periodo_id'
    }
  }
}, { tableName: "tbl_estudiantes" });

Estudiante.belongsTo(Usuario, { foreignKey: 'estudiante_id', as: 'usuario' });
Estudiante.belongsTo(EstadoEstudiante, { foreignKey: 'estado_id', as: 'estadoEstudiante' });
Estudiante.belongsTo(TipoAdmision, { foreignKey: 'tipo_admision_id' });
Estudiante.belongsTo(PeriodoAcademico, { foreignKey: 'cohorte_id', as: 'periodoAcademico' });