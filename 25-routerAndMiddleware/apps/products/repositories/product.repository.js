const Product = require("../models/productModel");
const profilesDataStore = require("../data/products.json");
const path = require("path");
const fs = require("fs");

class product {
  async fetchAll() {
    const products = [];
    for (let product of profilesDataStore) {
      let productModel = new Product(
        product.id,
        product.description,
        product.price
      );
      products.push(productModel);
    }
    return products;
  }

  create(data) {
    return new Promise((resolve, reject) => {
      const product = new Product(data.name, data.description, data.price);

      profilesDataStore.push(product);

      fs.writeFile(
        __dirname +
          path.sep +
          ".." +
          path.sep +
          "data" +
          path.sep +
          "products.json",
        JSON.stringify(profilesDataStore, null, 2),
        function (err) {
          console.log(err);
        }
      );
      resolve(product);
    });
  }

  update(data, params) {
    return new Promise((resolve, reject) => {
      let updatedUser = {};
      profilesDataStore.forEach((element) => {
        if (params.id == element.id) {
          Object.assign(element, data);
          updatedUser = element;
        }
      });

      fs.writeFile(
        __dirname +
          path.sep +
          ".." +
          path.sep +
          "data" +
          path.sep +
          "products.json",
        JSON.stringify(profilesDataStore, null, 2),
        function (err) {
          console.log(err);
        }
      );

      resolve(updatedUser);
    });
  }
}

module.exports = product;
