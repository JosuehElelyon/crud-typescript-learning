# 🎓 CRUD TypeScript - Projeto de Aprendizado

Um projeto CRUD completo para aprender TypeScript, desenvolvendo um sistema de gerenciamento de usuários com validação e banco de dados.

## 🚀 Tecnologias

- **TypeScript** - Tipagem estática
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **SQLite** - Banco de dados
- **Zod** - Validação de dados
- **ts-node-dev** - Desenvolvimento com hot reload

## 📦 Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/JosuehElelyon/crud-typescript-learning.git
cd crud-typescript-learning

# 2. Instalar dependências
npm install

# 3. Criar o banco de dados
npm run migrate

# 4. Executar em modo de desenvolvimento
npm run dev
```

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento com hot reload
npm run build    # Compila TypeScript para JavaScript
npm start        # Executa versão compilada
npm run migrate  # Cria as tabelas no banco de dados
```

## 🌐 Endpoints da API

### Listar todos os usuários
```http
GET /users
```

### Buscar usuário por ID
```http
GET /users/:id
```

### Criar novo usuário
```http
POST /users
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 25
}
```

### Atualizar usuário
```http
PUT /users/:id
Content-Type: application/json

{
  "name": "João Pedro Silva",
  "age": 26
}
```

### Deletar usuário
```http
DELETE /users/:id
```

## ✅ Validações Implementadas

- **Nome**: 3-100 caracteres
- **Email**: Formato válido e único
- **Idade**: Número inteiro entre 1-150

### Exemplo de Erro de Validação

```json
{
  "error": "Dados inválidos",
  "details": [
    {
      "field": "email",
      "message": "Email inválido"
    },
    {
      "field": "age",
      "message": "Idade deve ser maior que 0"
    }
  ]
}
```

## 📚 Conceitos TypeScript Aprendidos

- ✅ **Interfaces e Tipos** - Definição de estruturas de dados
- ✅ **Classes** - Programação orientada a objetos
- ✅ **Tipagem Forte** - Type safety em todo código
- ✅ **Async/Await** - Programação assíncrona
- ✅ **Promises** - Manipulação de operações assíncronas
- ✅ **Módulos** - Import/Export ES6
- ✅ **Generics** - Funções genéricas reutilizáveis
- ✅ **Error Handling** - Tratamento de erros
- ✅ **Validação com Zod** - Schema validation
- ✅ **Banco de Dados** - Integração com SQLite

## 🗂️ Estrutura do Projeto

```
crud-typescript/
├── src/
│   ├── controllers/      # Controladores (lógica de requisição/resposta)
│   ├── database/         # Configuração e migrations do BD
│   ├── models/           # Interfaces e tipos
│   ├── repositories/     # Camada de acesso a dados
│   ├── routes/           # Definição de rotas
│   ├── validators/       # Schemas de validação
│   └── server.ts         # Arquivo principal
├── dist/                 # Código compilado (gerado)
├── database.sqlite       # Banco de dados (gerado)
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Próximos Passos para Aprender Mais

- [ ] Adicionar autenticação JWT
- [ ] Implementar testes unitários
- [ ] Adicionar paginação nas listagens
- [ ] Criar relacionamentos (1:N, N:N)
- [ ] Implementar logs de auditoria
- [ ] Adicionar documentação Swagger
- [ ] Migrar para PostgreSQL
- [ ] Implementar cache com Redis

## 👥 Autores

Desenvolvido por **JosuehElelyon** e amigos para aprendizado de TypeScript

## 📝 Licença

MIT
