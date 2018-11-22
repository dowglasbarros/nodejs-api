class Product {
  constructor(id, product_code, description) {
    this.id = id;
    this.product_code = product_code;
    this.description = description;
}
}

module.exports = {
  Product: Product
};