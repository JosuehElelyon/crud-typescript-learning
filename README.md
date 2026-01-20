# 🎓 CRUD Full-Stack TypeScript - Projeto de Aprendizado

Um projeto **completo e didático** para aprender desenvolvimento full-stack moderno, com TypeScript, Vue 3, Express e muito mais!

## 🚀 Tecnologias

### Backend
- **TypeScript** - Tipagem estática para JavaScript
- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **SQLite** - Banco de dados relacional leve
- **Zod** - Validação de schemas com TypeScript
- **CORS** - Compartilhamento de recursos entre origens

### Frontend
- **Vue 3** - Framework JavaScript progressivo
- **Vite** - Build tool ultrarrápida
- **TypeScript** - Type safety no frontend
- **Axios** - Cliente HTTP
- **Composition API** - API moderna do Vue 3

### Gerenciamento
- **Yarn Workspaces** - Monorepo com múltiplos pacotes
- **ts-node-dev** - Hot reload para desenvolvimento

## 📁 Estrutura do Projeto

```
crud-fullstack-learning/
├── backend/                    # API REST com Express + TypeScript
│   ├── src/
│   │   ├── controllers/        # Lógica de requisição/resposta
│   │   │   └── UserController.ts
│   │   ├── database/           # Configuração do banco de dados
│   │   │   ├── connection.ts   # Conexão SQLite com Promises
│   │   │   └── migrate.ts      # Script de migração
│   │   ├── models/             # Interfaces TypeScript
│   │   │   └── User.ts
│   │   ├── repositories/       # Camada de acesso a dados
│   │   │   └── UserRepository.ts
│   │   ├── routes/             # Rotas da API
│   │   │   └── userRoutes.ts
│   │   ├── validators/         # Validação com Zod
│   │   │   └── userValidator.ts
│   │   └── server.ts           # Servidor Express
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                   # Interface Vue.js + Vite
│   ├── public/                 # Arquivos estáticos
│   ├── src/
│   │   ├── components/         # Componentes Vue
│   │   │   └── UserList.vue    # CRUD completo de usuários
│   │   ├── services/           # Serviços de API
│   │   │   └── userService.ts
│   │   ├── types/              # Tipos TypeScript
│   │   │   └── User.ts
│   │   ├── App.vue             # Componente raiz
│   │   ├── main.ts             # Entry point
│   │   └── style.css           # Estilos globais
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts          # Configuração Vite + Proxy
│
├── package.json                # Yarn Workspaces root
└── README.md
```

## 🔧 Instalação

