<template>
  <div class="user-list">
    <!-- Formulário de Criação/Edição -->
    <div class="form-section">
      <h2>{{ isEditing ? '✏️ Editar Usuário' : '➕ Novo Usuário' }}</h2>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nome:</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="Digite o nome (mín. 3 caracteres)"
            required
            minlength="3"
            maxlength="100"
          />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Digite o email"
            required
          />
        </div>

        <div class="form-group">
          <label for="age">Idade:</label>
          <input
            id="age"
            v-model.number="formData.age"
            type="number"
            placeholder="Digite a idade (1-150)"
            required
            min="1"
            max="150"
          />
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary" :disabled="loading">
            {{ isEditing ? '💾 Salvar Alterações' : '➕ Adicionar Usuário' }}
          </button>
          <button
            v-if="isEditing"
            type="button"
            class="btn btn-secondary"
            @click="cancelEdit"
          >
            ❌ Cancelar
          </button>
        </div>
      </form>
    </div>

    <!-- Mensagens de Erro/Sucesso -->
    <div v-if="errorMessage" class="error-message">
      ⚠️ {{ errorMessage }}
    </div>

    <div v-if="successMessage" class="success-message">
      ✅ {{ successMessage }}
    </div>

    <!-- Lista de Usuários -->
    <div class="users-section">
      <h2>👥 Usuários Cadastrados ({{ users.length }})</h2>

      <!-- Loading -->
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Carregando...</p>
      </div>

      <!-- Tabela de usuários -->
      <div v-else-if="users.length > 0" class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Idade</th>
              <th>Data de Criação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.age }}</td>
              <td>{{ formatDate(user.created_at) }}</td>
              <td>
                <div class="actions">
                  <button
                    class="btn btn-warning"
                    @click="editUser(user)"
                    :disabled="loading"
                  >
                    ✏️ Editar
                  </button>
                  <button
                    class="btn btn-danger"
                    @click="deleteUser(user.id)"
                    :disabled="loading"
                  >
                    🗑️ Excluir
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Estado vazio -->
      <div v-else class="empty-state">
        <div class="empty-state-icon">📭</div>
        <h3>Nenhum usuário cadastrado</h3>
        <p>Adicione o primeiro usuário usando o formulário acima!</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { userService } from '../services/userService';
import type { User, CreateUserDTO, UpdateUserDTO } from '../types/User';

// Estado do componente
const users = ref<User[]>([]);
const loading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
const isEditing = ref(false);
const editingUserId = ref<number | null>(null);

// Dados do formulário
const formData = ref<CreateUserDTO>({
  name: '',
  email: '',
  age: 0
});

// Carregar usuários ao montar o componente
onMounted(async () => {
  await loadUsers();
});

// Função para carregar todos os usuários
async function loadUsers() {
  try {
    loading.value = true;
    errorMessage.value = '';
    users.value = await userService.getAll();
  } catch (error: any) {
    errorMessage.value = 'Erro ao carregar usuários. Verifique se o backend está rodando.';
    console.error('Erro ao carregar usuários:', error);
  } finally {
    loading.value = false;
  }
}

// Função para lidar com o submit do formulário
async function handleSubmit() {
  try {
    loading.value = true;
    errorMessage.value = '';
    successMessage.value = '';

    if (isEditing.value && editingUserId.value) {
      // Atualizar usuário existente
      const updateData: UpdateUserDTO = {
        name: formData.value.name,
        email: formData.value.email,
        age: formData.value.age
      };
      await userService.update(editingUserId.value, updateData);
      successMessage.value = 'Usuário atualizado com sucesso!';
    } else {
      // Criar novo usuário
      await userService.create(formData.value);
      successMessage.value = 'Usuário criado com sucesso!';
    }

    // Limpar formulário e recarregar lista
    resetForm();
    await loadUsers();

    // Limpar mensagem de sucesso após 3 segundos
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  } catch (error: any) {
    if (error.response?.data?.error) {
      errorMessage.value = error.response.data.error;
    } else {
      errorMessage.value = 'Erro ao salvar usuário. Verifique os dados e tente novamente.';
    }
    console.error('Erro ao salvar usuário:', error);
  } finally {
    loading.value = false;
  }
}

// Função para editar usuário
function editUser(user: User) {
  isEditing.value = true;
  editingUserId.value = user.id;
  formData.value = {
    name: user.name,
    email: user.email,
    age: user.age
  };
  // Scroll para o formulário
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para cancelar edição
function cancelEdit() {
  resetForm();
}

// Função para deletar usuário
async function deleteUser(id: number) {
  if (!confirm('Tem certeza que deseja excluir este usuário?')) {
    return;
  }

  try {
    loading.value = true;
    errorMessage.value = '';
    await userService.delete(id);
    successMessage.value = 'Usuário excluído com sucesso!';
    await loadUsers();

    // Limpar mensagem de sucesso após 3 segundos
    setTimeout(() => {
      successMessage.value = '';
    }, 3000);
  } catch (error: any) {
    errorMessage.value = 'Erro ao excluir usuário.';
    console.error('Erro ao excluir usuário:', error);
  } finally {
    loading.value = false;
  }
}

// Função para resetar o formulário
function resetForm() {
  formData.value = {
    name: '',
    email: '',
    age: 0
  };
  isEditing.value = false;
  editingUserId.value = null;
}

// Função para formatar data
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}
</script>
