const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Address = require('../models/Address')
const Category = require('../models/Category')
const Product = require('../models/Product')
const ProductSold = require('../models/ProductSold')
const Sale = require('../models/Sale')
const User = require('../models/User')

const connection = new Sequelize(dbConfig)

Address.init(connection)
Category.init(connection)
Product.init(connection)
ProductSold.init(connection)
Sale.init(connection)
User.init(connection)

Address.associate(connection.models)
Category.associate(connection.models)
Product.associate(connection.models)
ProductSold.associate(connection.models)
Sale.associate(connection.models)
User.associate(connection.models)

module.exports = connection