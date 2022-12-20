const ProductRepository = require("../repositories/product.repository");
const productRepository = new ProductRepository();

async function createProduct(req, res) {
  try {
    const product = await productRepository.create(req.data);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

async function updateProduct(req, res) {
  try {
    const updatedProduct = await productRepository.update(req.data, req.params);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(updatedProduct));
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProduct,
  updateProduct,
};
