require('dotenv').config();

const express = require('express');

require('./config/db.config');

const app = express();

app.use('/api', require('./routes/'));

// POST : http://localhost:8000/api/movie/
// GET : http://localhost:8000/api/movie/
// PATCH : http://localhost:8000/api/movie/
// DELETE : http://localhost:8000/api/movie/

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("Error :", err);
        return;
    }
    console.log("Server is started...");
});