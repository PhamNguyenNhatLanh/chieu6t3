const express = require('express');
const router = express.Router();
const Product = require('../schemas/product');

// Lấy danh sách products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({ isDeleted: false });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Thêm product mới
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Cập nhật product
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Xoá mềm product
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
        res.json({ message: 'Product soft deleted', product });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
