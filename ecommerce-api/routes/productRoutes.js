const express = require('express');
const multer = require('multer');
const Product = require('../models/Product');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Add product
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const product = new Product({ ...req.body, image: req.file.path });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
