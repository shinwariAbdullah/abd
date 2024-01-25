//functions 
function sayName(){   ////   <=
  console.log("Abdullah");
}
//sayName()





// second function example
// function addtwoNumbers(number1,number2){
//  console.log(   number1 + number2);
// }

function addtwoNumbers(number1,number2){
    let result = number1 + number2
    return result
    
}

 const result = addtwoNumbers(3,5)
// console.log("result",result);






function loginUserMessage(username){     //*example Bst */
    return `${username} just logged in`
}
//console.log(loginUserMessage("Abdullah"));










// example shopping cart price add

function calculatecartPrice(...num1){             //... dot dot dot rest opritor
  return num1
}
//console.log(calculatecartPrice(200,7000,7888));









// object ko function pass karna
const username = {
  username: "Abdullah",
  price: 199
}
function hundleObject(anyobject){
   console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
}
//hundleObject(username)









//array
const mynewArray = [200,300,100,800]
function returnsecondvalue(getArray){
   return getArray[0]
}
console.log(returnsecondvalue(mynewArray));


