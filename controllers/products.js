//moongose.model
const Products = require("../models/product");

const getAllProductsStatic = async (req, res) => {
    // throw new Error("tessting async errors");

    const products = await Products.find({
        name: "wooden table",
    });
    res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
    const products = await Products.find(req.query);
    res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic,
};
