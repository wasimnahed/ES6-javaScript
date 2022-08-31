// forEach, map , filter

// var numbers = [10,20,30,40,50];
// console.log(numbers);
// numbers.forEach(function(x,index,arr){
//         arr[index] = x+5;
// })
// console.log(numbers)


// var numbers = [2,3,4,5];
// var squernumber = numbers.map(function(x){
//     return x*x;
// })
// console.log(numbers);
// console.log(squernumber);


var numbers = [10,20,30,40,50];
var newNumber = numbers.filter(function(x){
    return x  >  10;
})
console.log(newNumber);






