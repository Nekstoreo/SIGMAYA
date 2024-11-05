import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import { TipoDocumento } from "./TipoDocumento.js";
import { Ciudad } from "./Ciudad.js";
import { IdentidadGenero } from "./IdentidadGenero.js";
import { GrupoEtnico } from "./GrupoEtnico.js";
import { EstadoCivil } from "./EstadoCivil.js";
import { Estado } from "./Estado.js";
import { Rol } from "./Rol.js";

export const Usuario = sequelize.define(
  "Usuario",
  {
    usuario_id: {
      type: DataTypes.CHAR(9),
      primaryKey: true,
    },
    tipo_documento: {
      type: DataTypes.INTEGER,
      references: {
        model: TipoDocumento,
        key: "tipo_documento_id",
      },
    },
    numero_documento: {
      type: DataTypes.STRING(20),
    },
    nombres: {
      type: DataTypes.STRING(100),
    },
    apellidos: {
      type: DataTypes.STRING(100),
    },
    email_institucional: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    email_personal: {
      type: DataTypes.STRING(100),
    },
    telefono: {
      type: DataTypes.STRING(20),
    },
    telefono_emergencia: {
      type: DataTypes.STRING(20),
    },
    direccion: {
      type: DataTypes.STRING(200),
    },
    ciudad_origen: {
      type: DataTypes.INTEGER,
      references: {
        model: Ciudad,
        key: "ciudad_id",
      },
    },
    genero: {
      type: DataTypes.INTEGER,
      references: {
        model: IdentidadGenero,
        key: "identidad_id",
      },
    },
    etnia: {
      type: DataTypes.INTEGER,
      references: {
        model: GrupoEtnico,
        key: "etnia_id",
      },
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
    },
    estado_civil: {
      type: DataTypes.INTEGER,
      references: {
        model: EstadoCivil,
        key: "estado_civil_id",
      },
    },
    estado: {
      type: DataTypes.INTEGER,
      references: {
        model: Estado,
        key: "estado_id",
      },
    },
    fecha_creacion: {
      type: DataTypes.DATE,
    },
    foto_perfil: {
      type: DataTypes.STRING,
    },
    rol_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Rol,
        key: "rol_id",
      },
    },
  },
  { tableName: "tbl_usuarios" }
);

Usuario.belongsTo(TipoDocumento, { foreignKey: "tipo_documento" });
Usuario.belongsTo(Ciudad, { foreignKey: "ciudad_origen" });
Usuario.belongsTo(IdentidadGenero, { foreignKey: "genero" });
Usuario.belongsTo(GrupoEtnico, { foreignKey: "etnia" });
Usuario.belongsTo(EstadoCivil, { foreignKey: "estado_civil" });
Usuario.belongsTo(Estado, { foreignKey: "estado" });
Usuario.belongsTo(Rol, { foreignKey: "rol_id" });
