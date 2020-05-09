class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }
}

const heroPerson = new Person('Hero', 'Balam', 2000);
console.log(heroPerson);

const friendlyPerson = new Person('Hero', 'Kamal', 25000);
console.log(friendlyPerson);


// function PersonOld(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new PersonOld('Grand', 'Papa', 1200);
// console.log(oldPerson);\


const start = new Date();
let sum = 0;
for(let i = 0; i<100000000; i++){
    sum++;
}
const end = new Date();
console.log('time elapsed', end-start, sum)