// primitive  
// 7 types : string, num, boolean, null, undefined, symbol, bigInt,


const score = 100
const scorevalue = 100.3



// const isloggedIn = false
 const outsideTemp = null
// let userEmail = undefined
// let Email;



// const Id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(Id === anotherId);









// reference Type   is ko (non primitive)   B kehta ha

// Array, objects, functons




const heros = ["Abdullah","khan","shinwari"];     //{}  <= object 

let myObj = {
    name: "Abdullahkha",
    Age: 23,
}



const myFunction = function(){
   console.log("Abdullah khan");
}



console.log(typeof heros);






//////////////////////////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack(primitive), heap(non-primitive)


let myyoutubeName = "abdullah"
let anothername = "shinwari"
console.log(anothername);
console.log(myyoutubeName);








let userOne = {
    name: "Abdllah",
    email: "kahna22@ll.com"
}

let userTwo = userOne
userTwo.email = "Abdullahkhan@hmail.com"
console.log(userOne.email);
console.log(userTwo.email);