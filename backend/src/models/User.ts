export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  created_at: Date;
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
