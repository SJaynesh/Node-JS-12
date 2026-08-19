const express = require('express');

require('./config/db.config');

const app = express();

app.use(express.urlencoded());

// APIs

// Insert User API
app.post('/addUser', (req, res) => {
    console.log(req.body);
    return res.json({ message: "Student added successfully.." });
});

// Fetch All Users API
app.get('/allUsers', (req, res) => {
    return res.json({ message: "All Student fetched successfully.." });
});

// Delete User API
app.delete('/deleteUser', (req, res) => {
    return res.json({ message: "Student deleted successfully.." });
});

// Update User API
app.patch('/updateUser', (req, res) => {
    return res.json({ message: "Student updated successfully.." });
});

// Single User Fetch API
app.get('/singleUser', (req, res) => {
    return res.json({ message: "Single Student fetched successfully.." });
});

app.listen(8000, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log("Server is started...");
});