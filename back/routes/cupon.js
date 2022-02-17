'use strict'

var express = require('express');
var cuponController = require('../controllers/CuponController');

var api = express.Router();
var auth = require('../middlewares/authenticate')

api.post('/registro_cupon_admin', [auth.auth, path],cuponController.registro_cupon_admin);



module.exports = api;