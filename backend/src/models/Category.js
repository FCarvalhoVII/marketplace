const { Model, DataTypes } = require('sequelize')

class Category extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'categories'
        })
    }

    static associate(models) {
        this.hasMany(models.Product, { foreignKey: 'category_id', as: 'products' })
    }
}

module.exports = Category