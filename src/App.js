import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import './database/index.js';

// Importação das Rotas
import categoriaRouter from './routers/categoriaRouter.js';
import produtoRouter from './routers/produtoRouter.js';
import usuarioRouter from './routers/usuarioRouter.js';

dotenv.config();

// Necessário para usar __dirname no ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());

        // 👉 Torna a pasta uploads acessível via URL pública
        this.app.use(
            "/uploads",
            express.static(path.join(__dirname, "uploads"))
        );
    }

    routes() {
        this.app.use('/api/categoria', categoriaRouter);
        this.app.use('/api/produto', produtoRouter);
        this.app.use('/api/usuario', usuarioRouter);
    }
}

export default new App().app;
