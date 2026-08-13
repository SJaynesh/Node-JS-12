const express = require('express');
require("./config/db.config");

const app = express();

app.listen(8000, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log("Server is started...");
});