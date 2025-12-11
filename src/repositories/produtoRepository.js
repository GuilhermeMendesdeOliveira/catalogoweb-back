import ProdutoModel from '../models/produtoModel.js';
import ProdutoInterface from '../interface/produtoInterface.js';
import CategoriaModel from '../models/categoriaModel.js';

class ProdutoRepository extends ProdutoInterface {
    async create(produto){
        const produtoCreated = await ProdutoModel.create(produto);
        return produtoCreated;
    }

    async findAll(){
        const produtos = await ProdutoModel.findAll({
            include: {
                model: CategoriaModel,
                as: 'categoria',
                attributes: ['id', 'nome']
            }
        });
        return produtos;
    }

    async findAllByCategoria(categoria){
        const produtos = await ProdutoModel.findAll({
            where: {
                categoria_id: categoria
            }
        });
        return produtos;
    }

    async findById(id){
        const produto = await ProdutoModel.findByPk(id);
        return produto;
    }

    async update(id, data){
        const produtoUpdated = await ProdutoModel.update(data, {
            where: {
                id: id
            }
        });
        return produtoUpdated;
    }

    async delete(id){
        const produtoDeleted = await ProdutoModel.destroy({
            where: {
                id: id
            }
        });
        return produtoDeleted;
    }

    async changeAtivo(id, ativo){
        const produtoUpdated = await ProdutoModel.update({
            ativo: ativo
        }, {
            where: {
                id: id
            }
        });
        return produtoUpdated;
    }

    async findByNome(nome){
        const produto = await ProdutoModel.findOne({
            where: {
                nome: nome
            }
        });
        return produto;
    }
}

export default ProdutoRepository;
