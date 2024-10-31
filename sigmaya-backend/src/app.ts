import express from 'express';
import userRoutes from './routes/userRoutes';
import connectToDatabase from './config/database';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conexión a la base de datos
connectToDatabase().then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Database connection error:', error);
});

// Rutas
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});