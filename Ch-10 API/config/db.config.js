const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/User-Management-System").then(() => {
    console.log("DB is connected...");
}).catch((err) => {
    console.log("DB is not connected...");
    console.log("Error : ", err);
});