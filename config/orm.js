const db = require ("./connection")

let name 
let devoured
let id

function selectAll(){
    return db.query("SELECT * FROM burger")
}

function insertOne(){
    return db.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)", [name, devoured])
}

function updateOne(){
    return db.query("UPDATE burgers SET id=? WHERE devoured=?", [id, devoured])
}

module.exports = {selectAll, insertOne, updateOne}