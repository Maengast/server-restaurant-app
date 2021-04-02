const express = require('express');
const router = express.Router();
const api = require('./restaurant-api')


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hey")
  api.get(req.query).then((result) => {
    console.log(res)
    result.data.pipe(res)
  }).catch((e) => {
    console.log(e)
  })
});

router.get('/:id', function(req, res, next) {
  api.getRestaurant(req.params.id).then((result) => {
    result.data.pipe(res)
  })
});

module.exports = router;
