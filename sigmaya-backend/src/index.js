import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { setupAssociations } from "./models/associations.js";

// Importar rutas
import authRoutes from "./routes/AuthRoutes.js";
import estudianteRoutes from "./routes/EstudianteRoutes.js";
import profesorRoutes from "./routes/ProfesorRoutes.js";
// Configurar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

setupAssociations();

// Rutas
app.use("/auth", authRoutes);
app.use("/estudiante", estudianteRoutes); // Agregar las rutas de estudiante
app.use("/profesor", profesorRoutes); // Agregar las rutas de profesor

app.get("/", (req, res) => {
  res.send("SIGMAYA API funcionando");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});