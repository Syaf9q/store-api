//moongose.model
const Products = require("../models/product");

const getAllProductsStatic = async (req, res) => {
    // throw new Error("tessting async errors");
    const products = await Products.find({}).select("name price").limit(4);
    res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields } = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    // if (sort) {
    //     queryObject.sort = sort;
    // }
    // console.log(queryObject);
    let result = Products.find(queryObject);
    if (sort) {
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList);
        console.log(sortList);
    } else {
        result = result.sort("createdAt");
    }

    if (fields) {
        const fieldsList = fields.split(",").join(" ");
        result = result.select(fieldsList);
    }

    const products = await result;

    res.status(200).json({ nbHits: products.length, products });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic,
};
