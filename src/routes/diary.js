const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();

const idLength = 36;

router.get('/', (req, res) => {
    let diary = req.app.db.get('diary').value();
    return res.send(diary);
});

router.get('/:id', (req, res) => {
    let todo = req.app.db
        .get('diary')
        .find({
            id: req.params.id
        })
        .value();

    if (!todo) {
        res.sendStatus(404);
        return res.send({
            message: "Node cannot be found",
            internal_code: "Invalid id"
        });
    }
    return res.send(todo);
});

router.post('/', (req, res) => {

    let todo = {
        id: nanoid(idLength),
        ...req.body
    };

    try {
        req.app.db.get("diary").push(todo).write();
        return res.sendStatus(201).send("Node saved successfully");
    } catch (error) {
        return res.sendStatus(500).send(error);
    }
});

router.put('/:id', (req, res) => {

    let todo = req.app.db.get("diary").find({
        id: req.params.id
    }).value();

    if (!todo) return res.sendStatus(404);

    try {
        req.app.db.get("diary")
            .find({
                id: req.params.id
            })
            .assign({completed: !todo['completed']})
            .write();
        return res.send("Node updated");
    } catch (error) {
        res.sendStatus(500);
        return res.send(error);
    }
});

router.delete('/:id', (req, res) => {

    let todo = req.app.db.get("diary").find({
        id: req.params.id
    }).value();
    if (!todo) return res.sendStatus(404);

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