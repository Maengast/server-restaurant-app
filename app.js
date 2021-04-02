const express = require('express');

const restaurantRouter = require('./routes/restaurants');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/', restaurantRouter);

module.exports = app;
