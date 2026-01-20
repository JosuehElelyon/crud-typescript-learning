# 📚 Guia de Estudos - CRUD Full-Stack TypeScript

## 🎯 Como Usar Este Projeto Para Aprender

Este guia mostra o que estudar em cada arquivo e conceito aplicado.

---

## 📂 Parte 1: Backend (API REST)

### 1. `backend/src/models/User.ts`
**Conceito:** Interfaces TypeScript

```typescript
export interface User {
  id: number;
  name: string;
  // ...
}
```

**O que aprender:**
- ✅ **Interfaces** definem a estrutura de objetos
- ✅ **DTO (Data Transfer Object)** separa dados de entrada/saída
- ✅ **Tipos opcionais** com `?` (UpdateUserDTO)
- ✅ **Type safety** garante que os dados têm o formato correto

**Exercício:** Adicione um campo `phone?: string` opcional

---

### 2. `backend/src/database/connection.ts`
**Conceito:** Promises e Async/Await

```typescript
export const runQuery = (query: string, params: any[] = []): Promise<void> => {
  return new Promise((resolve, reject) => {
    // ...
  });
};
```

**O que aprender:**
- ✅ **Callbacks** para **Promises** (modernização de código)
- ✅ **Generic Types** `<T>` para retornos tipados
- ✅ **Promise wrapper** para APIs antigas
- ✅ **Error handling** com reject/resolve

**Experimente:** Adicione logs para ver queries executadas

---

### 3. `backend/src/validators/userValidator.ts`
**Conceito:** Validação com Zod

```typescript
export const createUserSchema = z.object({
  name: z.string().min(3).max(100),
  // ...
});
```

**O que aprender:**
- ✅ **Schema validation** antes de salvar no banco
- ✅ **Mensagens customizadas** de erro
- ✅ **Type inference** com `z.infer<>`
- ✅ **Schemas reutilizáveis**

**Exercício:** Adicione validação de CPF brasileiro

---

### 4. `backend/src/repositories/UserRepository.ts`
**Conceito:** Repository Pattern

```typescript
class UserRepository {
  async create(userData: CreateUserDTO): Promise<User> {
    // Lógica de acesso ao banco
  }
}
```

**O que aprender:**
- ✅ **Separation of Concerns** (responsabilidade única)
- ✅ **Repository Pattern** separa lógica de dados
- ✅ **CRUD operations** (Create, Read, Update, Delete)
- ✅ **Singleton pattern** com `export default new UserRepository()`

**Desafio:** Adicione método `findByName(name: string)`

---

### 5. `backend/src/controllers/UserController.ts`
**Conceito:** Controllers (MVC)

```typescript
async store(req: Request, res: Response): Promise<Response> {
  const validatedData = createUserSchema.parse(req.body);
  // ...
}
```

**O que aprender:**
- ✅ **Request/Response** do Express
- ✅ **Status HTTP** (200, 201, 400, 404, 500)
- ✅ **Try/Catch** para error handling
- ✅ **ZodError** tratamento específico
- ✅ **Async/Await** em todas as operações

**Exercício:** Adicione endpoint para busca por email

---

### 6. `backend/src/routes/userRoutes.ts`
**Conceito:** Roteamento REST

```typescript
userRoutes.get('/users', UserController.index);
userRoutes.post('/users', UserController.store);
```

**O que aprender:**
- ✅ **REST conventions** (GET, POST, PUT, DELETE)
- ✅ **Route parameters** `:id`
- ✅ **Express Router**
- ✅ **Separation of routes**

---

### 7. `backend/src/server.ts`
**Conceito:** Express Server

```typescript
app.use(cors());
app.use(express.json());
app.use(userRoutes);
```

**O que aprender:**
- ✅ **Middlewares** (cors, json parser)
- ✅ **Order matters** na ordem dos use()
- ✅ **Express app** configuration
- ✅ **Server listening**

**Desafio:** Adicione middleware de logging

---

## 🎨 Parte 2: Frontend (Vue.js)

### 8. `frontend/src/types/User.ts`
**Conceito:** TypeScript no Frontend

**O que aprender:**
- ✅ **Compartilhamento de tipos** entre front e back
- ✅ **Type consistency** garante compatibilidade
- ✅ **Date como string** (JSON serialization)

---

### 9. `frontend/src/services/userService.ts`
**Conceito:** API Service Layer

```typescript
export const userService = {
  async getAll(): Promise<User[]> {
    const response = await api.get<User[]>('/users');
    return response.data;
  }
};
```

**O que aprender:**
- ✅ **Axios** para requisições HTTP
- ✅ **Async/Await** no frontend
- ✅ **TypeScript generics** em APIs
- ✅ **Service pattern** separa lógica de API
- ✅ **Object pattern** para agrupar métodos

**Exercício:** Adicione interceptor para logs

---

### 10. `frontend/src/components/UserList.vue`
**Conceito:** Vue 3 Composition API

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue';

const users = ref<User[]>([]);
const loading = ref(false);

