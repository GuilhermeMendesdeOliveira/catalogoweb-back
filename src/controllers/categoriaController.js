class CategoriaController {
    constructor({ categoriaService }){
        this.categoriaService = categoriaService;
    }

    async create(req, res){
        try {
            const categoria = req.body;
            const categoriaCriada = await this.categoriaService.create(categoria);
            res.status(201).json({
                message: 'Categoria Criada com sucesso!',
                data: categoriaCriada
            });
        }
        catch(error){
            console.log('[ CATEGORIA CONTROLLER ] - Erro ao criar categoria:', error);
            res.status(400).json({
                message: 'Erro ao criar categoria!',
                error: error.message
            });
        }
    }

    async findAll(req, res){
        try {
            const categorias = await this.categoriaService.findAll();
            res.status(200).json({
                message: 'Categorias encontradas com sucesso!',
                data: categorias
            });
        }
        catch(error){
            console.log('[ CATEGORIA CONTROLLER ] - Erro ao buscar categorias:', error);
            res.status(400).json({
                message: 'Erro ao buscar categorias!',
                error: error.message
            });
        }
    }

    async findById(req, res){
        try {
            const { id } = req.params;
            const categoria = await this.categoriaService.findById(id);
            res.status(200).json({
                message: 'Categoria encontrada com sucesso!',
                data: categoria
            });
        }
        catch(error){
            console.log('[ CATEGORIA CONTROLLER ] - Erro ao buscar categoria por ID:', error);
            res.status(400).json({
                message: 'Erro ao buscar categoria por ID!',
                error: error.message
            });
        }
    }

    async update(req, res){
        try {
            const { id } = req.params;
            const data = req.body;
            const categoriaAtualizada = await this.categoriaService.update(id, data);
            res.status(200).json({
                message: 'Categoria Atualizada com sucesso!',
                data: categoriaAtualizada
            });
        }
        catch(error){
            console.log('[ CATEGORIA CONTROLLER ] - Erro ao atualizar categoria:', error);
            res.status(400).json({
                message: 'Erro ao atualizar categoria!',
                error: error.message
            });
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params;
            await this.categoriaService.delete(id);
            res.status(200).json({
                message: 'Categoria Deletada com sucesso!'
            });
        }
        catch(error){
            console.log('[ CATEGORIA CONTROLLER ] - Erro ao deletar categoria:', error);
            res.status(400).json({
                message: 'Erro ao deletar categoria!',
                error: error.message
            });
        }
    }

    async findByNome(req, res){
        try {
            const { nome } = req.params;
            const categoria = await this.categoriaService.findByNome(nome.toLowerCase());
            res.status(200).json({
                message: 'Categoria encontrada com sucesso!',
                data: categoria
            });
        }
        catch(error){
            console.log('[ CATEGORIA CONTROLLER ] - Erro ao buscar categoria por nome:', error);
            res.status(400).json({
                message: 'Erro ao buscar categoria por nome!',
                error: error.message
            });
        }
    }

    async changeAtivo(req, res){
        try {
            const { id } = req.params;
            const categoria = await this.categoriaService.changeAtivo(id);
            res.status(200).json({
                message: `Categoria ${categoria.ativo ? 'Desativada' : 'Ativada'} com sucesso!`,
                data: categoria
            });
        }
        catch(error){
            console.log('[ CATEGORIA CONTROLLER ] - Erro ao ativar/desativar categoria:', error);
            res.status(400).json({
                message: 'Erro ao ativar/desativar categoria!',
                error: error.message
            });
        }
    }
}

export default CategoriaController;