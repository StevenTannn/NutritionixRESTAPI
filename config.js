require('dotenv').config()

module.exports = {
    ApiEndpoint: {
        ApiUrl: process.env.API_URL,
        token: process.env.API_KEY,
        AppID: process.env.API_APP_ID,
    },
    port: process.env.PORT,
    jwtKey: process.env.JWT_KEY,
}
