const Product = require("../model/product.model");


const addProduct = async (req, res) => {

    console.log(req.body);
    console.log(req.file);


    req.body.image = req.file.path;

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
        total: allProducts.length,
        allProducts
    });
}

const updateProduct = async (req, res) => {
    console.log(req.params.productId);
    console.log(req.body);

    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });

    if (updateProduct) {
        return res.status(200).json({ status: 200, message: "Product updated successfully...", error: false, updatedProduct });
    } else {
        return res.status(400).json({
            status: 400,
            message: "Product updation failed...",
            error: true,
        });
    }

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