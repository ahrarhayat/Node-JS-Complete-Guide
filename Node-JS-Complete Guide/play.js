const name = 'Ahrar';
let age = 27;
const hasHobbies = true;

const summarize = ( userName, userAge, userHasHobby) =>

{
    return ('name is '+userName +' age is '+userAge+' has hobbies '+userHasHobby);
} ;
    

console.log(summarize(name,age,hasHobbies));

const add = (a,b) => a+b;
const randomeAdd = () => 1+7;

console.log(add(6,7));
console.log(randomeAdd());