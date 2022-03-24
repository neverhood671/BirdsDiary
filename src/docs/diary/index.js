const postDiary = require('./post-diary');

module.exports = {
    '/diaries': {
        ...postDiary
    },
}