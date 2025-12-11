class CategoriaInterface {
    async create(categoria){
        throw new Error('Método create não implementado!');
    }

    async findAll(){
        throw new Error('Método findAll não implementado!');
    }

    async findById(id){
        throw new Error('Método findById não implementado!');
    }

    async update(id, data){
        throw new Error('Método update não implementado!');
    }

    async delete(id){
        throw new Error('Método delete não implementado!');
    }

    async changeAtivo(id, ativo){
        throw new Error('Método changeAtivo não implementado!');
    }

    async findByNome(nome){
        throw new Error('Método findByNome não implementado!');
    }
}

export default CategoriaInterface;