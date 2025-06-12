const route=require('express').Router();
const appController = require('../controllers/task.controller');

route.get('/',appController.home);
route.get('/properties',appController.properties);
route.get('/property-details',appController.propertyDetails);
route.get('/contact-us',appController.contactUs);
route.get('/form',appController.getForm);
route.post('/submit-form',appController.submitForm);

module.exports = route;