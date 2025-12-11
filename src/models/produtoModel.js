import Sequelize, { Model } from 'sequelize';

class ProdutoModel extends Model {

    static associate(models) {
        this.belongsTo(models.categoria, {
            foreignKey: 'categoria_id',
            as: 'categoria'
        });
    }

    static init(sequelize) {
        super.init({
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ativo: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            nome: {
                allowNull: false,
                type: Sequelize.STRING
            },
            descricao: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            preco: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
            peso: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            url_foto: {
                type: Sequelize.STRING,
                allowNull: false
            },
            categoria_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        }, {
            sequelize,
            modelName: 'produto',
            tableName: 'produtos',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            timestamps: false,
            underscored: true,
        });
    }
}

export default ProdutoModel;