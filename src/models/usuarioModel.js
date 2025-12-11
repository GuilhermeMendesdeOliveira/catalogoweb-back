import Sequelize, { Model } from 'sequelize';

class UsuarioModel extends Model {
    static init(sequelize) {
        super.init({
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING
            },
            senha: {
                allowNull: false,
                type: Sequelize.STRING
            },
        }, {
            sequelize,
            modelName: 'usuario',
            tableName: 'usuarios',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            timestamps: false,
            underscored: true,
        });
    }
}

export default UsuarioModel;
