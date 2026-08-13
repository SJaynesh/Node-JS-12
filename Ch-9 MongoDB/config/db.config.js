const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/School").then(() => {
    console.log("DB is connected...");
}).catch((error) => {
    console.log("DB is not connected...");
    console.log("Error : ", error);
});