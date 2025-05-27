const route=require('express').Router();
const appController = require('../controllers/app.controller');

route.get('/',appController.welcome);
route.get('/about-us',appController.aboutUs);

module.exports = route;