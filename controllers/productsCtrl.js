const { getProducts, createProduct } = require("../services/productsService");

const getAll = (req, res) => {
    const filter = req.query;
    const {response, httpStatus} = getProducts(filter);
    res.status(httpStatus).json(response);
}

const create = (req, res) => {
    const shop = req.body;
    const {response, httpStatus} = createProduct(shop);
    res.status(httpStatus).json(response);
}

module.exports = {
    create,
    getAll
}