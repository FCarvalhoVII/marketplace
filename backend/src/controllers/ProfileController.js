const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const id = req.userId

        try {
            const user = await User.findByPk(id, {
                attributes: ['name', 'email'],
                include: { association: 'addresses' }
            })

            return res.json(user)
        } catch(err) {
            return res.status(400).send({ error: 'Unexpected error' })
        }
    },
    
    async createProfile(req, res) {
        const { zipcode, city, street, number } = req.body
        const id = req.userId

        try {
            const user = await User.findByPk(id)

            if (!user) {
                return res.status(400).json({ error: 'User not exists' })
            }

            const address = await Address.create({
                user_id: id,
                zipcode,
                city,
                street,
                number
            })

            return res.json(address)
        } catch(err) {
            return res.status(400).send({ error: 'Error creating new address, try again.' })
        }
    },

    async updateProfile(req, res) {
        const { name, zipcode, city, street, number } = req.body
        const id = req.userId

        try {
            await User.update({ name }, { where: { id } })
            await Address.update({ 
                zipcode, 
                city, 
                street, 
                number 
            }, { where: { user_id: id } })

            const user = await User.findByPk(id, { 
                attributes: ['name'],
                include: { association: 'addresses' }
            })

            return res.json(user)
        } catch(err) {
            return res.status(400).send({ error: 'Error updating profile, try again.' })
        }
    },

    async viewProfile(req, res) {
        const { id } = req.params

        try {
            const profile = await User.findByPk(id, {
                attributes: ['name'],
                include: [
                    { 
                        association: 'addresses', 
                        attributes: ['zipcode', 'city', 'street', 'number'] 
                    },
                    {
                        association: 'products',
                        attributes: ['name', 'description', 'stock', 'price']
                    }
                ]
            })

            return res.json(profile)
        } catch(err) {
            return res.status(400).send({ error: 'Profile view error' })
        }
    }
}