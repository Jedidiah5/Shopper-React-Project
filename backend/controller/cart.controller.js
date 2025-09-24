const Cart = require('../model/cart.model')

async function createCart(req, res) {
    try {
        const cart = new Cart(req.body)
        await cart.save()
        res.status(200).json({message: 'Cart added successfully', data: cart})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

module.exports = {createCart}