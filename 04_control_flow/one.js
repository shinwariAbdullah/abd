// if 

const isUserLoggedIn = true
if (2 != 3) {
    console.log("executed");
}







const temperatue = 42
if (temperatue < 50) {
    console.log("less than 50");       // ya yahi line execute hoga ya else wala 
} else {
  console.log("temperature greater than 50");    // ya else aik execute karega   is ma conditional test hoga else{}
}



 


const weather = 41
if (weather === 40) {
    console.log("less than 50");
} else {
    console.log("weather is greater then than 50");
}
// <, >, <=, >=, ==, !=, ===, !==




const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);
}









//  impeset scope aik he line ma execute
 const balance = 1000
 if (balance > 500) console.log("test");










 // multiples conditions checking 
 const money = 1000
 if (money < 500) {
    console.log("less than 500");

 } else if (money < 750) {
    console.log("less than 750");

 } else if (money < 900) {
    console.log("less than ");
 } else {
    console.log("less than 1200");
 }
    
 




 // another exaple if u want to buy something online am just using one if example

 const userLggedIN = true
 const debitCard = true


 if (userLggedIN && debitCard) {
    console.log("Allow to buy courses");
 }











//  in tis case we checked two statement if logged from email or google to allow user: orr multipe B kar sakta ha
 const loggedfromEmail = true
 const loggedfromGoogle = false

 if (loggedfromEmail || loggedfromGoogle) {
    console.log("logged from email conform");
 }