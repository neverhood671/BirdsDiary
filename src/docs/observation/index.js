const getObservation = require('./get-observation');
const getObservations = require('./get-observations');
const postObservation = require('./post-observation');
const deleteObservation = require('./delete-observation');

module.exports = {
    '/observation': {
        ...getObservations,
        ...postObservation,
    },
    '/observation/{id}': {
        ...getObservation,
        ...deleteObservation,
    },
}