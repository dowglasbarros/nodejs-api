const getRepository = require("typeorm");
const Product = require("../models/Product").Product;
const connection = require("../database/databaseProducts");

// import {NextFunction, Request, Response} from "express";
// const productRepository = getRepository(Product);

connection.then(connection => {
  const productRepository = connection.getRepository(Product);  

  exports.all = (req, res, next) => {
    // res.status(201).send('Requisição recebida com sucesso!');
    return productRepository.find()
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log(error));
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