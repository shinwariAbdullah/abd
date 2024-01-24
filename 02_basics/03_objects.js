// singleton
// object.create





// objects literal
const jsUser = {
    name: "Abdullah",
    age: 18,
    location: "peshawar",
    email: "kahna888@gmail.com",
    loggedIN: false,
    lastloggedIn: ["monday","sunday"]
}
// console.log(jsUser.email);
// console.log(jsUser["eamil"]);

//changing in object
jsUser.email = "peshawar@gmail.com"
// Object.freeze(jsUser)   /// is k bad changing nhi hog Q k object freeze hoga mean lock
console.log(jsUser);



jsUser.greeting = function(){
    console.log(helloAbdullah);
}
jsUser.greetingTwo = function(){
    console.log(`HEllo js user, ${this.age}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());












// Another exampes
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    features: ['Navigation', 'Backup Camera', 'Bluetooth'],
    specifications: {
      engine: '2.5L 4-Cylinder',
      fuelType: 'Gasoline'
    }
  };
  
  console.log(car);
  // Output:
  // {
  //   make: 'Toyota',
  //   model: 'Camry',
  //   year: 2022,
  //   color: 'Blue',
  //   features: ['Navigation', 'Backup Camera', 'Bluetooth'],
  //   specifications: { engine: '2.5L 4-Cylinder', fuelType: 'Gasoline' }
  // }
  