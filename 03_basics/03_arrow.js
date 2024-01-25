const user = {
    username: "Abdullah",
    price: 999,

    welcomeMesssage : function(){
        console.log(`${this.username},welcome to website`);
    }
}
//user.welcomeMesssage()










//Arrow functions
const one = () => {
    let username = "Abdullah"
    console.log(this);
}
//one()








//second example ()=>{} arrow functions
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,9));













// Arrow function emplecet examples   mean ma man leta hu apko karle brases k zarorat nhi ha or retunr likna k B
const AddThree = (num3,num4) => num3 + num4
console.log(AddThree(9,8));
