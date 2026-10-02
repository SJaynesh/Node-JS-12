const Movies = require("../model/movie.model");
const moment = require('moment');

exports.addMovie = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);

        // add Movie Logic

        req.body.image = req.file.path;
        req.body.created_at = moment().format('DD/MM/YYYY, h:mm:ss a');
        req.body.updated_at = moment().format('DD/MM/YYYY, h:mm:ss a')


        const newMovie = await Movies.create(req.body)

        if (newMovie) {
            return res.status(201).json({
                status: 201,
                message: "Movie added successfully..",
                error: false,
                newMovie
            });
        } else {
            return res.status(400).json({
                status: 400,
                message: "Movie addition failed..",
                error: true,
            });
        }

    } catch (e) {
        console.log("Add Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}

exports.viewAllMovie = async (req, res) => {
    try {
        // Fetch All Movie Logic

        // const allMovies = await Movies.find({}).select('id title description rating release_date budget collection image');
        const allMovies = await Movies.find({});

        return res.status(201).json({
            status: 201,
            message: "Movie feched successfully..",
            error: false,
            allMovies
        });
    } catch (e) {
        console.log("View Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}

exports.updateMovie = async (req, res) => {
    try {
        // update Movie Logic

        console.log(req.params);
        console.log(req.body);

        console.log(req.file);

        if (req.file) {
            req.body.image = req.file.path;
        }

        req.body.updated_at = moment().format('DD/MM/YYYY h:mm:ss a')

        const updatedMovie = await Movies.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (updatedMovie) {
            return res.status(201).json({
                status: 201,
                message: "Movie updated successfully..",
                error: false,
                updatedMovie
            });
        } else {
            return res.status(400).json({
                status: 400,
                message: "Movie updation failed..",
                error: true,
            });
        }

    } catch (e) {
        console.log("Update Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        // Delete Movie Logic

        console.log(req.query);

        const deletedMovie = await Movies.findByIdAndDelete(req.query.id);


        if (deletedMovie) {
            return res.status(201).json({
                status: 201,
                message: "Movie deleted successfully..",
                error: false
            });
        } else {
            return res.status(400).json({
                status: 400,
                message: "Movie deletion failed..",
                error: true
            });
        }


    } catch (e) {
        console.log("Delete Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}

exports.viewSingleMovie = async (req, res) => {
    try {
        // Fetch All Movie Logic

        console.log(req.params);


        const singleMovies = await Movies.findById(req.params.id).select('id title description rating release_date budget collection image');

        if (singleMovies) {
            return res.status(201).json({
                status: 201,
                message: "Movie feched successfully..",
                error: false,
                singleMovies
            });
        } else {
            return res.status(400).json({
                status: 400,
                message: "Movie Not Found..",
                error: true,
            });
        }
    } catch (e) {
        console.log("View Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}

