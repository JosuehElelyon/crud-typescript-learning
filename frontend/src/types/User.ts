// Definição de tipos para o usuário
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  created_at: string;
}

export interface CreateUserDTO {
  name: string;
  email: string;
  age: number;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  age?: number;
}
