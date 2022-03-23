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
        res.sendStatus(404);
        return res.send({
            message: "Node cannot be found",
            internal_code: "Invalid id"
        });
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
        return res.sendStatus(201).send("Node saved successfully");
    } catch (error) {
        return res.sendStatus(500).send(error);
    }
});

router.put('/:id', (req, res) => {

    let observation = req.app.db.get("diary").find({
        id: req.params.id
    }).value();

    if (!observation) return res.sendStatus(404);

    try {
        req.app.db.get("diary")
            .find({
                id: req.params.id
            })
            .assign({completed: !observation['completed']})
            .write();
        return res.send("Node updated");
    } catch (error) {
        res.sendStatus(500);
        return res.send(error);
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
        return res.send("Node deleted");
    } catch (error) {
        return res.sendStatus(500);
    }
});

module.exports = router;