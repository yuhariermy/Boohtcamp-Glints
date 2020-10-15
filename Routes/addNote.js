const express = require('express')
const db = require('../Controller/dbController')

const app = express.Router()

// TODO 3. uncomment the route handler 
// TODO 3. cut all of db codes for adding data to dbController and make a add function with it
// TODO 7. use db add function
app.post('/notes', (req, res) => {
  const body = req.body
  const id = body.id
  const isIdAvailable = db.get(id)
  if (isIdAvailable) {
    res.status(409).send('ID Exists')
  } else {
    db.add(body)
    res.send(body)
  }
})

module.exports = app