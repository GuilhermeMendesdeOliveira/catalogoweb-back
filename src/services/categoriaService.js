class CategoriaService {
    constructor({ categoriaRepository }){
        this.categoriaRepository = categoriaRepository;
    }

    async create(categoria){
        try {
            // Método para validar se há dados
            this.validateData(categoria);

            // Méotodo para validar se existe pelo nome
            const categoriaExistente = await this.categoriaRepository.findByNome(categoria.nome.toLowerCase());
            if(categoriaExistente){
                throw new Error('Categoria já existe!');
            }

            // Método para criar a categoria
            const categoriaCriada = await this.categoriaRepository.create(categoria);
            return categoriaCriada;
        }
        catch(error){
            console.log('[ CATEGORIA SERVICE ] - Erro ao criar categoria:', error);
            throw new Error('Erro ao criar categoria!');
        }
    }

    async findAll(){
        try {
            // Método para buscar todas as categorias
            const categorias = await this.categoriaRepository.findAll();
            return categorias;
        }
        catch(error){
            console.log('[ CATEGORIA SERVICE ] - Erro ao buscar categorias:', error);
            throw new Error('Erro ao buscar categorias!');
        }
    }

    async findById(id){
        try {
            // Método para buscar categoria por ID
            const categoria = await this.categoriaRepository.findById(id);
            if(!categoria){
                throw new Error('Categoria não encontrada!');
            }
            return categoria;
        }
        catch(error){
            console.log('[ CATEGORIA SERVICE ] - Erro ao buscar categoria por ID:', error);
            throw new Error('Erro ao buscar categoria por ID!');
        }
    }

    async update(id, data){
        try {
            // Método para validar se há dados
            this.validateData(data);

            // Método para buscar categoria por ID
            const categoria = await this.categoriaRepository.findById(id);
            if(!categoria){
                throw new Error('Categoria não encontrada!');
            }

            // Método para atualizar a categoria
            const categoriaUpdated = await this.categoriaRepository.update(id, data);
            return categoriaUpdated;
        }
        catch(error){
            console.log('[ CATEGORIA SERVICE ] - Erro ao atualizar categoria:', error);
            throw new Error('Erro ao atualizar categoria!');
        }
    }

    async delete(id){
        try {
            // Método para buscar categoria por ID
            const categoria = await this.categoriaRepository.findById(id);
            if(!categoria){
                throw new Error('Categoria não encontrada!');
            }

            // Método para excluir a categoria
            const categoriaDeleted = await this.categoriaRepository.delete(id);
            return categoriaDeleted;
        }
        catch(error){
            console.log('[ CATEGORIA SERVICE ] - Erro ao excluir categoria:', error);
            throw new Error('Erro ao excluir categoria!');
        }
    }

    async changeAtivo(id){
        try {
            // Método para buscar a categoria por ID
            const categoria = await this.categoriaRepository.findById(id);
            if(!categoria){
                throw new Error('Categoria não encontrada!');
            }

            // Método para alterar o ativo da categoria
            const ativo = categoria.ativo;
            const categoriaAtualizada = await this.categoriaRepository.changeAtivo(id, !ativo);
            return categoriaAtualizada;
        }
        catch(error){
            console.log('[ CATEGORIA SERVICE ] - Erro ao alterar ativo da categoria:', error);
            throw new Error('Erro ao alterar ativo da categoria!');
        }
    }

    async findByNome(nome){
        try {
            // Método para buscar categoria por nome
            const categoria = await this.categoriaRepository.findByNome(nome.toLowerCase());
            if(!categoria){
                throw new Error('Categoria não encontrada!');
            }
            return categoria;
        }
        catch(error){
            console.log('[ CATEGORIA SERVICE ] - Erro ao buscar categoria por nome:', error);
            throw new Error('Erro ao buscar categoria por nome!');
        }
    }

    validateData(data){
        if(!data){
            throw new Error('Dados não informados!');
        }
    }
}

export default CategoriaService;