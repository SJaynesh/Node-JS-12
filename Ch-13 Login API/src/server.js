require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 8000;

require('./config/db.config');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/api', require('./routes/'));

// http://localhost:8000/api/admin/register : POST
// http://localhost:8000/api/admin/login : POST

// http://localhost:8000/api/user/register
// http://localhost:8000/api/user/login

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log("Server is started..");
});