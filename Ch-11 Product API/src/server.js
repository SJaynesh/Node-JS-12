require('dotenv').config();
const express = require('express');

require("./config/db.config");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/', require('./routes/'));

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log("Server is started...");
});