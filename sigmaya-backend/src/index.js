import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

// Importar rutas
import administrativosRoutes from "./routes/AdministrativosRoutes.js";
import credencialesRoutes from "./routes/CredencialesRoutes.js";
import estructuraAcademicaRoutes from "./routes/EstructuraAcademicaRoutes.js";
import modalidadesTiposContratoRoutes from "./routes/ModalidadesTiposContratoRoutes.js";
import prerrequisitosDetallesCalificacionesRoutes from "./routes/PrerrequisitosDetallesCalificacionesRoutes.js";
import sedesLocalizacionRoutes from "./routes/SedesLocalizacionRoutes.js";
import usuariosRouter from "./routes/UsuariosRoutes.js";
import estudiantesProfesoresRoutes from "./routes/EstudiantesProfesoresRoutes.js";

// Configurar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Rutas
app.use("/api", administrativosRoutes);
app.use("/api", credencialesRoutes);
app.use("/api", estructuraAcademicaRoutes);
app.use("/api", estudiantesProfesoresRoutes);
app.use("/api", modalidadesTiposContratoRoutes);
app.use("/api", prerrequisitosDetallesCalificacionesRoutes);
app.use("/api", sedesLocalizacionRoutes);
app.use("/api", usuariosRouter);


app.get("/", (req, res) => {
  res.send("SIGMAYA API funcionando");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});