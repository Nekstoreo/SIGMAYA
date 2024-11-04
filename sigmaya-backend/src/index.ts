import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database";

// Importar rutas
import administrativosRoutes from "./routes/AdministrativosRoutes";
import credencialesRoutes from "./routes/CredencialesRoutes";
import estructuraAcademicaRoutes from "./routes/EstructuraAcademicaRoutes";
import modalidadesTiposContratoRoutes from "./routes/ModalidadesTiposContratoRoutes";
import prerrequisitosDetallesCalificacionesRoutes from "./routes/PrerrequisitosDetallesCalificacionesRoutes";
import sedesLocalizacionRoutes from "./routes/SedesLocalizacionRoutes";
import usuariosRoutes from "./routes/UsuariosRoutes";

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
app.use("/api", modalidadesTiposContratoRoutes);
app.use("/api", prerrequisitosDetallesCalificacionesRoutes);
app.use("/api", sedesLocalizacionRoutes);
app.use("/api", usuariosRoutes);

app.get("/", (req, res) => {
  res.send("SIGMAYA API funcionando");
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});