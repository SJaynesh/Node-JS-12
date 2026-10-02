const express = require('express');

const route = express.Router();

route.use('/admin', require('./admin/admin.route'));
route.use('/user', require('./user/user.route'));

module.exports = route;