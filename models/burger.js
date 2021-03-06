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

function addBurger(name){
   
    return orm.insertOne( name, false );
}

function burgerDevour(id){
  
    return orm.updateOne(true, id);
}

module.exports = { burgerAvailable, burgerDevoured, addBurger, burgerDevour }