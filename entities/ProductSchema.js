const EntitySchema = require("typeorm").EntitySchema;
const Product = require("../models/Product").Product;

module.exports = new EntitySchema({
  name: "Product",
  target: Product,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    product_code: {
      type: "integer"
    },
    description: {
      type: "varchar"
    }
  }
});
