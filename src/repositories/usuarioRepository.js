import UsuarioModel from '../models/usuarioModel.js';
import UsuarioInterface from '../interface/usuarioInterface.js';

class UsuarioRepository extends UsuarioInterface {
    async create(usuario){
        const usuarioCreated = await UsuarioModel.create(usuario);
        return usuarioCreated;
    }

    async findAll(){
        const usuarios = await UsuarioModel.findAll();
        return usuarios;
    }

    async findById(id){
        const usuario = await UsuarioModel.findByPk(id);
        return usuario;
    }

    async update(id, data){
        const usuarioUpdated = await UsuarioModel.update(data, {
            where: {
                id: id
            }
        });
        return usuarioUpdated;
    }

    async delete(id){
        const usuarioDeleted = await UsuarioModel.destroy({
            where: {
                id: id
            }
        });
        return usuarioDeleted;
    }

    async findBySenha(senha){
        const usuario = await UsuarioModel.findOne({
            where: {
                senha: senha
            }
        });
        return usuario;
    }
}

export default UsuarioRepository;