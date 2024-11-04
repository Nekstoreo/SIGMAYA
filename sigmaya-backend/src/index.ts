import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";

// Configurar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("SIGMAYA API funcionando");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
