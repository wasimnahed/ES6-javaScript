// es6 string methods
// startsWith(searchString, position) -> check a string starts with another string
// all these methods are case sensitive

const message = "Today is friday";

console.log(message.startsWith("Today"));      //output: true
console.log(message.startsWith("today"));      //output: false
console.log(message.startsWith("Today", 0));   //output: true
console.log(message.startsWith("Today", 5));   //output: false


// endsWith(searchString, length) -> check a string ends with another string
console.log(message.endsWith("today"));  //output: false
console.log(message.endsWith("friday"));  //output: true

// includes(searchString, position) -> check if a string contains another string
console.log(message.includes("Today"));  //output: true
console.log(message.includes("is"));      //output: true
console.log(message.includes("that"));     //output: false




