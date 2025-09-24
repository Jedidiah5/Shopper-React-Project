const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { signupUser, loginUser } = require('./controller/user.controller')
const { validateSignupMiddleware, validateLoginMiddleware } = require('./validator/auth.validator')
const { basePath, falsePath, createProduct, fetchProduct, fetchProductById } = require('./controller/product.controller')
const { isTokenValid, isUserAdmin } = require('./middleware')
const { createCart } = require('./controller/cart.controller')
const { createOrder } = require('./controller/order.controller')

const app = express()

const PORT = 1980

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/signup', validateSignupMiddleware, signupUser)
app.post('/login', validateLoginMiddleware, loginUser)

app.post('/product', isUserAdmin, createProduct)
app.get('/products', isTokenValid, fetchProduct)
app.post('/cart',isUserAdmin, createCart)
app.post('/order', isUserAdmin, createOrder)
app.get('/products/:id', isTokenValid, fetchProductById)
app.post('/cart', isTokenValid, createCart)
app.all('/', basePath)
app.use(falsePath)

app.listen(PORT, async () => {
    console.log(`Server live on ${PORT}`)
    await mongoose.connect('mongodb://127.0.0.1:27017/shopper-app');
    console.log('Database Connected')
})