const connection = require ("./connection")

let name 
let devoured
let id

function selectAll(){
    return connection.query("SELECT * FROM burger")
}

function insertOne(){
    return connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)", [name, devoured])
}

function updateOne(){
    return connection.query("UPDATE burgers SET id=? WHERE devoured=?", [id, devoured])
}

module.exports = {selectAll, insertOne, updateOne}