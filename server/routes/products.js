const express = require('express');
const router = express.Router();
const mongoose = require('mondoose')
const Products = require('../models/Products')

router.get('/', async(req,res) => {
    let product = await Products.find()
});

router.post('/add/:productId', async (req,res) => {
    let data = req.body;
    let product =new Products();
    product.productName = data.productName
});

router.put('/update/:productId', async (req,res) => {});

router.patch('/patch/:productId', async (req,res) => {});

router.delete('/delete/:userId', async (req,res) => {});

module.exports = router
