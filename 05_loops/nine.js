// reduce

// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);









/// in here i use arrow functions

const myNums = [1,2,3]
const myTotal = myNums.reduce( (acc,currval) => acc+currval,0 )
console.log(myTotal);







//// next example

const Shoppingcart = [
    {
        itemname: "js course",
        price: 299
    },
    {
        itemname: "c++",
        price: 209
    },
    {
        itemname: "iphone",
        price: 28999
    },
]
const priceTopay = Shoppingcart.reduce( (acc,item) => acc + item.price, 0 )
console.log(priceTopay);







