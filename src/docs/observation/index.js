const getObservation = require('./get-observation');
const getObservations = require('./get-observations');
const postObservation = require('./post-observation');

module.exports = {
    '/observations': {
        ...getObservations,
        ...postObservation,
    },
    '/observations/{id}': {
        ...getObservation,
    },
}