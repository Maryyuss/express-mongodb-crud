const Product = require("../models/product.model.js");

//get all products
const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        if (product.length === 0) {
            return res.status(404).json({ message: "no product found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get product by id
const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }

}

//create product
const createProduct = async (req, res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(201).json({message: "Product is created successfully.",product});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//update product
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json({message: "Product is updated successfully.", updatedProduct});

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

//delete product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product Deleted Successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts, getProduct, createProduct, updateProduct, deleteProduct
};

