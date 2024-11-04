import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    logging: false, // Puedes activar esto en desarrollo para ver los logs de consultas SQL
    define: {
      timestamps: false, // Desactiva los timestamps para todas las tablas
    },
  }
);

// Inicializa la conexión
export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar con PostgreSQL:", error);
    process.exit(1);
  }
};

export default sequelize;
