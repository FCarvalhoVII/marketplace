const Sale = require('../models/Sale')
const ProductSold = require('../models/ProductSold')

module.exports = {
    async listPurchasedProducts(req, res) {
        const id = req.userId
        const { page = 1 } = req.query
        
        try {
            const resultSale = await Sale.findAll({
                where: { buyer_id: id },
                include: [
                    { association: 'users', attributes: ['name'] },
                    { association: 'products_sold', attributes: ['quantity_sold', 'product_id'] }
                ]               
            })

            const [ { id: cartId } ] = resultSale
            
            const resultProducts = await ProductSold.findAll({
                where: { sale_id: cartId },
                include: { association: 'products', attributes: ['name'] },
                limit: 15,
                offset: ((page - 1) * 15)
            })

            return res.json(resultProducts)
        } catch(err) {
            return res.status(400).send({ error: 'Error in listing' })
        }
    },

    async checkOutCart(req, res) {
        const id = req.userId
        const { salePrice } = req.body

        try {
            const buy = await Sale.create({
                buyer_id: id,
                sale_price: salePrice
            })

            return res.json(buy)
        } catch(err) {
            return res.status(400).send({ error: 'Error buying product, try again' })
        }
    },

    async savingSoldProducts(req, res) {
        const { cartId } = req.params
        const { productId, quantity } = req.body

        try {
            const productsSold = await ProductSold.create({
                sale_id: cartId,
                product_id: productId,
                quantity_sold: quantity
            })

            return res.json(productsSold)
        } catch(err) {
            return res.status(400).send({ error: 'Unexpected error occurred, try again' })
        }
    }
}