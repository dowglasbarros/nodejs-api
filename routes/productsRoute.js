const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController')
const connection = require('../database/databaseProducts');

connection.then(connection => {
  router.get('/', controller.all);

  router.post('/', controller.save);

  router.put('/:id', controller.put);

  router.delete('/:id', controller.delete);
});

module.exports = router;