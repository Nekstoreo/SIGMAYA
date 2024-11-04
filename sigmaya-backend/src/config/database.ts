import { DataSource } from "typeorm";
import dotenv from "dotenv";

// Cargar las variables de entorno
dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,         // Solo para desarrollo, sincroniza la base de datos con los modelos
  logging: false,            // Puedes activar esto en desarrollo para ver los logs de consultas SQL
  entities: ["src/models/**/*.ts"],  // Ruta a los modelos
  migrations: ["src/migrations/**/*.ts"], // Ruta a las migraciones (si usas)
  subscribers: ["src/subscribers/**/*.ts"]
});

// Inicializa la conexión
export const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a PostgreSQL establecida correctamente.");
  } catch (error) {
    console.error("Error al conectar con PostgreSQL:", error);
    process.exit(1);
  }
};

export default AppDataSource;
