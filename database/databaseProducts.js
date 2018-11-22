const typeorm = require("typeorm");

const connection = typeorm.createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "test",
  entities: [
    require("../entities/ProductSchema")
  ],
  synchronize: true,
  logging: false
})

module.exports = connection;