const http = require('http');


const server = http.createServer((req, res) => {
    res.write("<h1 align='center'> Hello Custom Server </h1>");

    res.end();

});


server.listen(8000, (error) => {
    if (error) {
        console.log("Error : ", error);
        return;
    }
    console.log("Server is started on port 8000");
});