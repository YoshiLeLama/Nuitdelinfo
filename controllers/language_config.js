const cookieParser = require('cookie-parser')

const setLanguageCookie = (res, code) => {
    res.cookie("lang", code)
}

module.exports = {
    setLanguageCookie
}