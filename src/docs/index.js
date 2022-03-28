const basicInfo = require('./basicInfo')
const servers = require('./servers')
const components = require('./components')
const observations = require('./observation')
const diaries = require('./diary')
const users = require('./user')
const prediction = require('./prediction')
const recognition = require('./recognition')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    paths: {
        ...recognition,
        ...prediction,
        ...observations,
        ...diaries,
        ...users,
    },
};