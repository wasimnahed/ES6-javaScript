//for----of  ,  for--if
// const names = ["s1","s2","s3"];
// for(let name of names){
//     console.log(name);
// }


//jokon object k niea kaj korbo tokon for-in loop er use khb important

let students = {
    ID: 101,
    name: "wasim",
    cgpa: 3.91
}

for(let x in students){
  console.log(`${x} : ${students[x]}`);
}
