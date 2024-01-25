// //object 

// const tinderUser = {}
// tinderUser.id = "12334"
// tinderUser.name = "Abdullah"
// tinderUser.email = "kahnakhan@gmail.com"
// tinderUser.LoggedIn = "monday"
// //console.log(tinderUser);








// //object ma object
// const RegularUser = {
//     email: "Abdullahkhan@gmail.com",
//     fullname: {
//         userFullname: {
//             firstName: "Abdullah",
//             lastname: "khan"
//         }
//     }
// }

// console.log(RegularUser.fullname);









// // Combine objects using Object.assign
// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "a", 4: "b"};

// // Corrected: Create a new empty object as the target
// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1, ...obj1}
// //console.log(obj3);




// const users = [
//     {
//         id: 1,
//         email: "khan@.gmail.com"
//     },
//     {
//         id: 1,
//         email: "khan@.gmail.com"
//     },
//     {
//         id: 1,
//         email: "khan@.gmail.com"
//     },
// ]
// console.log(users);
// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));










const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "Abdullah"
}
const{courseInstructor} = course
console.log(courseInstructor);





[
    {},
    {},
    {}
]