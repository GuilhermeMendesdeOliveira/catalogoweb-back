class ProdutoService {
    constructor({produtoRepository}){
        this.produtoRepository = produtoRepository;
    }

    async create(produto, file) {
        try {
            let url_foto = null;
            if(file){
                url_foto = `/uploads/${file.filename}`;
            }
            // Método para validar se há dados

            // Méotodo para validar se existe pelo nome
            const nome = produto.nome

            const produtoExistente = await this.produtoRepository.findByNome(nome);
            if(produtoExistente){
                throw new Error('Produto já existe!');
            }

            const produtoComUrl = {
                ...produto,
                url_foto
            }

            // Método para criar o produto
            const produtoCriado = await this.produtoRepository.create(produtoComUrl);
            return produtoCriado;
        }
        catch(error){
            console.log('[ PRODUTO SERVICE ] - Erro ao criar produto:', error);
            throw new Error('Erro ao criar produto!');
        }
    }

    async findAll(){
        try {
            // Método para buscar todas os produtos
            const produtos = await this.produtoRepository.findAll();
            return produtos;
        }
        catch(error){
            console.log('[ PRODUTO SERVICE ] - Erro ao buscar produtos:', error);
            throw new Error('Erro ao buscar produtos!');
        }
    }

    async findAllByCategoria(categoria){
        try {
            // Método para buscar produtos por categoria
            const produtos = await this.produtoRepository.findAllByCategoria(categoria);
            return produtos;
        }
        catch(error){
            console.log('[ PRODUTO SERVICE ] - Erro ao buscar produtos por categoria:', error);
            throw new Error('Erro ao buscar produtos por categoria!');
        }
    }

    async findById(id){
        try {
            // Método para buscar produto por ID
            const produto = await this.produtoRepository.findById(id);
            if(!produto){
                throw new Error('Produto não encontrado!');
            }
            return produto;
        }
        catch(error){
            console.log('[ PRODUTO SERVICE ] - Erro ao buscar produto por ID:', error);
            throw new Error('Erro ao buscar produto por ID!');
        }
    }

    async update(id, data){
        try {
            // Método para validar se há dados
            this.validateData(data);

            // Método para buscar produto por ID
            const produto = await this.produtoRepository.findById(id);
            if(!produto){
                throw new Error('Produto não encontrado!');
            }

            // Método para atualizar o produto
            const produtoAtualizado = await this.produtoRepository.update(id, data);
            return produtoAtualizado;
        }
        catch(error){
            console.log('[ PRODUTO SERVICE ] - Erro ao atualizar produto:', error);
            throw new Error('Erro ao atualizar produto!');
        }
    }

    async delete(id){
        try {
            // Método para buscar produto por ID
            const produto = await this.produtoRepository.findById(id);
            if(!produto){
                throw new Error('Produto não encontrado!');
            }

            // Método para deletar o produto
            await this.produtoRepository.delete(id);
            return { message: 'Produto deletado com sucesso!' };
        }
        catch(error){
            console.log('[ PRODUTO SERVICE ] - Erro ao deletar produto:', error);
            throw new Error('Erro ao deletar produto!');
        }
    }

    async changeAtivo(id){
        try {
            // Método para buscar produto por ID
            const produto = await this.produtoRepository.findById(id);
            if(!produto){
                throw new Error('Produto não encontrado!');
            }

            // Método para atualizar o status do produto
            const ativo = produto.ativo
            const produtoAtualizado = await this.produtoRepository.changeAtivo(id, !ativo);
            return produtoAtualizado;
        }
        catch(error){
            console.log('[ PRODUTO SERVICE ] - Erro ao atualizar status do produto:', error);
            throw new Error('Erro ao atualizar status do produto!');
        }
    }

    // Método para validar se há dados
    validateData(data){
        if(!data.nome || !data.preco || !data.categoria_id){
            throw new Error('Dados incompletos!');
        }
    }
}

export default ProdutoService;