const getTodo = require('./get-observation');

module.exports = {
    paths:{
        '/todos/{id}':{
            ...getTodo,
        }
    }
}