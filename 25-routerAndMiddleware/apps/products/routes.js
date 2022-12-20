const productController = require("./controller/productController");
const validation = require("../products/middlewares/validation");

const routes = [
  {
    url: "createProduct",
    method: "POST",
    controller: productController.createProduct,
    middlewares: [validation],
  },

  {
    url: "updateProduct",
    method: "PUT",
    controller: productController.updateProduct,
    middlewares: [],
  },
];

module.exports = routes;
