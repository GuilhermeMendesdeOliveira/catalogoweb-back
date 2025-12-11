import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

import categoria from '../models/categoriaModel.js';
import produto from '../models/produtoModel.js';
import usuario from '../models/usuarioModel.js';

dotenv.config();

// Carrega configurações do Sequelize CLI (para migrations)
const config = JSON.parse(
  fs.readFileSync(new URL('../config/config.json', import.meta.url), 'utf-8')
);

const env = process.env.NODE_ENV;
const { dialect, storage } = config[env];

const models = [categoria, produto, usuario];

console.log('Ambiente:', env);
console.log('DATABASE_URL:', process.env.DATABASE_URL);

let connection;

if (env === 'test') {
  connection = new Sequelize({ dialect, storage, logging: console.log });
} else {
  // 🔥 Agora usando a variável do Coolify corretamente
  connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
  });
}

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
