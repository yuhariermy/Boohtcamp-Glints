// TODO 1. install lowdb
// google keyword "file database nodejs"
// https://github.com/typicode/lowdb

// handle GET request for root route
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({ notes: [] }).write();

function getAll(){
    return db.get("notes").value(); 
}
function get(id){
    const parseId = parseInt(id);
    return db.get("notes").find({ id:parseId }).value(); 
}

function edit(id, body) {
  const parsedId = parseInt(id)
  db.get('notes')
    .find({ id: parsedId })
    .assign(body)
    .write()
}

function add(body){
    return db.get("notes").push(body).write(); 
}

function remove(id){
    const parseId = parseInt(id);
    db.get('notes').remove({id:parseId}).write()
}

const functions = {get,getAll, edit, add, remove}
module.exports = functions