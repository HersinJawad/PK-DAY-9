// class
const App = {
    start() {
        console.log('running')
    },
    end() {
        console.log('stop')
    }
}

App.start();


class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * 2 * this.radius
    }
}
let circle = new Circle(10);
let totalArea = circle.getArea()
console.log('this total area is ${totalArea}')

// FAT Arrow Function
const functionName1 = () => {
    console.log('no parameter')
}
functionName1();

// or

const functionName2 = (argument1) => {
    console.log(argument1)
}
functionName2('show message')

const functionName3 = (argument1) => {
    console.log(argument1)
    return argument1;
};

let sentance = functionName3('i\'am wanna be progamer');
console.log(`this sentance is ${sentance}`);

const functionName4 = (argument1) => `hi i'am argument1 with value ${argument1}`
let sentance = functionName4('Batam')
console.log(`functionName4 is ${newsentance}`);

// objact matching
const object = {
    name: 'Budi',
    gender: 'Male',
    live: 'Batam'
}
console.log

const { name, live } = object
console.log(name, live)

const object1 = {
    name1: 'jaka',
    gender: 'Male',
    live: 'Batam'
}

const person3 = {
    name: 'omni knight',
    class: 'support',
    level: 21,
}

const person4 = {
    ...person3,
    name: 'Tide Hunter',
}

console.log(`personal 3 is`, person3)
console.log(`personal 4 is`, person4)
