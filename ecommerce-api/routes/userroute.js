const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User=require('../models/user')

const router=express.Router();


// Register

router.post('/register',async(req,res)=>
{
    const {name,email,password}=req.body;
    try{
        const user=new User({name,email,password})
        await user.save();
        res.status(200).json({message:"user registered"})
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
})



router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare provided password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT,
            { expiresIn: '1d' } // Token expiry
        );

        // Respond with token
        res.status(200).json({
            token,
            message: 'Login successful',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
