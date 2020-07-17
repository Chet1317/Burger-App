const connection = require ("./connection")



function selectAll(){
    return connection.query("SELECT * FROM burgers")
}

function insertOne(name, devoured){
    return connection.query("INSERT INTO burgers(burger_name, devoured) VALUES (?,?)", [name, devoured])
}

function updateOne(id, devoured){
    return connection.query("UPDATE burgers SET id=? WHERE devoured=?", [id, devoured])
}

module.exports = {selectAll, insertOne, updateOne}