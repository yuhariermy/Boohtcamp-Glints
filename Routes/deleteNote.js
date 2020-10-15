const express = require("express");
const db = require("../Controller/dbController");
const app = express.Router();

app.delete("/notes", (req, res) => {
    const query = req.query;
    const id = query.id
    const parseId = parseInt(id);
    // handler error Message for Delete
    const idDuplicated = db.get(id)
    if (idDuplicated) {
        db.remove(id);
        res.send('Ok')
    } else {
        res.status(404).json('ID is not found');
    }
});

module.exports = app