onMounted(async () => {
  await loadUsers();
});
</script>
```

**O que aprender:**
- ✅ **Composition API** (setup script)
- ✅ **Reactive refs** com `ref()`
- ✅ **Lifecycle hooks** (onMounted)
- ✅ **Two-way binding** com `v-model`
- ✅ **Event handling** com `@click`, `@submit`
- ✅ **Conditional rendering** com `v-if`, `v-else`
- ✅ **List rendering** com `v-for`
- ✅ **TypeScript** com Vue (tipos nos refs)

**Template:**
```vue
<template>
  <div v-if="loading">Carregando...</div>
  <div v-else-if="users.length > 0">
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
  <div v-else>Nenhum usuário</div>
</template>
```

**O que aprender:**
- ✅ **Diretivas Vue** (v-if, v-for, v-model)
- ✅ **Attribute binding** com `:`
- ✅ **Event binding** com `@`
- ✅ **Key prop** em listas

---

### 11. `frontend/src/App.vue`
**Conceito:** Componente Raiz

**O que aprender:**
- ✅ **Component composition** (usar outros componentes)
- ✅ **Import/Export** de componentes
- ✅ **SFC (Single File Component)**

---

### 12. `frontend/vite.config.ts`
**Conceito:** Proxy de Desenvolvimento

```typescript
proxy: {
  '/api': {
    target: 'http://localhost:3000',
    changeOrigin: true
  }
}
```

**O que aprender:**
- ✅ **Proxy** evita problemas de CORS
- ✅ **Dev server** configuration
- ✅ **Path rewrite** para APIs

---

## 🏗️ Parte 3: Arquitetura

### 13. Yarn Workspaces (`package.json` raiz)

```json
{
  "workspaces": ["backend", "frontend"],
  "scripts": {
    "dev": "concurrently \"yarn workspace backend dev\" \"yarn workspace frontend dev\""
  }
}
```

**O que aprender:**
- ✅ **Monorepo** gerencia múltiplos pacotes
- ✅ **Workspaces** compartilham node_modules
- ✅ **Concurrently** roda múltiplos comandos
- ✅ **yarn workspace** executa em subpacote

---

## 🎓 Fluxo Completo de Uma Requisição

```
1. USUÁRIO CLICA "Adicionar" no formulário Vue
   └─> UserList.vue → handleSubmit()

2. FRONTEND valida dados do formulário
   └─> HTML5 validation + v-model

3. CHAMA API através do service
   └─> userService.create(formData)
   └─> Axios POST /api/users

4. PROXY do Vite redireciona
   └─> http://localhost:5173/api/users
   └─> → http://localhost:3000/users

5. EXPRESS recebe a requisição
   └─> server.ts → userRoutes.ts
   └─> POST /users → UserController.store()

6. CONTROLLER valida com Zod
   └─> createUserSchema.parse(req.body)

7. REPOSITORY salva no banco
   └─> UserRepository.create()
   └─> runQuery('INSERT INTO users...')

8. SQLITE armazena os dados
   └─> database.sqlite

9. RESPOSTA retorna ao frontend
   └─> Controller → Express → Axios → Vue

10. VUE atualiza a interface
    └─> loadUsers() → users.value = [...]
    └─> Template re-renderiza automaticamente
```

---

## 💡 Conceitos Avançados Para Estudar

### 1. Type Safety Full-Stack
- Mesmas interfaces em frontend e backend
- Evita erros de integração
- Autocomplete no VS Code

### 2. Error Handling
- Try/catch em todos os níveis
- Mensagens amigáveis ao usuário
- Logs para debugging

### 3. Reactive Programming
- Vue detecta mudanças em `ref()`
- Atualização automática da UI
- Performance otimizada

### 4. Async/Await Everywhere
- Código síncrono visualmente
- Melhor error handling
- Easier debugging

---

## 🚀 Próximos Estudos Recomendados

### Nível Intermediário
1. **Autenticação JWT** - Login e proteção de rotas
2. **Middleware customizado** - Validação, logging
3. **Composables Vue** - Lógica reutilizável
4. **Testes** - Jest/Vitest para front e back
5. **Docker** - Containerização

### Nível Avançado
1. **PostgreSQL** - Banco de dados robusto
2. **Prisma ORM** - Type-safe database access
3. **GraphQL** - Alternativa ao REST
4. **WebSockets** - Real-time updates
5. **CI/CD** - Deploy automatizado

---

## 📖 Recursos Adicionais

### Documentação Oficial
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vue 3 Docs](https://vuejs.org/)
- [Express.js Guide](https://expressjs.com/)
- [Vite Guide](https://vitejs.dev/)

### Tutoriais Recomendados
- Vue Mastery (vue3)
- Net Ninja (TypeScript)
- Traversy Media (Full Stack)

### Comunidades
- Discord Vue.js
- Stack Overflow
- GitHub Discussions

---

## 🎯 Checklist de Aprendizado

- [ ] Entendi interfaces TypeScript
- [ ] Sei usar Promises e Async/Await
- [ ] Compreendo o Repository Pattern
- [ ] Sei validar dados com Zod
- [ ] Entendo CRUD operations
- [ ] Sei usar Vue Composition API
- [ ] Compreendo reactive refs
- [ ] Sei fazer requisições HTTP com Axios
- [ ] Entendo o fluxo completo da aplicação
- [ ] Consigo adicionar novas features

---

**Boa sorte nos estudos! 🚀**
