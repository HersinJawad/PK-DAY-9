function myFunction4() {
    let mobil = "ferrari"
    // debugger
    return this
}

myFunction4();



let person = {
    firstName: "Jhon",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        debugger
        return this.firstName + " " + this.lastName
    },
}


console.log(`person fulName is ${person.fullName()}`);

let person1 = {
    fullName: function () {
        debugger;
        return this.firstName + " " + this.lastName;
    },
}

var person2 = {
    firstName: "Jhon",
    lastName: "Doe",
};

person1.fullName.bind(person2)
