const Axios = require('axios')
const config = require('../config')

const api = Axios.create({
    baseURL: config.ApiEndpoint.ApiUrl,
    headers: { 'x-app-id': config.ApiEndpoint.AppID, 'x-app-key': config.ApiEndpoint.token },
})
/**
 * @description create GET request to NutrixAPI using axios
 * @param {string} url
 * @param {object} query
 * @returns {Promise} axios result
 */
exports.APIGET = (url) => {
    return api.get(`${url}`)
}

exports.APIPOST = (url, query) => {
    return api.post(`${url}`, query)
}
