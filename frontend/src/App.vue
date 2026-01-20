<template>
  <div class="container">
    <!-- Cabeçalho -->
    <header class="header">
      <h1>🎓 CRUD Full-Stack TypeScript</h1>
      <p>Projeto de Aprendizado: Vue 3 + Vite + TypeScript + Express</p>
    </header>

    <!-- Componente principal -->
    <UserList />

    <!-- Rodapé -->
    <footer style="margin-top: 40px; text-align: center; color: #666; padding-top: 20px; border-top: 2px solid #f0f0f0;">
      <p>
        <strong>Tecnologias:</strong> Vue 3 • Vite • TypeScript • Express • SQLite • Zod<br>
        <strong>Gerenciador:</strong> Yarn Workspaces<br>
        <strong>Autor:</strong> JosuehElelyon | 
        <a href="https://github.com/JosuehElelyon/crud-typescript-learning" target="_blank" style="color: #667eea;">
          GitHub
        </a>
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import UserList from './components/UserList.vue';
</script>
