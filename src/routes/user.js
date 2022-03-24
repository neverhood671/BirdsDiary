const express = require("express");
const {
    v4: uuidv4,
} = require('uuid');
const bcrypt = require("bcryptjs");
const router = express.Router();

function hashPassword(plaintextPassword) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plaintextPassword, salt);
}

function comparePassword(plaintextPassword, hashPassword) {
    return bcrypt.compareSync(plaintextPassword, hashPassword);
}

router.post('/', (req, res) => {

    const usernames = req.app.db.get('user').map('nickname').value()
    const isUsernameTaken = usernames.includes(req.body.username)

    if (isUsernameTaken) return res.sendStatus(409).send("This username is already taken")

    const diary = {
        id: uuidv4(),
        author: req.body.nickname,
        password: hashPassword(req.body.password)
    };

    try {
        req.app.db.get("user").push(diary).write();
        return res.sendStatus(201).send("User has been created");
    } catch (error) {
        return res.sendStatus(500).send(error);
    }
});

module.exports = router;