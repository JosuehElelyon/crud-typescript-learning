# ⚡ Início Rápido

## 🚀 Em 3 Comandos

```bash
yarn install    # Instala tudo
yarn migrate    # Cria banco de dados
yarn dev        # Roda o projeto! 🎉
```

Acesse: **http://localhost:5173**

---

## 📝 O Que Você Vai Ver

1. **Formulário** para adicionar usuários
2. **Tabela** com todos os usuários
3. **Botões** para editar e excluir
4. **Validações** em tempo real
5. **Feedback** visual (loading, erros, sucesso)

---

## 🎓 Para Aprender

Leia os arquivos nesta ordem:

### Backend (30min)
1. [`backend/src/models/User.ts`](backend/src/models/User.ts) - Tipos
2. [`backend/src/validators/userValidator.ts`](backend/src/validators/userValidator.ts) - Validações
3. [`backend/src/repositories/UserRepository.ts`](backend/src/repositories/UserRepository.ts) - Banco de dados
4. [`backend/src/controllers/UserController.ts`](backend/src/controllers/UserController.ts) - Lógica
5. [`backend/src/routes/userRoutes.ts`](backend/src/routes/userRoutes.ts) - Rotas
6. [`backend/src/server.ts`](backend/src/server.ts) - Servidor

### Frontend (30min)
1. [`frontend/src/types/User.ts`](frontend/src/types/User.ts) - Tipos
2. [`frontend/src/services/userService.ts`](frontend/src/services/userService.ts) - API
3. [`frontend/src/components/UserList.vue`](frontend/src/components/UserList.vue) - Componente principal
4. [`frontend/src/App.vue`](frontend/src/App.vue) - App
5. [`frontend/vite.config.ts`](frontend/vite.config.ts) - Config

---

## 🎯 Desafios Para Praticar

### Fácil
- ✅ Adicione campo "telefone" opcional
- ✅ Mude as cores do CSS
- ✅ Adicione mais emojis

### Médio
- 🔥 Adicione busca por nome
- 🔥 Implemente paginação
- 🔥 Adicione ordenação de colunas

### Difícil  
- 🚀 Adicione upload de foto do usuário
- 🚀 Implemente autenticação
- 🚀 Adicione testes unitários

---

## 🐛 Problemas Comuns

### Backend não inicia
```bash
# Verifique se a porta 3000 está livre
netstat -ano | findstr :3000

# Ou mude a porta em backend/src/server.ts
const PORT = 3001;
```

### Frontend não conecta
```bash
# Certifique-se que o backend está rodando
# Verifique o console do navegador (F12)
```

### Banco de dados vazio
```bash
# Execute novamente:
yarn migrate
```

---

## 📚 Recursos

- **README.md** - Documentação completa
- **GUIA-DE-ESTUDOS.md** - Aprenda cada conceito
- **Código comentado** - Leia os comentários nos arquivos

---

## 💬 Dúvidas?

1. Leia o [README.md](README.md)
2. Consulte o [GUIA-DE-ESTUDOS.md](GUIA-DE-ESTUDOS.md)
3. Veja os comentários no código
4. Pesquise na documentação oficial
5. Pergunte no Stack Overflow

---

**Boa codificação! 💻✨**
