const Router = require('express').Router()
const Controller = require('../controllers/')
const validateKeyHandler = require('../middleware/validateKeyHandler')

Router.post('/food/natural/:keyword', validateKeyHandler, Controller.getFoodByNaturalLanguage)
Router.get('/food/search/common/:name', validateKeyHandler, Controller.getFoodBySearch)
Router.get('/food/search/branded/:name', validateKeyHandler, Controller.getFoodBySearch)
Router.get('/food/detail/:nixid', validateKeyHandler, Controller.getFoodDetailsbyNixID)
Router.post('/exercise/natural', validateKeyHandler, Controller.getExerciseByNaturalLanguage)
Router.get('/restaurant/nearby/',validateKeyHandler, Controller.getRestaurantNearby)
Router.post('/login', Controller.getAccessKey);

module.exports = Router
