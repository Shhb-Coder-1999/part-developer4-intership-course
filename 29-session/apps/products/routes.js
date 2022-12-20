const productController = require("./controller/productController");
const getData = require("./middlewares/getData");

const routes = [
  {
    url: "createProduct",
    method: "POST",
    controller: productController.createProduct,
    middlewares: [],
  },

  {
    url: "upload",
    method: "GET",
    controller: productController.uploadForm,
    middlewares: [],
  },

  {
    url: "upload",
    method: "POST",
    controller: productController.uploadedFile,
    middlewares: getData,
  },
];

module.exports = routes;
