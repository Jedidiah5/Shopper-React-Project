const Product = require('../model/product.model')

async function createProduct(req, res) {
    try {
        const product = new Product(req.body)
        console.log(req.body);
        await product.save()
        res.status(201).json({message: 'Product added successfully', data: product})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

async function fetchProduct(req, res) {
    try {
        const products = await Product.find({})
        res.status(201).json({message: 'Products fetched successfully', data: products})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

async function fetchProductById(req, res) {
    try {
        const productId = req.params.id
        const products = await Product.findById(productId)
        res.status(201).json({message: 'Product fetched successfully', data: products})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

 async function basePath(req, res) {
    try {
        res.status(500).json({message: 'undefined route'})
    } catch (error) {
       console.log(error) 
       res.status(500).json({message: 'server error'})
    }
 }

 async function falsePath(req, res) {
    try {
       res.status(500).json({message: 'undefined route'}) 
    } catch (error) {
       console.log(error) 
       res.status(500).json({message: 'server error'}) 
    }
 }

 module.exports = {basePath, falsePath, createProduct, fetchProduct, fetchProductById}