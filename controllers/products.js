//moongose.model
const Products = require("../models/product");

const getAllProductsStatic = async (req, res) => {
    // throw new Error("tessting async errors");
    const { name } = req.query;
    if (name) {
        const products = await Products.find({
            name: name,
        });
        return res.status(200).json({ nbHits: products.length, products });
    }
    const products = await Products.find({});
    return res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: `do that` });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic,
};
