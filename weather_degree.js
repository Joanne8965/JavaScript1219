// Kelvin Weather


/*
The forecast today is 293 Kelvin.
To start, create a variable named kelvin, and set it equal to 293.
*/

let kelvin = 293;

//celsius
let celsius = kelvin - 273;

//farenheit
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`)
