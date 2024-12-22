const express=require('express')
const router=express.Router();

const Product=require('../models/Product');
const { model } = require('mongoose');

// create product
router.post('/',async(req,res)=>
{
    // req.params-Contains route parameters defined in the URL path, typically used for GET, PUT, DELETE requests where the resource identifier is part of the URL.

    // req.body-Contains data sent in the request body, typically used for POST, PUT, and PATCH requests.
    try{
        const product=new Product(req.body);
        const saveProduct=await product.save();

        res.status(201).json(saveProduct)
    }
    catch(error)
    {
        res.status(400).json({error:error.message});
    }
})


// get product


router.get('/',async(req,res)=>
{
    try{
        const product=await Product.find();
        res.status(200).json(product)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

// get product by id

router.get('/:id',async(req,res)=>
{
    try
    {
        const product=await Product.findById(req.params.id)
        if(!product)
        {
            return res.status(404).json({message:"NOT FOUND"})
        }
        else{
            res.status(200).json({message:"PRODUCT FOUND"})
        }
    }
    catch(error)
    {
        res.status(500).json({error:error.message})
    }
})

// update the product

router.put('/:id',async(req,res)=>
{
    try{
        const updated_product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updated_product)
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }
})

// delect product

router.delete('/:id',async(req,res)=>
{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.sendStatus(200).json({message:'product delected'})
    }
    catch(error)
    {
        res.status(500).json({error:error.message})
    }
})

module.exports=router