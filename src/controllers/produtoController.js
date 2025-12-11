class ProdutoController {
    constructor({ produtoService }) {
        this.produtoService = produtoService;
    }

    async create(req, res) {
        try {
            const produto = req.body;
            const file = req.file

            const produtoCriado = await this.produtoService.create(produto, file);
            res.status(201).json({
                message: 'Produto Criado com sucesso!',
                data: produtoCriado
            });
        }
        catch (error) {
            console.log('[ PRODUTO CONTROLLER ] - Erro ao criar produto:', error);
            res.status(400).json({
                message: 'Erro ao criar produto!',
                error: error.message
            });
        }
    }

    async findAll(req, res) {
        try {
            const produtos = await this.produtoService.findAll();
            res.status(200).json({
                message: 'Produtos encontrados com sucesso!',
                data: produtos
            });
        }
        catch (error) {
            console.log('[ PRODUTO CONTROLLER ] - Erro ao buscar produtos:', error);
            res.status(400).json({
                message: 'Erro ao buscar produtos!',
                error: error.message
            });
        }
    }

    async findAllByCategoria(req, res) {
        try {
            const { categoria } = req.params;
            const produtos = await this.produtoService.findAllByCategoria(categoria);
            res.status(200).json({
                message: 'Produtos encontrados com sucesso!',
                data: produtos
            });
        }
        catch (error) {
            console.log('[ PRODUTO CONTROLLER ] - Erro ao buscar produtos por categoria:', error);
            res.status(400).json({
                message: 'Erro ao buscar produtos por categoria!',
                error: error.message
            });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const produto = await this.produtoService.findById(id);
            res.status(200).json({
                message: 'Produto encontrado com sucesso!',
                data: produto
            });
        }
        catch (error) {
            console.log('[ PRODUTO CONTROLLER ] - Erro ao buscar produto por ID:', error);
            res.status(400).json({
                message: 'Erro ao buscar produto por ID!',
                error: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const produtoAtualizado = await this.produtoService.update(id, data);
            res.status(200).json({
                message: 'Produto atualizado com sucesso!',
                data: produtoAtualizado
            });
        }
        catch (error) {
            console.log('[ PRODUTO CONTROLLER ] - Erro ao atualizar produto:', error);
            res.status(400).json({
                message: 'Erro ao atualizar produto!',
                error: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await this.produtoService.delete(id);
            res.status(200).json({
                message: 'Produto deletado com sucesso!',
            });
        }
        catch (error) {
            console.log('[ PRODUTO CONTROLLER ] - Erro ao deletar produto:', error);
            res.status(400).json({
                message: 'Erro ao deletar produto!',
                error: error.message
            });
        }
    }

    async changeAtivo(req, res) {
        try {
            const { id } = req.params;
            const produtoAtualizado = await this.produtoService.changeAtivo(id);
            res.status(200).json({
                message: `Produto ${produtoAtualizado.ativo ? 'ativado' : 'desativado'} com sucesso!`,
                data: produtoAtualizado
            });
        }
        catch (error) {
            console.log('[ PRODUTO CONTROLLER ] - Erro ao atualizar produto:', error);
            res.status(400).json({
                message: 'Erro ao atualizar produto!',
                error: error.message
            });
        }
    }
}

export default ProdutoController;