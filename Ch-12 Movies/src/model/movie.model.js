const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    realse_date: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    collection: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    },
    updated_at: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Movies", movieSchema, "Movies");