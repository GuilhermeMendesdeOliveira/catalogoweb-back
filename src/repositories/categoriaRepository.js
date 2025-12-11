import CategoriaModel from '../models/categoriaModel.js';
import CategoriaInterface from '../interface/categoriaInterface.js';

class CategoriaRepository extends CategoriaInterface {
    async create(categoria){
        const categoriaCreated = await CategoriaModel.create(categoria);
        return categoriaCreated;
    }

    async findAll(){
        const categorias = await CategoriaModel.findAll();
        return categorias;
    }

    async findById(id){
        const categoria = await CategoriaModel.findByPk(id);
        return categoria;
    }

    async update(id, data){
        const categoriaUpdated = await CategoriaModel.update(data, {
            where: {
                id: id
            }
        });
        return categoriaUpdated;
    }

    async delete(id){
        const categoriaDeleted = await CategoriaModel.destroy({
            where: {
                id: id
            }
        });
        return categoriaDeleted;
    }

    async changeAtivo(id, ativo){
        const categoriaUpdated = await CategoriaModel.update({
            ativo: ativo
        }, {
            where: {
                id: id
            }
        });
        return categoriaUpdated;
    }

    async findByNome(nome){
        const categoria = await CategoriaModel.findOne({
            where: {
                nome: nome
            }
        });
        return categoria;
    }
}

export default CategoriaRepository;