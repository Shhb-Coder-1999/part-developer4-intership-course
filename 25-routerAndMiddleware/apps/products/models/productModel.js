class product {
  constructor(name, description, price) {
    this.id = this.uuid();
    this.name = name;
    this.description = description;
    this.price = price;
  }

  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}

module.exports = product;
