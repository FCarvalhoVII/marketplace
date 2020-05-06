const User = require('../models/User')
const bcrypt = require('bcryptjs')
const generateToken = require('../utils/generateToken')

module.exports = {
    async index(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email']
        })

        return res.json(users)
    },

    async create(req, res) {
        const { name, email, password } = req.body

        try {
            if (await User.findOne({ where: { email } })) {
                return res.status(400).send({ error: 'User already registered' })
            }

            const hash = await bcrypt.hash(password, 10)

            const user = await User.create({ 
                name, 
                email, 
                password: hash 
            })

            user.password = undefined
            
            return res.send({ user, token: generateToken({ id: user.id }) })
        } catch(err) {
            return res.status(400).send({ error: 'Registration failed' })
        }
    },

    async login(req, res) {
        const { email, password } = req.body

        try {
            const user = await User.findOne({ where: { email } })

            if (!user) {
                return res.status(400).send({ error: 'User not exists' })
            }

            if (!await bcrypt.compare(password, user.password)) {
                return res.status(400).send({ error: 'Invalid password' })
            }

            user.password = undefined

            return res.send({ user, token: generateToken({ id: user.id }) })

        } catch(err) {
            return res.status(400).send({ error: 'Login failed' })
        }
    }
}