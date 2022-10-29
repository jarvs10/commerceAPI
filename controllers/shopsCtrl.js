const { getShops, createShop } = require("../services/shopsService");

const getAll = (req, res) => {
    const filter = req.query;
    const {response, httpStatus} = getShops(filter);
    res.status(httpStatus).json(response);
}

const create = (req, res) => {
    const shop = req.body;
    const {response, httpStatus} = createShop(shop);
    res.status(httpStatus).json(response);
}

module.exports = {
    create,
    getAll
}