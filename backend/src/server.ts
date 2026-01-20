import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Habilita CORS para o frontend
app.use(express.json());

// Rotas
app.use(userRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.json({
    message: 'API CRUD TypeScript - Projeto de Aprendizado',
    endpoints: [
      'GET /users',
      'GET /users/:id',
      'POST /users',
      'PUT /users/:id',
      'DELETE /users/:id'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});
