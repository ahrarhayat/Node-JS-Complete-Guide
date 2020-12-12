const person = 
{
    name: "Ahrar",
    age:  27,
    greet()
    {
        console.log('Hi '+ 'my name is '+this.name);
    }
};
const printName = (personData) => {
    console.log(personData.name);
}

printName(person);
