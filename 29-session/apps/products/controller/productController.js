const ProductRepository = require("../repositories/product.repository");
const productRepository = new ProductRepository();
const util = require("util");

async function createProduct(req, res) {
  try {
    const product = await productRepository.create(req.data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error);
  }
}

function uploadForm(req, res) {
  try {
    const musicUpload =
      '<form action="./upload" enctype="multipart/form-data" method="POST">' +
      '<input type="text" name="category" value="">' +
      '<input type="file" id="myFile" name="filename">' +
      '<input type="submit">' +
      "</form>";

    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-control-Allow-Headers": "",
      "Access-control-Allow-Origin": "",
    });
    res.end(musicUpload);
  } catch (error) {
    console.log(error);
  }
}

function uploadedFile(req, res) {
  try {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-control-Allow-Headers": "",
      "Access-control-Allow-Origin": "",
    });

    res.write("recevied upload: \n\n");
    console.log("recevied upload form:", req.fields, req.files);
    console.log("recevied upload json:", req.body);
    console.log("recevied upload params:", req.params);

    res.end(
      util.inspect({
        fields: req.fields,
        files: req.files,
        body: req.body,
        params: req.params,
        querystring: req.querystring,
      })
    );
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProduct,
  uploadForm,
  uploadedFile,
};
