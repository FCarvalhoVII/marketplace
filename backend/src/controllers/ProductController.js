const User = require('../models/User')
const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports = {
    async listAllProducts(req, res) {
        const { page = 1 } = req.query

        try {
            const products = await Product.findAll({
                attributes: ['id', 'name', 'description', 'stock', 'price'],
                include: [
                    { association: 'category', attributes: ['name'] },
                    { association: 'user', attributes: ['name'] }
                ],
                limit: 15,
                offset: ((page - 1) * 15)
            })

            return res.json(products)
        } catch(err) {
            return res.status(400).send({ error: 'Error in listing all products' })
        }
    },

    async listProductsByCategory(req, res) {
        const { categoryId } = req.params
        const { page = 1 } = req.query

        try {
            const products = await Category.findByPk(categoryId, {
                attributes: ['name'],
                include: { association: 'products' },
                limit: 15,
                offset: ((page - 1) * 15)
            })

            return res.json(products)
        } catch(err) {
            return res.status(400).send({ error: 'Error in listing products by category' })
        }
    },

    async listUserProducts(req, res) {
        const id = req.userId
        const { page = 1 } = req.query

        try {
            const userProducts = await User.findByPk(id, {
                attributes: ['name'],
                include: { association: 'products' },
                limit: 15,
                offset: ((page - 1) * 15)
            })

            return res.json(userProducts)
        } catch(err) {
            return res.status(400).send({ error: 'Listing error' })
        }
    },

    async productInfo(req, res) {
        const { productId } = req.params

        try {
            const product = await Product.findByPk(productId, {
                attributes: ['name', 'description', 'stock', 'price'],
                include: [
                    { association: 'category', attributes: ['name'] },
                    { association: 'user', attributes: ['name'] }
                ]
            })

            return res.json(product)
        } catch(err) {
            return res.status(400).send({ error: 'Error requesting product information' })
        }
    },

    async createProduct(req, res) {
        const { categoryId, name, description, stock, price } = req.body
        const id = req.userId

        try {
            const product = await Product.create({
                category_id: categoryId,
                user_id: id,
                name,
                description,
                stock,
                price
            })

            return res.json(product)
        } catch(err) {
            return res.status(400).send({ error: 'Failed to add product, try again.' })
        }
    },

    async editProduct(req, res) {
        const { name, description, stock, price, categoryId } = req.body
        const { productId } = req.params
        const id = req.userId
        
        try {
            await Product.update({
                name,
                description,
                stock,
                price,
                category_id: categoryId
            }, { 
                where: { 
                    user_id: id,
                    id: productId
                } 
            })

            return res.send()
        } catch(err) {
            return res.status(400).send({ error: 'Failed to edit product, try again' })
        }
    },

    async deleteProduct(req, res) {
        const { productId } = req.params
        const id = req.userId

        try {
            await Product.destroy({
                where: {
                    user_id: id,
                    id: productId
                }
            })

            return res.send()
        } catch(err) {
            return res.status(400).send({ error: 'Failed to delete product, try again' })
        }
    }
}