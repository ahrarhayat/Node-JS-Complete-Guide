const hobbiesMore = ['sports','cooking',69,true];

const hobbies = ['sports','cooking'];
for(let hobby of hobbies)
{
    console.log(hobby);
}

console.log(hobbies.map(hobby =>{
    return 'Hobby: '+hobby;
}));
console.log(hobbies);
hobbies.push('Driving');
console.log(hobbies);

const hobbiesCopy = hobbies.slice(0,2);
console.log(hobbiesCopy);
const arrayWithInArray = [hobbies];
console.log(arrayWithInArray);

//use of spread operator to copy an array
const arrayWithSpread = [...hobbies];
console.log(arrayWithSpread);

//use of spread operator to copy an object

const person = 
{
    name: "Ahrar",
    age:  27,
    greet()
    {
        console.log('Hi '+ 'my name is '+this.name);
    }
};
const personNew = {...person};
console.log(personNew);
personNew.greet();


//toArray without REST
const toArray = (arg1,arg2,arg3) =>
{
    return [arg1,arg2,arg3];
};

console.log(toArray('a','b','c'));

//toArray without REST operator

const toArrayRest = (...args) =>
{
    return [args];
};

console.log(toArrayRest('a','b','c','d'));
