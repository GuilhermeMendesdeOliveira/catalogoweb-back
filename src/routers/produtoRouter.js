import { Router } from 'express';
import container from '../di/container.js';
import upload from "../middleware/uploadMiddleware.js";

const router = new Router();
const produtoController = container.resolve('produtoController');

router.get('/heartbeat', (req, res) => {
    res.status(200).json({
        message: `🚀 [ ${new Date().toISOString()} - PRODUTO ] - Rota Produto Rodando!`
    });
})

router.get('/findAll', (req, res) => {
    produtoController.findAll(req, res);
})

router.get('/findById/:id', (req, res) => {
    produtoController.findById(req, res);
})

router.get('/findAllByCategoria/:categoria', (req, res) => {
    produtoController.findAllByCategoria(req, res);
})
        
router.post('/create', upload, (req, res) => produtoController.create(req, res) )

router.put('/update/:id', (req, res) => {
    produtoController.update(req, res);
})

router.delete('/delete/:id', (req, res) => {
    produtoController.delete(req, res);
})

router.put('/changeAtivo/:id', (req, res) => {
    produtoController.changeAtivo(req, res);
})

export default router;