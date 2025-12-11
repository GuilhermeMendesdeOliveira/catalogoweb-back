import Sequelize, { Model } from 'sequelize';

class CategoriaModel extends Model {
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
      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
    }, {
      sequelize,
      modelName: 'categoria',
      tableName: 'categorias',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      timestamps: false,
      underscored: true,
    });
  }
}

export default CategoriaModel;