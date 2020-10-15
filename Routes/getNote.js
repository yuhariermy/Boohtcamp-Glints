const express = require("express");
const db = require("../Controller/dbController")

const app = express.Router();

app.get("/notes", (req, res) => {
    const result = db.getAll();
    res.send(result);
});

module.exports = app