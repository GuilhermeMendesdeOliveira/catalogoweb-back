import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Importação dos Models
import categoria from '../models/categoriaModel.js';
import produto from '../models/produtoModel.js';
import usuario from '../models/usuarioModel.js';



dotenv.config();

const config = JSON.parse(
    fs.readFileSync(new URL('../config/config.json', import.meta.url), 'utf-8')
);

const isTestEnv = process.env.NODE_ENV;
const { dialect, storage } = config[isTestEnv];
const models = [categoria, produto, usuario];

console.log('isTestEnv:', isTestEnv);
console.log("🔗 Conectando ao banco de dados...");
let connection;
if (isTestEnv === 'test') {
  connection = new Sequelize({dialect, storage, logging: console.log});
} else {
  connection = new Sequelize('postgres://postgres:T2Fibwv6Zanm0fyssa4EeV80HVzPKDfeVkI5ZtLpZ6uDfLKVqQiTOpXBUCBDsJgT@okw4g00o0ksswsws0ggksw08:5432/camafeudb', {
    dialect: 'postgres',
    logging: false,
  });
}


models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);

// connection.sync();

export default connection;
