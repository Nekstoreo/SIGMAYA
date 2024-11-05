import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

// Importar rutas
import administrativosRoutes from "./routes/AdministrativosRoutes.js";
import credencialesRoutes from "./routes/CredencialesRoutes.js";
import estructuraAcademicaRoutes from "./routes/EstructuraAcademicaRoutes.js";
import modalidadesTiposContratoRoutes from "./routes/ModalidadesTiposContratoRoutes.js";
import prerrequisitosDetallesCalificacionesRoutes from "./routes/PrerrequisitosDetallesCalificacionesRoutes.js";
import sedesLocalizacionRoutes from "./routes/SedesLocalizacionRoutes.js";
import usuariosRoutes from "./routes/UsuariosRoutes.js";
import estudiantesProfesoresRoutes from "./routes/EstudiantesProfesoresRoutes.js";
import authRoutes from "./routes/AuthRoutes.js";

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
app.use("/auth/update-password", authMiddleware(), authRoutes);
app.use("/api/administrativos", authMiddleware('Administrativo'), administrativosRoutes);
app.use("/api/credenciales", authMiddleware(), credencialesRoutes);
app.use("/api/estructura-academica", authMiddleware(['Profesor', 'Administrativo']), estructuraAcademicaRoutes);
app.use("/api/modalidades-tipos-contrato", authMiddleware('Administrativo'), modalidadesTiposContratoRoutes);
app.use("/api/prerrequisitos-detalles-calificaciones", authMiddleware(['Profesor', 'Administrativo']), prerrequisitosDetallesCalificacionesRoutes);
app.use("/api/sedes-localizacion", authMiddleware('Administrativo'), sedesLocalizacionRoutes);
app.use("/api/usuarios", authMiddleware('Administrativo'), usuariosRoutes);
app.use("/api/estudiantes-profesores", authMiddleware(['Profesor', 'Administrativo']), estudiantesProfesoresRoutes);

app.get("/", (req, res) => {
  res.send("SIGMAYA API funcionando");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});