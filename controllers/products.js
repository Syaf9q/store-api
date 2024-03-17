//moongose.model
const Products = require("../models/product");

const getAllProducts = (req, res) => {
    throw new Error("error happened");
    res.status(200).json({ msg: `do this` });
};
const getAllProductsStatic = (req, res) => {
    res.status(200).json({ msg: `do that` });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic,
};
