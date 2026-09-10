exports.addMovie = (req, res) => {
    try {
        // add Movie Logic
        return res.status(201).json({
            status: 201,
            message: "Movie added successfully..",
            error: false
        });
    } catch (e) {
        console.log("Add Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}

exports.viewAllMovie = (req, res) => {
    try {
        // Fetch All Movie Logic
        return res.status(201).json({
            status: 201,
            message: "Movie feched successfully..",
            error: false
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

exports.updateMovie = (req, res) => {
    try {
        // update Movie Logic
        return res.status(201).json({
            status: 201,
            message: "Movie updated successfully..",
            error: false
        });
    } catch (e) {
        console.log("Update Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}

exports.deleteMovie = (req, res) => {
    try {
        // Delete Movie Logic
        return res.status(201).json({
            status: 201,
            message: "Movie deleted successfully..",
            error: false
        });
    } catch (e) {
        console.log("Delete Movie Exception : ", e);

        return res.status(500).json({
            status: 500,
            message: "Something want wrong...",
            error: true
        });
    }
}



