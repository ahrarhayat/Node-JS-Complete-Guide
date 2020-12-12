const person = 
{
    name: "Ahrar",
    age:  27,
    greet()
    {
        console.log('Hi '+ 'my name is '+this.name);
    }
};
// const printName = (personData) => {
//     console.log(personData.name);
// }



//using destructuring, the name attribute will be extracted from the object
const printName = ({name}) => {
    console.log(name);
}

printName(person);

const printAll = ({name,age,greet}) => {
    console.log(name,age,greet);
}

printAll(person);

//another way of destructuring data

const {age,name} = person;
console.log(name,age);

//destructuring arrays

const hobbies = ['Gym','Cooking','Eating'];
const [hobby1,hobby2,hobby3] = hobbies;
console.log(hobby1,hobby2,hobby3);