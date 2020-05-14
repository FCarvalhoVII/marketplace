const Category = require('../models/Category')

module.exports = {
    async getCategories(req, res) {
        try {
            const categories = await Category.findAll()

            return res.json(categories)
        } catch(err) {
            return res.status(400).send({ error: 'Error in listing' })
        }
    }
}