const getPrediction = require('./get-prediction');

module.exports = {
    '/prediction?year={year}&month={month}&day={day}&regionCode={regionCode}': {
        ...getPrediction,
    },
}