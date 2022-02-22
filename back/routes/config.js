'use strict'

var express = require('express');
var configController = require('../controllers/configController');

var api = express.Router();
var auth = require('../middlewares/authenticate')


api.post('/actualiza_config_admin',auth.auth,configController.actualiza_config_admin);




module.exports = api;