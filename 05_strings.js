const name = "Abdullah"
const repoCount = 10

// console.log(name + repoCount + "shinwari");

console.log(`hello my name is Abdulah${name} and my repocount is ${repoCount}`);


const gameName = new String('shinwari')
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,5)
console.log(newString);


const Another = gameName.slice(1,5)
console.log(Another);



const newStringOne = "    Abdullah   "
console.log(newStringOne);
console.log(newStringOne.trim());


//trim
const str = "   foo  ";
console.log(str.trim()); // 'foo'




//replace

const url = "http://Abdullah.com/Abdullah%20shinwari"
console.log(url.replace('%20','+'));
