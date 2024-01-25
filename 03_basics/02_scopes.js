// // Global variable
// let globalVariable = 'I am in global scope';

// function myFunction() {
//     // Accessing global variable inside a function
//     console.log('Inside myFunction:', globalVariable); 
// }

// // Accessing global variable outside the function
// console.log('Outside myFunction:', globalVariable); 

// // Calling the function
// myFunction(); 







// nested scope

function one(){
    const username = "Abdullah"

    function two(){
        const website = "udemy"
        console.log(username);
    }
    //console.log(website);

    two()
}
//one()





// else exapme like this
if (true) {
    const username = "Abdullah"
    if (username === "Abdullah") {
        const website = "udemy"
       // console.log(username + website);
    }
}






//++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++


function one() {
    const username = "Abdullah";
    const website = "udemy"; // Moved declaration to outer scope

    function two() {
        console.log(username);
    }

    console.log(website); // Now website is accessible here

    two();
}

one();


