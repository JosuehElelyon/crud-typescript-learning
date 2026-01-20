import { db, runQuery } from './connection';

async function migrate() {
  try {
    console.log('🔄 Iniciando migração do banco de dados...');

    // Criar tabela de usuários
    await runQuery(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        age INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('✅ Tabela "users" criada com sucesso!');
    console.log('✅ Migração concluída!');
    
    db.close();
  } catch (error) {
    console.error('❌ Erro na migração:', error);
    db.close();
    process.exit(1);
  }
}

migrate();
