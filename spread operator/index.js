//  function addnumbers(x,y,z){
//      return x+y+z;
//  }
//  let numbers=[1,2,3];
// // console.log(addnumbers(numbers[0],numbers[1],numbers[2]));
//   console.log(addnumbers(...numbers));  //ai line takee sptrad operator bolbo


// function addnumbers(x,y,z){
//     return x+y+z;
// }
// let numbers1=[1,2,3];
// let numbers2=[4,5,6,7];
// let numbers=[...numbers1,...numbers2];
// console.log(numbers);
// console.log(addnumbers(numbers[0],numbers[1],numbers[2]));

// function addnumbers(x,y,z){
//     return x+y+z;
// }
// let numbers1=[1,2,3];
// let numbers2=[4,5,6,7];
// let numbers=numbers1.concat(numbers2);
// console.log(numbers);


let p1 = {
    name:"wasim",
    age:30
}

let p2 = {
    nationality : "Indian",
    profession : "Teacher"
}

let p = {...p1, ...p2};
console.log(p);



