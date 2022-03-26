const basicInfo = require('./basicInfo')
const servers = require('./servers')
const components = require('./components')
const observations = require('./observation')
const diaries = require('./diary')
const users = require('./user')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    paths: {
        ...users,
        ...observations,
        ...diaries,
    },
};