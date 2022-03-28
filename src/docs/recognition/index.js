const getRecognition = require('./get-recognition');

module.exports = {
    '/recognition?description={description}': {
        ...getRecognition,
    },
}