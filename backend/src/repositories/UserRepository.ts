import { User, CreateUserDTO, UpdateUserDTO } from '../models/User';
import { runQuery, getQuery, allQuery } from '../database/connection';

class UserRepository {
  // CREATE - Criar um novo usuário
  async create(userData: CreateUserDTO): Promise<User> {
    const { name, email, age } = userData;
    
    await runQuery(
      'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
      [name, email, age]
    );

    const user = await getQuery<User>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (!user) {
      throw new Error('Erro ao criar usuário');
    }

    return user;
  }

  // READ - Buscar todos os usuários
  async findAll(): Promise<User[]> {
    return await allQuery<User>('SELECT * FROM users ORDER BY created_at DESC');
  }

  // READ - Buscar usuário por ID
  async findById(id: number): Promise<User | undefined> {
    return await getQuery<User>('SELECT * FROM users WHERE id = ?', [id]);
  }

  // READ - Buscar usuário por email
  async findByEmail(email: string): Promise<User | undefined> {
    return await getQuery<User>('SELECT * FROM users WHERE email = ?', [email]);
  }

  // UPDATE - Atualizar usuário
  async update(id: number, userData: UpdateUserDTO): Promise<User | undefined> {
    const user = await this.findById(id);
    if (!user) return undefined;

    const updates: string[] = [];
    const values: any[] = [];

    if (userData.name !== undefined) {
      updates.push('name = ?');
      values.push(userData.name);
    }
    if (userData.email !== undefined) {
      updates.push('email = ?');
      values.push(userData.email);
    }
    if (userData.age !== undefined) {
      updates.push('age = ?');
      values.push(userData.age);
    }

    if (updates.length === 0) return user;

    values.push(id);
    await runQuery(
      `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    return await this.findById(id);
  }

  // DELETE - Deletar usuário
  async delete(id: number): Promise<boolean> {
    const user = await this.findById(id);
    if (!user) return false;

    await runQuery('DELETE FROM users WHERE id = ?', [id]);
    return true;
  }
}

export default new UserRepository();
