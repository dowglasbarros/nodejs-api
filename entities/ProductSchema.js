const EntitySchema = require("typeorm").EntitySchema;
const Product = require("../models/Product").Product;

module.exports = new EntitySchema({
  name: "Product",
  target: Product,
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid"
    },
    product_code: {
      type: "integer"
    },
    description: {
      type: "varchar"
    }
  }
});
