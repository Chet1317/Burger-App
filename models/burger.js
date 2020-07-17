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
   
    return orm.insertOne( name, false );
}

async function burgerDevour(id){
  
    return orm.updateOne( id, true );
}

module.exports = { burgerAvailable, burgerDevoured, addBurger, burgerDevour }