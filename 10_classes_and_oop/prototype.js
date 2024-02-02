// let myNAme = "Abdullah     "
// let mychannel = "khan"

// console.log(myNAme.trim().length);





let Myheros = ["thor","spiderman"]

let power = {
    thor: "hammar",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Abdullah = function(){
    console.log(`Abdullah is present in all object`);
    
}

Array.prototype.heyAbdullah = function (){
    console.log(`abdullah says hello`);
}

Myheros.heyAbdullah()
//Myheros.Abdullah()









///////////////////////inhertance ////////////////////////////////////////////////////////////////////

const user = {
    name: "Abdullah",
    email: "abdullah@gmail.com"
}

const Teacher = {
    makevideo: true
}

const teacherSupport = {
    isAvalible: false
}
const TAsupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: teacherSupport
}
Teacher.__proto__ = user

///// modern syntax
Object.setPrototypeOf(teacherSupport,Teacher)







/////////////////////////////////////////////////////////////////////////////////////////////////////////
let anotherUsername = "Abdullah     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Abdullah".trueLength()
"iceTea".trueLength()
