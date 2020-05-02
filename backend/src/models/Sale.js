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

        this.belongsToMany(models.Product, {
            foreignKey: 'sale_id',
            through: 'products_sold',
            as: 'products'
        })
    }
}

module.exports = Sale