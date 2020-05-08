const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            stock: DataTypes.INTEGER,
            price: DataTypes.INTEGER
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })

        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })

        this.hasMany(models.ProductSold, { foreignKey: 'product_id', as: 'products_sold' })
    }
}

module.exports = Product