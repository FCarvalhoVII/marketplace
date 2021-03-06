const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })
}