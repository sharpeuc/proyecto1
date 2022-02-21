'use strict'

var express = require('express');
var cuponController = require('../controllers/configController');

var api = express.Router();
var auth = require('../middlewares/authenticate')

api.post('/actualiza_config_admin',auth.auth,cuponController.actualiza_config_admin);



module.exports = api;