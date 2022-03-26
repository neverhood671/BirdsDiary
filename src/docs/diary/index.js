const getDiary = require('./get-diary');
const getDiaries = require('./get-diaries');
const postDiary = require('./post-diary');
const deleteDiary = require('./delete-diary');

module.exports = {
    '/diary': {
        ...getDiaries,
        ...postDiary,
    },
    '/diary/{id}': {
        ...getDiary,
        ...deleteDiary,
    },
}