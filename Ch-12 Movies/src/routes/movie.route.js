const express = require('express');
const { addMovie, viewAllMovie, updateMovie, deleteMovie } = require('../controller/movie.controller');

const movieRoute = express.Router();

movieRoute.post('/', addMovie);
movieRoute.get('/', viewAllMovie);
movieRoute.patch('/', updateMovie);
movieRoute.delete('/', deleteMovie);

module.exports = movieRoute;