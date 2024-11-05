import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

// Importar rutas
import authRoutes from "./routes/AuthRoutes.js";
import estudianteRoutes from "./routes/EstudianteRoutes.js"; // Importar las rutas de estudiante

// Configurar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use("/auth", authRoutes);
app.use("/estudiante", estudianteRoutes); // Agregar las rutas de estudiante

app.get("/", (req, res) => {
  res.send("SIGMAYA API funcionando");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});