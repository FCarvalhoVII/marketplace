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
}

module.exports = ProductSold