   /// for of loop   easy for understand 

   const arr = [1,2,3,4,5]

   for (const num of arr) {
   //  console.log(num);
   }










   // second exaple for of
   const names = "Abdullah!"
   for (const Abd of names) {
   // console.log(Abd);
   }




   // third example for of loop
   const Frnds = "Abdyllah, ihsan, kashif"
  for (const khan of Frnds) {
 //   console.log(khan);
  }







  // MAps   ma unike value hote ha     for of loop lagaya ha 

  const map = new Map();
map.set('PK', "Pakistan");
map.set('USA', "United States of America"); 
map.set('FR', "France");
// console.log(map);

for (const [key, value] of map) {
    //console.log(key,value);
}











// object pa for of loop Apply   but here is not working for of loop i checkit
 

// const Myobject = {
//     game1: 'pubg',
//     game2: 'GTA',
//     game3:  'IGI'
// }
// for (const [key,value] of Myobject) {
//     console.log(key,value);
// }








//  Abi object pa apply kia yaha thek ha
const Khan = {
    game1: 'pubg',
    game2: 'GTA',
    game3:  'IGI'
}

for (const [key, value] of Object.entries(Khan)) {
    console.log(key, value);
}






