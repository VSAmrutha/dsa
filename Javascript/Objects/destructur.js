const settings={
    name:"amrutha",
    age:"31",
    height:"5 feet"
}
const data=JSON.stringify(settings,["name","age"])
console.log(data); //{"name":"amrutha","age":"31"}

//*****************************
const user={
    name:"amrutha",
    age:"31",
    height:"5 feet",
    fullname:{
        first:"amrutha",
        last:"holla"
    }
}
const name="luck";
//this is how we rename a destructured key
const {name:renamed}=user
//this is how we destructure nested objects
const {fullname:{first,last}}=user
console.log(renamed); //amrutha
console.log(last); //holla
//********************** */
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };
    return person;
}
const personObj1 = {
    name: 'Alex',
    age: 30
};
const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // {name: 'Alex', age: 25}
console.log(personObj2); // {name: 'John', age: 50}
