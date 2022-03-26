const express = require("express");
const {
    v4: uuidv4,
} = require('uuid');
const router = express.Router();

router.get('/', (req, res) => {
    let diary = req.app.db.get('diary').value();
    return res.send(diary);
});

router.get('/:id', (req, res) => {
    let observation = req.app.db
        .get('diary')
        .find({
            id: req.params.id
        })
        .value();

    if (!observation) {
        return res.sendStatus(404);
    }
    return res.send(observation);
});

router.post('/', (req, res) => {

    let observation = {
        id: uuidv4(),
        ...req.body
    };

    try {
        req.app.db.get("diary").push(observation).write();
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(500);
    }
});

router.delete('/:id', (req, res) => {

    let observation = req.app.db.get("diary").find({
        id: req.params.id
    }).value();
    if (!observation) return res.sendStatus(404);

    try {
        req.app.db
            .get("diary")
            .remove({
                id: req.params.id
            })
            .write();
        return res.send("Diary deleted");
    } catch (error) {
        return res.sendStatus(500);
    }
});

module.exports = router;