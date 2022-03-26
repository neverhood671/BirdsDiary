const express = require("express");
const passport = require('passport');
const {
    v4: uuidv4,
} = require('uuid');
const bcrypt = require("bcryptjs");
const router = express.Router();

function hashPassword(plaintextPassword) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plaintextPassword, salt);
}

router.post('/singup', (req, res) => {
    const db = req.app.db
    const usernames = db.get('user').map('username').value()
    const isUsernameTaken = usernames.includes(req.body.username)

    if (isUsernameTaken) return res.sendStatus(409).send("This username is already taken")

    const user = {
        id: uuidv4(),
        username: req.body.username,
        password: hashPassword(req.body.password)
    };

    try {
        db.get("user").push(user).write();
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
});

router.post(
    '/singin',
    (req, res, next) => passport.authenticate(
        'local',
        function(err, user, info) {
            if (err) return res.status(500).send();
            if (!user) return res.status(400).json({error:info});
            req.logIn(user, function(err) {
                if (err) return next(err);
                return res.status(200).json('You are logged in!');
            });
        })(req, res, next)
)

module.exports = router;