const Cart = require('../model/cart.model')
const Order = require('../model/order.model')

async function createOrder(req, res) {
    try {
    //    const {userId} = req.user
     // Debug: Check if req.user exists and its structure
        console.log('Full req.user object:', JSON.stringify(req.user, null, 2))
        
        // Check if user is authenticated
        if (!req.user) {
            return res.status(401).json({message: 'User not authenticated'})
        }
        
        // Try different possible user ID fields
        const userId = req.user.userId || req.user.id || req.user._id
        
        if (!userId) {
            console.log('Available keys in req.user:', Object.keys(req.user))
            return res.status(401).json({message: 'User ID not found in request'})
        }
       const {shippingAddress, paymentMethod} = req.body

       console.log('Looking for cart with userId:', userId, typeof userId)
       
       const cart = await Cart.findOne({userId}).populate('products.productId')
       // Debug logging to check cart structure
        console.log('Cart found:', cart)
        console.log('Cart products:', cart?.products)
        console.log('Products length:', cart?.products?.length)
       if (!cart) {
        res.status(400).json({message: 'No cart found for this user'})
       } 
       if (!cart.products || cart.products.length === 0) {
            return res.status(400).json({message: 'Cart is empty'})
        } else {
        const orderItems = cart.products.map(item => ({
            productId: item.productId._id,
            quantity: item.quantity,
            unitPrice: item.unitPrice
        }))

        const totalPrice = orderItems.reduce(
            (acc, item) => acc + item.quantity * item.unitPrice, 0
        )

        const order = new Order({
            userId, 
            orderItems,
            totalPrice,
            shippingAddress,
            paymentMethod,
            status: 'Pending'
        })
        await order.save()
        res.status(201).json({message:'Order created successfully', data: order})

        cart.products = []
        cart.totalPrice = 0
        await cart.save()
       }
    } catch (error) {
       console.log(error)
       res.status(500).json({message: 'server error'}) 
    }
}

module.exports = {createOrder}