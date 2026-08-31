require('dotenv').config();

const express = require('express');

require('./config/db.config');


const userModel = require('./model/user.model');
const { validatorList, validation } = require('./middleware/validator.middleware');

const app = express();


// Built-In Middleware
app.use(express.urlencoded());
app.use(express.json());


// APIs


// Insert User API
app.post('/addUser', validatorList, validation, (req, res) => {
    console.log("User Body : ", req.body);

    userModel.create(req.body).then(() => {
        return res.status(201).json({ status: 201, message: "User added successfully...", error: false });
    }).catch((error) => {
        console.log('Insert User Error : ', error);
        return res.status(400).json({ status: 400, message: "User addtion failed...", error: true });
    });
});

// Fetch All Users API
app.get('/allUsers', (req, res) => {

    userModel.find({}).then((result) => {
        console.log("All Users : ", result);
        return res.status(200).json({ status: 200, message: "All users fetch successfully...", allUsers: result, error: false, totalUsers: result.length });
    }).catch((error) => {
        console.log("Fetch Error : ", error);
        return res.status(400).json({ message: "All users fetched failed...", error: true });
    });
});

// Delete User API
app.delete('/deleteUser', (req, res) => {
    console.log(req.query.id);

    userModel.findById(req.query.id).then((result) => {

        console.log("Delete : ", result);

        if (result != null) {
            userModel.findByIdAndDelete(req.query.id).then(() => {
                return res.status(200).json({ status: 200, message: "User deleted successfully.", error: false });
            }).catch((error) => {
                console.log("Deletion Error : ", error);
                return res.status(400).json({ message: "User deletion failed...", error: true });
            });
        } else {
            return res.status(404).json({ status: 404, message: "User not found...", error: true });
        }

    }).catch((error) => {
        console.log("Find User Deletion Error : ", error);
        return res.status(404).json({ message: "User not found...", error: true });
    });

});

// Update User API
app.patch('/updateUser/:userID', (req, res) => {
    console.log(req.params); // {userID : 6a87ff5aa918b47f9da23c83}

    userModel.findByIdAndUpdate(req.params.userID, req.body).then(() => {
        return res.status(200).json({ status: 200, message: "User updated successfully.", error: false });
    }).catch((error) => {
        console.log("User Updation Error : ", error);
        return res.status(400).json({ message: "User updation failed..", error: true });
    });
});

// Single User Fetch API
app.get('/singleUser', (req, res) => {
    return res.json({ message: "Single Student fetched successfully.." });
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("Error : ", err);
        return;
    }
    console.log("Server is started...");
});