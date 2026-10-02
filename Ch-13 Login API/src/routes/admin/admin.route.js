const express = require('express');
const { adminRegister, adminLogin } = require('../../controller/admin/admin.controller');
const { storage } = require('../../middleware/storage.middleware')

const multer = require('multer');

const upload = multer({ storage });

const adminRoute = express.Router();

adminRoute.post('/register', upload.single('image'), adminRegister);
adminRoute.post('/login', adminLogin);

module.exports = adminRoute;