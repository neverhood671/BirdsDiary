const basicInfo = require('./basicInfo')
const servers = require('./servers')
const components = require('./components')
const observations = require('./observations')

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...observations,
};