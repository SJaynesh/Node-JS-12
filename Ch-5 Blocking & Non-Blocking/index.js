const fs = require('fs');

console.log("1");

// Sync
// const result = fs.readFileSync('demo.txt', "utf-8");
// console.log(result);

// Async
fs.readFile('demo.txt', "utf-8", (error, result) => {
    console.log(result);
});


console.log("2");

