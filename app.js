const bodyParser = require("body-parser");

// express
const express = require("express");
const app = express();
const router = express.Router();

// routes
const index = require('./routes/index');
const productsRoute = require('./routes/productsRoute');

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use(bodyParser.json());
app.use('/', index);
app.use('/products', productsRoute);

module.exports = app;

 