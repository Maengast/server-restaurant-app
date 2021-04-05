const express = require('express');
const router = express.Router();
const api = require('./restaurant-api')


/* GET home page. */
router.get('/', function(req, res, next) {
  api.get(req.query).then((result) => {
    console.log(result.data)
    res.json(result.data.businesses)
  }).catch((e) => {
    const error = e.response
    console.log(e)
    res.status(error.status).send(error.data.error)
  })
});

router.get('/:id', function(req, res, next) {
  api.getRestaurant(req.params.id).then((result) => {
    console.log(result.data)
    res.json(result.data)
  }).catch((e) =>{
    const error = e.response
    console.log(error.data.error)
    res.status(error.status).send(error.data.error)
  })
});

router.get('/categories', function(req, res, next) {
  api.getCategories(req.query).then((result) => {
    console.log(result.data)
    res.json(result.data.categories)
  }).catch((e) =>{
    const error = e.response
    console.log(error.data.error)
    res.status(error.status).send(error.data.error)
  })
});

module.exports = router;
