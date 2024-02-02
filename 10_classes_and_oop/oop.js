///  object literal


// const user = {
//     username: "Abdullah",
//     loginCount: 9,
//     signedIn: true,

//     getUserdetail: function(){
//         //console.log("got user detail");
//         console.log(`username: ${this.username}`);
//     }
// }
// console.log(user.username);
// console.log(user.getUserdetail());









///////////////////constructor/////////////////////////////////////// har bar aik new instunce new copy de raha ha


function user(username,loginCount,isloggegIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggegIn = isloggegIn

    return this
}
const userOne = new user("Abdullah",12,true)
const userTwo = new user("khan",52,false)
console.log(userOne);
console.log(userTwo);