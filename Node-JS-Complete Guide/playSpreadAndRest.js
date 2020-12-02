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
