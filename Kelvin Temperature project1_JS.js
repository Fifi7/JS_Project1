//The following line of code initializes 293 to constant variable kelvin
const kelvin = 293;
const celcius = kelvin - 273;

// The following code calculates fahrenheit:
let fahrenheit = celcius * (9 / 5) + 32;

//The following code converts Celcious to Fahrenheit and rounds it off using the .floor() method:
fahrenheit = Math.floor(fahrenheit);

//The following code prints out the value of fahrenheit:
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
