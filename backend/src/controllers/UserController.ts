import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';
import { createUserSchema, updateUserSchema } from '../validators/userValidator';
import { ZodError } from 'zod';

class UserController {
  // GET /users - Lista todos os usuários
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserRepository.findAll();
      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }

  // GET /users/:id - Busca um usuário por ID
  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await UserRepository.findById(Number(id));

      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  }

  // POST /users - Cria um novo usuário
  async store(req: Request, res: Response): Promise<Response> {
    try {
      // Validação com Zod
      const validatedData = createUserSchema.parse(req.body);

      // Verificar se email já existe
      const existingUser = await UserRepository.findByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      const newUser = await UserRepository.create(validatedData);
      return res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: 'Dados inválidos',
          details: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }

  // PUT /users/:id - Atualiza um usuário
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      
      // Validação com Zod
      const validatedData = updateUserSchema.parse(req.body);

      // Se está atualizando email, verificar se já existe
      if (validatedData.email) {
        const existingUser = await UserRepository.findByEmail(validatedData.email);
        if (existingUser && existingUser.id !== Number(id)) {
          return res.status(400).json({ error: 'Email já cadastrado' });
        }
      }

      const updatedUser = await UserRepository.update(Number(id), validatedData);

      if (!updatedUser) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.json(updatedUser);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: 'Dados inválidos',
          details: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
  }

  // DELETE /users/:id - Deleta um usuário
  async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deleted = await UserRepository.delete(Number(id));

      if (!deleted) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
  }
}

export default new UserController();
