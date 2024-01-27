// in this case we use for each loop


// //const important = ['html','css','javascript','React']

// important.forEach( function (item) {
//     //console.log(item);
// })
    








//another example  with arrow function call back functction i here i use it  just give him one name like ur coice 
 
// const coding = ['html','css','javascript','React']
// coding.forEach(  (item) => {
//     console.log(item);
// })






// Another exaple
// const coding = ['html','css','javascript','React']
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)









// in this exaple we check item , index , arr

const coding = ['html','css','javascript','React']
coding.forEach( (item,index,arr) => {
   console.log(item,index,arr);
} )







/// array ka undar object declair karna
const myCoding = [
    {
        languageName: "javascript",
        languagefilename: "js"
    },
    {
        languageName: "java",
        languagefilename: "py"
    },
    {
        languageName: "phyton",
        languagefilename: "khan"
    },
    
]
myCoding.forEach( (item) => {
   console.log(item.languageName);
} )