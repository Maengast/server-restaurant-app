const express = require('express');

const restaurantRouter = require('./routes/restaurants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', restaurantRouter);

module.exports = app;
