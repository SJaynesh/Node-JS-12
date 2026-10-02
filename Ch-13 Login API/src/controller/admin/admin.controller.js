const Admin = require("../../models/admin.model");
const moment = require('moment');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

// $2b$11$udKACNm1QqrNZHya6vQNh.xJ6fAPDScsNUHZotTHVRI5v0CxRiX/e

module.exports.adminRegister = async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);

        const oldAdminWithUserName = await Admin.findOne({ username: req.body.username });

        if (oldAdminWithUserName) {
            return res.status(400).json({
                status: 400,
                message: "Username is already taken",
                error: true
            });
        }

        const oldAdmin = await Admin.findOne({ email: req.body.email });

        if (oldAdmin) {
            return res.status(400).json({
                status: 400,
                message: "Email is already registered",
                error: true
            });
        }

        req.body.image = req.file.path;

        req.body.create_at = moment().format('DD/MM/YYYY, h:mm:ss a');
        req.body.update_at = moment().format('DD/MM/YYYY, h:mm:ss a');

        req.body.password = await bcrypt.hash(req.body.password, 11);

        const newAdmin = await Admin.create(req.body);

        if (newAdmin) {
            return res.status(201).json({
                status: 201,
                message: "Admin registed successfully..",
                error: false,
                newAdmin
            });
        } else {
            return res.status(400).json({
                status: 400,
                message: "Admin registion failed..",
                error: true
            });
        }
    } catch (err) {
        console.log("Register Admin Error : ", err);

        return res.status(500).json({
            status: 500,
            message: "Something went wrong...",
            error: true,
        })
    }
}

module.exports.adminLogin = async (req, res) => {
    try {

        console.log(req.body);

        const myAdmin = await Admin.findOne({ email: req.body.email })

        if (!myAdmin) {
            return res.status(400).json({
                status: 400,
                message: "Email is not found",
                error: true
            });
        }

        console.log(myAdmin);

        const isLogin = await bcrypt.compare(req.body.password, myAdmin.password);

        if (isLogin) {

            // JWT Token

            const payload = {
                id: myAdmin.id,
                username: myAdmin.username,
                role: "Admin"
            }

            const token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: "24h"
            });

            return res.status(200).json({
                status: 200,
                message: "Admin login successfully..",
                error: false,
                token
            })
        } else {
            return res.status(400).json({
                status: 400,
                message: "Password is wrong..",
                error: true
            })
        }


    } catch (err) {
        console.log("Register Admin Error : ", err);

        return res.status(500).json({
            status: 500,
            message: "Something went wrong...",
            error: true,
        })
    }
}