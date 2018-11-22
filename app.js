const bodyParser = require("body-parser");
// const typeorm = require("typeorm");

const express = require("express");
const app = express();
app.use(bodyParser.json());
const router = express.Router();

const connection = require("./database/databaseProducts");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// routes
const index = require('./routes/index');
const productsRoute = require('./routes/productsRoute');

app.use('/', index);
app.use('/products', productsRoute);

module.exports = app;

 