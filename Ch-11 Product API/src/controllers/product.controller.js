
const addProduct = (req, res) => {
    return res.status(200).json({ message: "Product added successfully..." });
}

const viewAllProducts = (req, res) => {
    return res.status(200).json({ message: "All Products fetched successfully..." });
}

const updateProduct = (req, res) => {
    return res.status(200).json({ message: "Product updated successfully..." });
}

const deleteProduct = (req, res) => {
    return res.status(200).json({ message: "Product deleted successfully..." });
}


module.exports = { addProduct, viewAllProducts, updateProduct, deleteProduct };