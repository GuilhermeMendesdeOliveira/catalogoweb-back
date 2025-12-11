import { Router } from 'express';
import container from '../di/container.js';

const router = new Router();
const usuarioController = container.resolve('usuarioController');

router.get('/heartbeat', (req, res) => {
    res.status(200).json({
        message: `🚀 [ ${new Date().toISOString()} - USUARIO ] - Rota Usuário Rodando!`
    });
})

router.get('/findAll', (req, res) => {
    usuarioController.findAll(req, res);
})

router.get('/findById/:id', (req, res) => {
    usuarioController.findById(req, res);
})

router.post('/create', (req, res) => {
    usuarioController.create(req, res);
})

router.put('/update/:id', (req, res) => {
    usuarioController.update(req, res);
})

router.delete('/delete/:id', (req, res) => {
    usuarioController.delete(req, res);
})

export default router;