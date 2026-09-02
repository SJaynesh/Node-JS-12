const Product = require("../model/product.model");


const addProduct = async (req, res) => {

    console.log(req.body);

    const newProduct = await Product.create(req.body);

    if (newProduct) {
        return res.status(201).json({
            status: 201,
            message: "Product added successfully...",
            error: false,
            product: newProduct
        });
    } else {
        return res.status(400).json({
            status: 400,
            message: "Product addtion failed...",
            error: true,
        });
    }
}

const viewAllProducts = async (req, res) => {

    const allProducts = await Product.find();

    return res.status(200).json({
        status: 200,
        message: "All Products fetched successfully...",
        error: false,
        allProducts
    });
}

const updateProduct = (req, res) => {
    return res.status(200).json({ message: "Product updated successfully..." });
}

const deleteProduct = async (req, res) => {
    console.log(req.query.productId);

    const deletedProduct = await Product.findByIdAndDelete(req.query.productId);

    if (deletedProduct) {
        return res.status(200).json({
            status: 200,
            message: "Product deleted successfully...",
            error: false,
        });
    } else {
        return res.status(400).json({
            status: 400,
            message: "Product deletion failed",
            error: true,
        });
    }
}


module.exports = { addProduct, viewAllProducts, updateProduct, deleteProduct };