const http = require('http');
const fs = require('fs');
const os = require('os');

const server = http.createServer((req, res) => {

    const nets = os.networkInterfaces();

    if (req.url === '/favicon.ico') {
        return;
    }

    fs.appendFile('log.txt', `New User Request : ${req.url} IP : ${nets['Wi-Fi'][1].address} Date & Time : ${new Date()}\n`, () => { });

    const path = req.url; // path = '/contact'
    let file = "";

    switch (path) {
        case '/':
            file = "home.html";
            break;
        case '/about':
            file = "about.html";
            break;
        case '/contact':
            file = "contact.html";
            break;
        default:
            file = "notfound.html";
            break;
    }

    fs.readFile(file, "utf-8", (err, result) => {
        res.end(result);
    });



});

server.listen(8000, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log("Server is started...");
});