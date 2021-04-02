const express = require('express');
const router = express.Router();
const api = require('./restaurant-api')


/* GET home page. */
router.get('/', function(req, res, next) {
  api.get(req.query).then((result) => {
    result.data.pipe(res)
  })
});

router.get('/:id', function(req, res, next) {
  api.getRestaurant(req.params.id).then((result) => {
    result.data.pipe(res)
  })
});

module.exports = router;
