class UsuarioController {
    constructor({ usuarioService }){
        this.usuarioService = usuarioService;
    }

    async create(req, res){
        try {
            const usuario = req.body;
            const usuarioCriado = await this.usuarioService.create(usuario);
            res.status(201).json({
                message: 'Usuário criado com sucesso!',
                data: usuarioCriado
            });
        }
        catch(error){
            console.log('[ USUARIO CONTROLLER ] - Erro ao criar usuário:', error);
            res.status(400).json({
                message: 'Erro ao criar usuário!',
                error: error.message
            });
        }
    }
    
    async findAll(req, res){
        try {
            const usuarios = await this.usuarioService.findAll();
            res.status(200).json({
                message: 'Usuários encontrados com sucesso!',
                data: usuarios
            });
        }
        catch(error){
            console.log('[ USUARIO CONTROLLER ] - Erro ao buscar usuários:', error);
            res.status(400).json({
                message: 'Erro ao buscar usuários!',
                error: error.message
            });
        }
    }

    async findById(req, res){
        try {
            const { id } = req.params;
            const usuario = await this.usuarioService.findById(id);
            res.status(200).json({
                message: 'Usuário encontrado com sucesso!',
                data: usuario
            });
        }
        catch(error){
            console.log('[ USUARIO CONTROLLER ] - Erro ao buscar usuário por ID:', error);
            res.status(400).json({
                message: 'Erro ao buscar usuário por ID!',
                error: error.message
            });
        }
    }

    async update(req, res){
        try {
            const { id } = req.params;
            const data = req.body;
            const usuarioAtualizado = await this.usuarioService.update(id, data);
            res.status(200).json({
                message: 'Usuário atualizado com sucesso!',
                data: usuarioAtualizado
            });
        }
        catch(error){
            console.log('[ USUARIO CONTROLLER ] - Erro ao atualizar usuário:', error);
            res.status(400).json({
                message: 'Erro ao atualizar usuário!',
                error: error.message
            });
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params;
            await this.usuarioService.delete(id);
            res.status(200).json({
                message: 'Usuário deletado com sucesso!'
            });
        }
        catch(error){
            console.log('[ USUARIO CONTROLLER ] - Erro ao deletar usuário:', error);
            res.status(400).json({
                message: 'Erro ao deletar usuário!',
                error: error.message
            });
        }
    }
}

export default UsuarioController;