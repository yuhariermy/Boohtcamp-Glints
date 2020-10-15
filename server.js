const express = require("express");
const app = express();
const getNote = require("./Routes/getNote")
const addNote = require("./Routes/addNote")
const editNote = require("./Routes/editNote")
const deleteNote = require("./Routes/deleteNote")
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(getNote);
app.use(addNote);
app.use(editNote);
app.use(deleteNote);

app.get("/", (req, res) => 
  res.send("hello world!")
);

app.listen(3000, () => {
  console.log(`server is listening on http://localhost:3000`);
});

module.exports = app