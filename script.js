
axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })

let myNumeral = numeral(1000);
let value = myNumeral.value();
console.log(value)

let myNumeral2 = numeral('1,00');
let value2 = myNumeral2.value();
console.log(value2)

// MOMENT
let times = momment().format("MMMM Do YYYY, h:mm:ss a");
console.log(times)
let Data = new Date()
console.log(Date)
