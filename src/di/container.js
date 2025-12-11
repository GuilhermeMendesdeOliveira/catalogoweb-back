import { createContainer, asClass } from "awilix";

// Importação das Classes
import CategoriaController from '../controllers/categoriaController.js';
import ProdutoController from '../controllers/produtoController.js';
import UsuarioController from '../controllers/usuarioController.js';

import CategoriaService from '../services/categoriaService.js';
import ProdutoService from '../services/produtoService.js';
import UsuarioService from '../services/usuarioService.js';

import CategoriaRepository from '../repositories/categoriaRepository.js';
import ProdutoRepository from '../repositories/produtoRepository.js';
import UsuarioRepository from '../repositories/usuarioRepository.js';

import UploadProvider from '../providers/UploadProvider.js';
import UploadService from '../services/UploadService.js';
import UploadController from '../controllers/UploadController.js';



const container = createContainer();
const uploadProvider = new UploadProvider();
const uploadService = new UploadService(uploadProvider);

export const uploadController = new UploadController(uploadService);

export const uploadMiddleware = uploadProvider.single("foto");

container.register({
    categoriaController: asClass(CategoriaController).singleton(),
    produtoController: asClass(ProdutoController).singleton(),
    usuarioController: asClass(UsuarioController).singleton(),
    categoriaService: asClass(CategoriaService).singleton(),
    produtoService: asClass(ProdutoService).singleton(),
    usuarioService: asClass(UsuarioService).singleton(),
    categoriaRepository: asClass(CategoriaRepository).singleton(),
    produtoRepository: asClass(ProdutoRepository).singleton(),
    usuarioRepository: asClass(UsuarioRepository).singleton(),
})

export default container;