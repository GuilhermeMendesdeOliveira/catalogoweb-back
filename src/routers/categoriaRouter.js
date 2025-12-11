import { Router } from 'express';
import container from '../di/container.js';

const router = new Router();
const categoriaController = container.resolve('categoriaController');

router.get('/heartbeat', (req, res) => {
    res.status(200).json({
        message: `🚀 [ ${new Date().toISOString()} - CATEGORIA ] - Rota Catogria Rodando!`
    });
})

router.get('/findAll', (req, res) => {
    categoriaController.findAll(req, res);
})

router.get('/findById/:id', (req, res) => {
    categoriaController.findById(req, res);
})

router.post('/create', (req, res) => {
    categoriaController.create(req, res);
})

router.put('/update/:id', (req, res) => {
    categoriaController.update(req, res);
})

router.delete('/delete/:id', (req, res) => {
    categoriaController.delete(req, res);
})

router.put('/changeAtivo/:id', (req, res) => {
    categoriaController.changeAtivo(req, res);
})

export default router;
