const getRecognition = require('./get-recognition');

module.exports = {
    '/recognition?desc={desc}': {
        ...getRecognition,
    },
}