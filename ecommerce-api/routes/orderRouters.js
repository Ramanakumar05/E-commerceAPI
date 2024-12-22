const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create order
router.post('/', async (req, res) => {
    try {
        const { user, products, total } = req.body;
        const order = new Order({ user, products, total });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
