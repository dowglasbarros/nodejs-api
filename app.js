const typeorm = require("typeorm");

const express = require("express");
const app = express();
const router = express.Router();

typeorm.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "test",
    entities: [
        
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

//Rotas
const index = require('./routes/index');
const productsRoute = require('./routes/productsRoute');

app.use('/', index);
app.use('/products', productsRoute);

module.exports = app;

 