const express = require('express')
const authMiddleware = require('./middlewares/auth')

const UserController = require('./controllers/UserController')
const ProfileController = require('./controllers/ProfileController')
const ProductController = require('./controllers/ProductController')
const SaleController = require('./controllers/SaleController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/register', UserController.create)
routes.post('/login', UserController.login)

routes.get('/profile/:id', ProfileController.viewProfile)

routes.get('/products', ProductController.listAllProducts)
routes.get('/products/category', ProductController.listProductsByCategory)
routes.get('/products/:productId', ProductController.productInfo)

routes.use(authMiddleware)
routes.get('/profile', ProfileController.index)
routes.post('/profile/info', ProfileController.createProfile)
routes.put('/profile/edit', ProfileController.updateProfile)

routes.post('/profile/product', ProductController.createProduct)
routes.get('/profile/product', ProductController.listUserProducts)
routes.put('/profile/product/:productId', ProductController.editProduct)
routes.delete('/profile/product/:productId', ProductController.deleteProduct)

routes.post('/cart', SaleController.checkOutCart)

module.exports = routes