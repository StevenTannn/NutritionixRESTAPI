const NutrixAPI = require('../modules')
const jwt = require('jsonwebtoken')
const { jwtKey } = require('../config')
const { InvalidCredentials } = require('../error')
const faker = require('faker/locale/en_US')

exports.getFoodByNaturalLanguage = async (query) => {
    const { data } = await NutrixAPI.APIPOST(`/natural/nutrients/`, {
        query: query,
    })
    return data.foods
}

exports.getFoodBySearch = async (name, branded) => {
    const { data } = await NutrixAPI.APIGET(`/search/instant?query=${name}&branded=${branded}`)
    return branded === true ? data.branded : data.common
}

exports.getFoodDetailsbyNixID = async (nixid) => {
    const { data } = await NutrixAPI.APIGET(`/search/item?nix_item_id=${nixid}`)
    return data.foods
}

exports.getExerciseByNaturalLanguage = async (query) => {
    const { data } = await NutrixAPI.APIPOST(`/natural/exercise/`, query)
    return data.exercises
}

exports.getRestaurantNearby = async () => {
    const lat = faker.address.latitude(38.89, 38.9, 10)
    const lng = faker.address.longitude(-77.02, -77.03, 10)
    const { data } = await NutrixAPI.APIGET(`locations?ll=${lat},${lng}&distance=50m&limit=1`)
    return data.location
}

exports.getAccessKey = (user) => {
    if (!user) return InvalidCredentials
    return jwt.sign({ user }, jwtKey)
}

exports.isAccessKeyValidate = (token) => {
    try {
        jwt.verify(token, jwtKey)
        return true
    } catch (err) {
        return false
    }
}
