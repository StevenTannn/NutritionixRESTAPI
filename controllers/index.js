const Services = require('../services')

exports.getFoodByNaturalLanguage = async (req, res, next) => {
    try {
        const { keyword } = req.params
        const result = await Services.getFoodByNaturalLanguage(keyword)
        res.send(result)
    } catch (error) {
        next(error)
    }
}

exports.getFoodBySearch = async (req, res, next) => {
    try {
        const path = req.path
        const branded = path.includes('common') ? false : true
        const { name } = req.params
        const result = await Services.getFoodBySearch(name, branded)
        res.send(result)
    } catch (error) {
        next(error)
    }
}

exports.getFoodDetailsbyNixID = async (req, res, next) => {
    try {
        const { nixid } = req.params
        const result = await Services.getFoodDetailsbyNixID(nixid)
        res.send(result)
    } catch (error) {
        next(error)
    }
}

exports.getExerciseByNaturalLanguage = async (req, res, next) => {
    try {
        const query = req.body
        const result = await Services.getExerciseByNaturalLanguage(query)
        res.send(result)
    } catch (error) {
        next(error)
    }
}

exports.getAccessKey = (req, res, next) => {
    try {
        const { user } = req.body
        const token = Services.getAccessKey(user)
        res.send(token)
    } catch (error) {
        next(error)
    }
}

exports.getRestaurantNearby = async (req, res, next) => {
    try {
        const result = await Services.getRestaurantNearby()
        res.send(result)
    } catch (error) {
        next(error)
    }
}
