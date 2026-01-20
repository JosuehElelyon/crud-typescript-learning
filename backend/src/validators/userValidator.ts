import { z } from 'zod';

// Schema de validação para criar usuário
export const createUserSchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string()
    .email('Email inválido')
    .toLowerCase(),
  age: z.number()
    .int('Idade deve ser um número inteiro')
    .min(1, 'Idade deve ser maior que 0')
    .max(150, 'Idade deve ser menor que 150')
});

// Schema de validação para atualizar usuário
export const updateUserSchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .optional(),
  email: z.string()
    .email('Email inválido')
    .toLowerCase()
    .optional(),
  age: z.number()
    .int('Idade deve ser um número inteiro')
    .min(1, 'Idade deve ser maior que 0')
    .max(150, 'Idade deve ser menor que 150')
    .optional()
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
