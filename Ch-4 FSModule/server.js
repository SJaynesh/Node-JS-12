/*

Node JS => V8 + CPP => Run Time Envirement


    FS (Core Module)

    => FS stand for File System.
    => FS module use of File Handling.
    

    File Handling :
        - New File Create
        - Write the File
        - Read the File
        - Append the File
        - Delete the File
        - Copy the file
        etc...

        File Mode : 
            W - Write 💹
            R - Read
            A - Append 💹
*/

const fs = require("fs");

// Sync
// fs.writeFileSync("./log.txt", "Hello Node JS");



// Async
// fs.writeFile("./demo.txt", "Hello FS Module", (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// fs.writeFile("./demo.txt", "Hello JavaScript", (err) => {
//     if (err) {
//         console.log(err);
//     }
// });

// Sync
fs.appendFileSync("./demo.txt", "Hello Jaynesh Sarkar " + new Date().toLocaleString() + "\n");

// Async
fs.appendFile("./log.txt", "Login " + new Date().toLocaleString() + "\n", (err) => {
    if (err) {
        console.log(err);
    }
});