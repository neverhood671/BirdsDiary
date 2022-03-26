const singIn = require('./singin')
const singUp = require("./singup");

module.exports = {
    '/user/singin': {
        ...singIn,
    },
    '/user/singup': {
        ...singUp,
    }
}

