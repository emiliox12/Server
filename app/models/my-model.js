const persons = require('./persons.json')

function person(id){
    return {firstname : 'emilio', lastame : 'mendez'}
}

function newPerson(name,age,position){
    return {firstname : name, lastame : age}
}

function getPersons(){
    return persons;
}

module.exports = {
    person,
    newPerson,
    getPersons,
};