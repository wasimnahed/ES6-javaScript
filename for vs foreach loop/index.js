// for vs for-each loop
// var numbers = [10,20,30,40,50];
// for(var x=0; x<numbers.length; x++){
//    console.log(numbers[x])
//}

// var numbers = [10,20,30,40,50];
// numbers.forEach(function(x){
// console.log(x);
// })



// var numbers = [10,20,30,40,50];
// var squareNumber = []
// numbers.forEach(function(x){
// squareNumber.push(x*x);
// })
// console.log(squareNumber);



// var numbers = [10,20,30,40,50];
// var squareNumber = []
// numbers.forEach(function(x){
// squareNumber.push(x*x);
// })
// console.log(squareNumber);


var numbers = [10,20,30,40,50];
console.log(numbers);

numbers.forEach(function(x,index,arr){
        arr[index] = x+5;
})
console.log(numbers)
