import axios from 'axios';
import type { User, CreateUserDTO, UpdateUserDTO } from '../types/User';

// Configuração base da API
const api = axios.create({
  baseURL: '/api', // Usa o proxy do Vite para evitar CORS
  headers: {
    'Content-Type': 'application/json'
  }
});

// Serviço de usuários com todos os métodos CRUD
export const userService = {
  // GET /users - Lista todos os usuários
  async getAll(): Promise<User[]> {
    const response = await api.get<User[]>('/users');
    return response.data;
  },

  // GET /users/:id - Busca um usuário por ID
  async getById(id: number): Promise<User> {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  },

  // POST /users - Cria um novo usuário
  async create(userData: CreateUserDTO): Promise<User> {
    const response = await api.post<User>('/users', userData);
    return response.data;
  },

  // PUT /users/:id - Atualiza um usuário
  async update(id: number, userData: UpdateUserDTO): Promise<User> {
    const response = await api.put<User>(`/users/${id}`, userData);
    return response.data;
  },

  // DELETE /users/:id - Deleta um usuário
  async delete(id: number): Promise<void> {
    await api.delete(`/users/${id}`);
  }
};
