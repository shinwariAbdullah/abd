// const heros = ["Abdullah","kashif","ihsan","junaid"]
// const Dc = ["spider","flash","batman","yellow"]


// heros.push(Dc)
// console.log(heros);
// console.log(heros[3][1]);


// const Allheros = heros.concat(Dc)
// console.log(heros);










// Example using concat with names
// let firstNames = ['John', 'Alice'];
// let lastNames = ['Doe', 'Smith'];

// let fullNames = firstNames.concat(lastNames);

// console.log(fullNames); 
// // Output: ['John', 'Alice', 'Doe', 'Smith']

// // Original arrays remain unchanged
// console.log(firstNames); // Output: ['John', 'Alice']
// console.log(lastNames);  // Output: ['Doe', 'Smith']









const heros = ["Abdullah","kashif","ihsan","junaid"]
const Dc = ["spider","flash","batman","yellow"]
const All_new_heros = [...heros, ...Dc]
// console.log(All_new_heros);









///array container
// Example of an array containing arrays of numbers
let arrayContainer = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Accessing elements in the nested arrays
  console.log(arrayContainer[0]); // Output: [1, 2, 3]
  console.log(arrayContainer[1][1]); // Output: 5
  console.log(arrayContainer[2][2]); // Output: 9
  











//using flat
  let nestedArray = [1, [2, [3, [4]]]];

// Using .flat() with Infinity
let flattenedArray = nestedArray.flat(Infinity);

console.log(flattenedArray);
// Output: [1, 2, 3, 4]








// array ban gaya
let myString = "Abdullah";
let myArray = Array.from(myString);

console.log(myArray);
// Output: ['A', 'b', 'd', 'u', 'l', 'l', 'a', 'h']







// is ma sub aik kardiya hum na array ko 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));










let item1 = 'apple';
let item2 = { name: 'orange', quantity: 3 };
let item3 = ['banana', 'grape', 'kiwi'];

let groceryList = Array.of(item1, item2, item3);

console.log(groceryList);
// Output: ['apple', { name: 'orange', quantity: 3 }, ['banana', 'grape', 'kiwi']]















// Certainly! If you want to create an array using the Array.of() method with individual variables, here's another example:

let temperature1 = 25;
let temperature2 = 30;
let temperature3 = 22;

let temperaturesArray = Array.of(temperature1, temperature2, temperature3);

console.log(temperaturesArray);
// Output: [25, 30, 22]

