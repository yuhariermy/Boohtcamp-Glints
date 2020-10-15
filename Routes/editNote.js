const express = require("express");
const db = require("../Controller/dbController")
const app = express.Router();

app.patch('/notes', function (req, res){
    const body = req.body;
    const id = req.query.id;
    const idDuplicated = db.get(id)

    if (idDuplicated) {
        db.edit(id,body);
        res.send(body)
    } else {
        res.status(404).json('ID is not found');
    }
})

module.exports = app