const products = require("../data/products.json");
const path = require("path");
const fs = require("fs");

class product {
  static idCntr = 6;
  constructor(name, description, price) {
    this.id = product.idCntr;
    this.name = name;
    this.description = description;
    this.price = price;
    product.idCntr++;
  }
}

module.exports = product;
