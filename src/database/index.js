import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';

import categoria from '../models/categoriaModel.js';
import produto from '../models/produtoModel.js';
import usuario from '../models/usuarioModel.js';

dotenv.config();

// Carrega configurações do Sequelize CLI
const config = JSON.parse(
  fs.readFileSync(new URL('../config/config.json', import.meta.url), 'utf-8')
);

// 🔥 Fallback seguro — caso NODE_ENV não exista, usar development
const env = process.env.NODE_ENV || 'development';

// Carrega configurações conforme o ambiente atual
const { dialect, storage } = config[env];

console.log('Ambiente:', env);
console.log('DATABASE_URL:', process.env.DATABASE_URL);

let connection;

// Ambiente de teste
if (env === 'test') {
  connection = new Sequelize({
    dialect,
    storage,
    logging: false,
  });
} else {
  // Produção / Desenvolvimento (usando DATABASE_URL)
  connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
  });
}

// Carrega models
const models = [categoria, produto, usuario];

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));

export default connection;
