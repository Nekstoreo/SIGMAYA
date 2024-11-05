import { DataTypes } from "sequelize";

export const Rol = sequelize.define(
  "Rol",
  {
    rol_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
    },
    descripcion: {
      type: DataTypes.STRING(200),
    },
  },
  {
    tableName: "tbl_roles_usuario",
  }
);
