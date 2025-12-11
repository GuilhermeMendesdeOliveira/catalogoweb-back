class UsuarioService {
    constructor({usuarioRepository}){
        this.usuarioRepository = usuarioRepository;
    }

    async create(usuario){
        try {
            // Método para validar se há dados
            this.validateData(usuario);

            // Método para criar o usuário
            const usuarioCriado = await this.usuarioRepository.create(usuario);
            return usuarioCriado;
        }
        catch(error){
            console.log('[ USUARIO SERVICE ] - Erro ao criar usuário:', error);
            throw new Error('Erro ao criar usuário!');
        }
    }

    async findAll(){
        try {
            // Método para buscar todos os usuários
            const usuarios = await this.usuarioRepository.findAll();
            return usuarios;
        }
        catch(error){
            console.log('[ USUARIO SERVICE ] - Erro ao buscar usuários:', error);
            throw new Error('Erro ao buscar usuários!');
        }
    }

    async findById(id){
        try {
            // Método para buscar usuário por ID
            const usuario = await this.usuarioRepository.findById(id);
            if(!usuario){
                throw new Error('Usuário não encontrado!');
            }
            return usuario;
        }
        catch(error){
            console.log('[ USUARIO SERVICE ] - Erro ao buscar usuário por ID:', error);
            throw new Error('Erro ao buscar usuário por ID!');
        }
    }

    async update(id, data){
        try {
            // Método para validar se há dados
            this.validateData(data);

            // Método para buscar usuário por ID
            const usuario = await this.usuarioRepository.findById(id);
            if(!usuario){
                throw new Error('Usuário não encontrado!');
            }

            // Método para atualizar o usuário
            const usuarioAtualizado = await this.usuarioRepository.update(id, data);
            return usuarioAtualizado;
        }
        catch(error){
            console.log('[ USUARIO SERVICE ] - Erro ao atualizar usuário:', error);
            throw new Error('Erro ao atualizar usuário!');
        }
    }

    async delete(id){
        try {
            // Método para buscar usuário por ID
            const usuario = await this.usuarioRepository.findById(id);
            if(!usuario){
                throw new Error('Usuário não encontrado!');
            }

            // Método para deletar o usuário
            await this.usuarioRepository.delete(id);
            return { message: 'Usuário deletado com sucesso!' };
        }
        catch(error){
            console.log('[ USUARIO SERVICE ] - Erro ao deletar usuário:', error);
            throw new Error('Erro ao deletar usuário!');
        }
    }

    // Método para validar se há dados
    validateData(data){
        if(!data){
            throw new Error('Dados incompletos!');
        }
    }
}

export default UsuarioService;