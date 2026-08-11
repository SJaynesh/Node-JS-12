const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {

    fs.readFile("home.html", "utf-8", (err, result) => {
        res.end(result);
    });

});

app.get('/about', (req, res) => {
    res.end("About Page");
});

app.get('/contact', (req, res) => {
    res.end("Contact Page");
});

app.listen(8000, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log("Server is started...");
});