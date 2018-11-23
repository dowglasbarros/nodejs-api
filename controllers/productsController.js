const Product = require('../models/Product').Product;
const connection = require('../database/databaseProducts');

const httpMessages = {
  get: {
    error: 'Ops! Aconteceu um erro :('
  },
  post: {
    error: 'Ops! Aconteceu um erro :('
  }
}

connection.then(connection => {
  let productRepository = connection.getRepository(Product);  

  exports.all = (req, res, next) => {
    return productRepository.find()
      .then(result => {
        res.json(result);
      })
      .catch((error) => {
        res.status(201).send(httpMessages.get.error);
        console.log(error);
      });
  };

  exports.save = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
    return productRepository.save(req.body);
  };

  exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
  };

  exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
  };

});