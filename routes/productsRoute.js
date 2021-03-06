const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController')
const connection = require('../database/productsDatabase');

connection.then(connection => {
  router.get('/', controller.all);

  router.get('/:product_code', controller.one);

  router.post('/', controller.save);

  // router.put('/:id', controller.put);

  // router.delete('/:id', controller.delete);
});

module.exports = router;