const { Model, DataTypes } = require('sequelize')

class ProductSold extends Model {
    static init(connection) {
        super.init({
            quantity_sold: DataTypes.INTEGER
        }, {
            sequelize: connection,
            tableName: 'products_sold'
        })
    }

    static associate(models) {
        this.belongsTo(models.Sale, { foreignKey: 'sale_id', as: 'sales' })

        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products' })
    }
}

module.exports = ProductSold