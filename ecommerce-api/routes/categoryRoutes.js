const express = require('express');
// DB model for creating and updating the category
const Category = require('../models/Category');
// Router 
const router = express.Router();


// Add category

router.get('/category', async (req, res) => { 
    try { 
        const categories = await Category.find();
        console.log(categories); 
        res.status(200).json(categories); 
    } 
    catch (error) 
    { 
        console.log(error); 
        res.status(500).json({ message: 'Server Error' }); 
    } 
});
router.post('/',async(req,res)=>
{
    try{
        const category=new Category(req.body);
        await category.save();
        res.status(201).json(category)
    }
    catch(error)
    {
        res.status(400).json({message:error.message})
    }
})

// Edit category

router.put('/:id',async(req,res)=>
{
    try
    {
        // Example
// Without { new: true }:

        // const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
        // console.log(updatedProduct); // Logs the product as it was before the update

        // With { new: true }:

        // const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // console.log(updatedProduct); // Logs the updated product
        const category=await Category.findByIdAndUpdate(req.params.id,req.body)

        res.status(200).json({category})
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }
})


// Delect category

router.delete('/categories/:categoryId', async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.categoryId);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
