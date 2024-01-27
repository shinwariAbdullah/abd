//  for loop

for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log(element);
    
}





//second exaple
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
     //   console.log("5 is my best number");
    }
    //console.log(element);
}






//  next exaple loop ma loop

for (let i = 0; i <= 10; i++) {
   // console.log(`outerloop value: ${i}`);

     for (let j = 0; j <= 10 ; j++) {
       // console.log(`inner loop value: ${j} and inner loop ${i}`);
        
     }
}











// array pa loop apply karna
let myArray = ["flash","kashif","ihsan","bilal","Abdullah"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
    
}







// break and continue

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
   //     console.log(`detected 5`);
        break
    }
  // console.log(`value of i is ${index}`);
    
}










/// continue
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`detected 5`);
        continue
    }
   console.log(`value of i is ${index}`);
    
}