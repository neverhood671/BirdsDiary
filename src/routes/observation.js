const express = require("express");
const {
    v4: uuidv4,
} = require('uuid');
const {isLoggedIn} = require("../services/auth");
const router = express.Router();

router.get('/', isLoggedIn(), (req, res) => {
    let diary = req.app.db.get('observation').value();
    return res.send(diary);
});

router.get('/:id', isLoggedIn(), (req, res) => {
    let observation = req.app.db
        .get('observation')
        .find({
            id: req.params.id
        })
        .value();

    if (!observation) {
        return res.sendStatus(404);
    }
    return res.send(observation);
});

router.post('/', isLoggedIn(),(req, res) => {

    let observation = {
        id: uuidv4(),
        ...req.body
    };

    try {
        req.app.db.get("observation").push(observation).write();
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
});


router.delete('/:id', isLoggedIn(), (req, res) => {

    let observation = req.app.db.get("observation").find({
        id: req.params.id
    }).value();
    if (!observation) return res.sendStatus(404);

    try {
        req.app.db
            .get("observation")
            .remove({
                id: req.params.id
            })
            .write();
        return res.send("Observation deleted");
    } catch (error) {
        return res.sendStatus(500);
    }
});

module.exports = router;