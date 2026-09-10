const express = require('express');

const route = express.Router();

route.use('/movie', require('./movie.route'));

module.exports = route;