const { Model, DataTypes } = require('sequelize')

class Sale extends Model {
    static init(connection) {
        super.init({
            sale_price: DataTypes.INTEGER
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'buyer_id', as: 'users' })

        this.hasMany(models.ProductSold, { foreignKey: 'sale_id', as: 'products_sold' })
    }
}

module.exports = Sale