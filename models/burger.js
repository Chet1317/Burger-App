const orm = require( '../config/orm' )

let burgerList 

async function burgerAvailable(){
    burgerList = await orm.selectAll()
    return burgerList.filter( burger=>burger.devoured == false );
}

async function burgerDevoured(){
    burgerList = await orm.selectAll()
    return burgerList.filter( burger=>burger.devoured == true );
}

async function addBurger(name){
    burgerList = await orm.insertOne()
    return burgerList.filter( name, false );
}

async function burgerDevour(id){
    burgerList = await orm.updateOne()
    return burgerList.filter( id, true );
}

module.exports = { burgerAvailable, burgerDevoured, addBurger, burgerDevour }