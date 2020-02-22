const routes = require('express').Router();
const controller = require('../controllers/controllers');


routes.get('/',controller.list);



module.exports = routes;