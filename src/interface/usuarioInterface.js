class UsuarioInterface {
    async create(usuario){
        throw new Error("Método create não implementado");
    }

    async findAll(){
        throw new Error("Método findAll não implementado");
    }

    async findById(id){
        throw new Error("Método findById não implementado");
    }

    async update(id, data){
        throw new Error("Método update não implementado");
    }

    async delete(id){
        throw new Error("Método delete não implementado");
    }

    async findBySenha(senha){
        throw new Error("Método findBySenha não implementado");
    }
}

export default UsuarioInterface;