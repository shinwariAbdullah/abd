const UserEmail = "Abdullah.Ai"
if (UserEmail) {
    console.log("Got user Email");
} else {
    console.log("Dont have any user email");
}



// falsy  valyes 
// false , 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy values 
// "0", "false",  " ", [], {},  functions(){},






/// Array ko check karna ka tareka 
  const userPassword = []

  if (userPassword.length === 0) {
    console.log("Array is empty");
  }








  ///  empty object ko check karna ka tareka
  const emptyObj = {}
  if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
  }









// nulish coalescing operator (??) : null undeifined

let val1
//val1 = 5 ?? 10
val1 = null ?? 10
 val1 = null ?? 10 ?? 20


console.log(val1);









// ternary operator
// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80")