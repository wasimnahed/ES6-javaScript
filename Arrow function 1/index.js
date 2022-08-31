// Traditional function


// function display1(){
//     console.log("I am display1")
// }

// display1();


// Arrow function

function display1(){
    console.log("I am display1");
}

const display2 = () =>{                                      // let  sum  = () =>{}      Arrow function
    console.log("I am display2");
} 

display1();
display2();
 // add two number with arrow function

 const add1 = (num1 , num2) => {    
     return num1+num2;
    
}
console.log(add1(20,30));
