const normalPerson = {
    firstName: 'Rahim',
    lestName: 'Uddin',
    salary: 15000,

    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lestName: 'khan',
    salary: 25000,
}    

const friendPerson = {
    firstName: 'sal',
    lestName: 'khan',
    salary: 35000,
}   

//normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendPerson);
// friendlyChargeBill(15000);
// console.log(friendPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 100, 50);
// console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendPerson, 900, 100, 10);
normalPerson.chargeBill.call(friendPerson, 3000, 100, 50);
console.log(friendPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);