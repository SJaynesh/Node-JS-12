const express = require('express');
const { addMovie, viewAllMovie, updateMovie, deleteMovie, viewSingleMovie } = require('../controller/movie.controller');
const { storage } = require("../middleware/storage.middleware");
const movieRoute = express.Router();

const multer = require('multer');
const upload = multer({ storage });

movieRoute.post('/', upload.single('image'), addMovie);
movieRoute.get('/', viewAllMovie);
movieRoute.patch('/:id', upload.single('image'), updateMovie);
movieRoute.delete('/', deleteMovie);
movieRoute.get('/:id', viewSingleMovie)

module.exports = movieRoute;