const express = require('express')
const authMiddleware = require('./middlewares/auth')

const UserController = require('./controllers/UserController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/register', UserController.create)
routes.post('/login', UserController.login)

routes.use(authMiddleware)
routes.get('/profile', ProfileController.index)
routes.put('/profile/edit', ProfileController.updateProfile)
routes.post('/register/info', ProfileController.create)

module.exports = routes