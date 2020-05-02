const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' })

        this.hasMany(models.Product, { foreignKey: 'user_id', as: 'products' })

        this.hasMany(models.Sale, { foreignKey: 'buyer_id', as: 'sales' })
    }
}

module.exports = User