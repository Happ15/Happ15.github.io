const {BasketProduct} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketProductController {
    async add(req, res) {
        let {basketId, productId} = req.body
        const basketProduct = await BasketProduct.create({basketId, productId})
        return res.json(basketProduct)
    }

    async deleteOne(req, res) {
        let {basketId, productId} = req.body
        const basketProduct = await BasketProduct.destroy(
            {
                where:
                {
                    basketId: basketId,
                    productId: productId
                }
            })
        return res.json(basketProduct)
    }

    async deleteAll(req, res) {
        let {basketId} = req.body
        const deleteBasketProduct = await BasketProduct.destroy(
            {
                where:{basketId: basketId}
            })
        return res.json(deleteBasketProduct)
    }

    async getAll(req, res) {
        const {basketId} = req.params
        const basketProducts = await BasketProduct.findAll(
            {
            where: {basketId: basketId}
            })
        return res.json(basketProducts)
    }
}

module.exports = new BasketProductController()