### Pré-requisitos
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Yarn** 1.22+ ([Instalação](https://classic.yarnpkg.com/en/docs/install))

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/JosuehElelyon/crud-typescript-learning.git
cd crud-typescript-learning

# 2. Instale TODAS as dependências (backend + frontend)
yarn install

# 3. Crie o banco de dados
yarn migrate

# 4. Inicie ambos os servidores (backend + frontend)
yarn dev
```

O backend rodará em `http://localhost:3000` e o frontend em `http://localhost:5173`.

## 📝 Scripts Disponíveis

### Comandos Globais (raiz do projeto)
```bash
yarn install          # Instala dependências de backend E frontend
yarn dev              # Executa backend + frontend simultaneamente
yarn dev:backend      # Executa apenas o backend
yarn dev:frontend     # Executa apenas o frontend
yarn build            # Compila backend e frontend para produção
yarn migrate          # Cria as tabelas no banco de dados
```

### Comandos do Backend
```bash
cd backend
yarn dev              # Modo desenvolvimento com hot reload
yarn build            # Compila TypeScript → JavaScript
yarn start            # Executa versão compilada
yarn migrate          # Cria tabelas do banco
```

### Comandos do Frontend
```bash
cd frontend
yarn dev              # Servidor de desenvolvimento Vite
yarn build            # Build otimizado para produção
yarn preview          # Preview do build de produção
```

## 🌐 API Endpoints

### Base URL: `http://localhost:3000`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/users` | Lista todos os usuários |
| `GET` | `/users/:id` | Busca usuário por ID |
| `POST` | `/users` | Cria novo usuário |
| `PUT` | `/users/:id` | Atualiza usuário |
| `DELETE` | `/users/:id` | Deleta usuário |

### Exemplos de Requisições

#### Criar Usuário
```bash
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "age": 25
}
```

#### Atualizar Usuário
```bash
PUT http://localhost:3000/users/1
Content-Type: application/json

{
  "name": "João Pedro Silva",
  "age": 26
}
```

## ✅ Validações Implementadas

### Backend (Zod)
- **Nome**: 3-100 caracteres
- **Email**: Formato válido + único no banco
- **Idade**: Número inteiro entre 1-150

### Frontend (HTML5 + Vue)
- Validação em tempo real
- Mensagens de erro amigáveis
- Feedback visual imediato

## 🎨 Interface do Usuário

- ✅ **Design moderno e responsivo**
- ✅ **Formulário intuitivo** para criar/editar
- ✅ **Tabela elegante** com todas as operações CRUD
- ✅ **Feedback visual** (loading, success, error)
- ✅ **Confirmação** antes de deletar
- ✅ **Mobile-friendly**

## 🧑‍💻 Conceitos de Programação Aprendidos

### TypeScript
- ✅ Interfaces e Tipos
- ✅ Generics
- ✅ Type Safety em APIs
- ✅ Inferência de tipos
- ✅ Union Types e Type Guards

### Backend
- ✅ API REST com Express
- ✅ Arquitetura em camadas (MVC)
- ✅ Repository Pattern
- ✅ Validação com Zod
- ✅ Tratamento de erros
- ✅ CORS e middlewares
- ✅ Promises e Async/Await
- ✅ SQLite com TypeScript

### Frontend
- ✅ Vue 3 Composition API
- ✅ Refs e Reactive
- ✅ Lifecycle Hooks
- ✅ Event Handling
- ✅ Two-way binding (v-model)
- ✅ Conditional Rendering
- ✅ List Rendering
- ✅ Axios para HTTP requests
- ✅ TypeScript com Vue
- ✅ Vite e build tools modernas

### Arquitetura
- ✅ Monorepo com Yarn Workspaces
- ✅ Separação Frontend/Backend
- ✅ Proxy de desenvolvimento
- ✅ Estrutura de pastas escalável
- ✅ Código limpo e organizado

## 🔄 Fluxo de Dados

```
[Frontend Vue] ←→ [Axios Service] ←→ [Express API] ←→ [Repository] ←→ [SQLite DB]
      ↓                                      ↓
  [Components]                        [Validators]
```

## 🎯 Próximos Passos para Evolução

- [ ] **Autenticação JWT** - Login e proteção de rotas
- [ ] **Testes Unitários** - Jest/Vitest
- [ ] **Docker** - Containerização
- [ ] **Paginação** - Listar muitos registros
- [ ] **Busca e Filtros** - Pesquisar usuários
- [ ] **Upload de Imagens** - Avatar do usuário
- [ ] **Estado Global** - Pinia/Vuex
- [ ] **Relacionamentos** - Posts do usuário, comentários
- [ ] **PostgreSQL** - Migrar para banco robusto
- [ ] **Deploy** - Vercel (frontend) + Railway (backend)
- [ ] **CI/CD** - GitHub Actions
- [ ] **Documentação API** - Swagger/OpenAPI

## 🐛 Troubleshooting

### Erro: "Cannot GET /api/users"
- Verifique se o backend está rodando (`yarn dev:backend`)
- Confirme a porta 3000 está livre

### Erro: "CORS policy"
- O backend já inclui CORS configurado
- Certifique-se de que o frontend usa `/api` (proxy do Vite)

### Erro: "table users does not exist"
- Execute `yarn migrate` para criar as tabelas

### Dependências não instaladas
- Delete `node_modules` e `yarn.lock`
- Execute `yarn install` novamente

## 📚 Recursos de Aprendizado

- [Vue 3 Docs](https://vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express Guide](https://expressjs.com/en/guide/routing.html)
- [Vite Guide](https://vitejs.dev/guide/)
- [Zod Documentation](https://zod.dev/)

## 👥 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
1. Fazer um fork do projeto
2. Criar uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📝 Licença

MIT - Sinta-se livre para usar este projeto para aprendizado!

## 👨‍💻 Autor

**JosuehElelyon** e amigos

---

⭐ **Se este projeto te ajudou a aprender, deixe uma estrela no GitHub!**
